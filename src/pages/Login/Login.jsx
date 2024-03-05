import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Hooks/AuthProvider";
import swal from "sweetalert";
import { useNavigate ,useLocation  } from "react-router-dom";
import {Navigate} from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate();
  const {signIn} =useContext(AuthContext)
  const {googleSignIn}= useContext(AuthContext)

  const previousPath = useLocation()
  console.log(previousPath);
  const handleGoogleSignIn =()=>{
    googleSignIn()
    .then((result)=>{
      const user = result.user;
      console.log(user);
     
      navigate('/')
      
    })
  }

  const handleSignIn= (e)=>{
    e.preventDefault()
    const email = e.target.email.value
    const  password = e.target.password.value
    

    signIn(email,password)
    .then((result)=>{
      const user = result.user;
      console.log(user);
      console.log("successfull");
      e.target.reset()
      navigate('/')
      
    })
    .catch((error)=>{
      swal("Your email or password are wrong");
    })

  }


  return (
      <>
      <div className="hero min-h-screen bg-base-200 ">
    
  <div className="hero-content  w-full ">
    
    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
      <h1 className="text-center text-4xl py-5">Login page</h1>
      <form className="card-body"  onSubmit={handleSignIn}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          
        </div>
        <div color="gray" className="mt-4 text-center font-normal">
         Create a new Account ?
          <Link to="/register" className="font-medium text-gray-900">
            Sign Up
          </Link>

          
        </div>
      </form>
      <div className="flex justify-center ">
      <button className="btn btn-active btn-neutral w-2/4 mb-10" onClick={handleGoogleSignIn}>Google Sign in</button>
      </div>
    </div>
  </div>
</div>
      </>
      
   
  );
};

export default Login;
