import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Hooks/AuthProvider";
import swal from 'sweetalert';
const Register = () => {
      const {signUp} =useContext(AuthContext)
      const handleRegister=(e)=>{
        e.preventDefault()
          const email = e.target.email.value
          const  password = e.target.password.value
          if(!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)){
            swal("Minimum eight characters,At least one upper case ,At least one lower case  ,,one special character and one number", );
          }else{
            signUp(email, password)
            .then((result)=>{
              const user = result.user;
              console.log(user);
              swal('Your registration is successful');
            })
            .catch((error)=>{
              swal(error.message);
            })
          }

        
      }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content  w-full ">
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <h1 className="text-center text-4xl py-5">Register page</h1>
            <form className="card-body" onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div color="gray" className="mt-4 text-center font-normal">
                Already have an account?
                <Link to="/login" className="font-medium text-gray-900">
                  Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
