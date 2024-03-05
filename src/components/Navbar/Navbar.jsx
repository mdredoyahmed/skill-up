import React from "react";
import { useContext } from "react";
import {  NavLink } from "react-router-dom";
import { AuthContext } from "../../Hooks/AuthProvider";
 

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)
  console.log(user);
  const handleLogout= ()=>{
    logOut()
    .then()
  }
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
            <li>
            <NavLink to='/'> Home  </NavLink>
            </li>
            <li>
              <NavLink to='/about'>About Us</NavLink>
            </li>
            <li>
              <NavLink to='/motive'> Motive</NavLink>
            </li>
            <li>
              <NavLink to='/login'>Login  </NavLink>
            </li>
            <li>
              <NavLink to='/register'>Register  </NavLink>
            </li>
            </ul>
          </div>
          < NavLink to='/' className=" normal-case text-xl">Skill Up</NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
            <NavLink to='/'> Home  </NavLink>
            </li>
          

            <li>
              <NavLink to='/about'>About Us</NavLink>
            </li>
            <li>
              <NavLink to='/motive'> Motive</NavLink>
            </li>
            <li>
              <NavLink to='/login'>Login  </NavLink>
            </li>
            <li>
              <NavLink to='/register'>Register  </NavLink>
            </li>
          </ul>
        
        </div>


       {
        
        user &&   <div className="navbar-end hidden md:flex     ">
          
        <div className="w-12 rounded-full navbar-end flex items-center jc gap-4">
          <p>{user.email}</p>
          <a className="btn btn-primary btn-sm" onClick={handleLogout}>Logout </a>
          <img className="rounded-xl" src={user.photoURL ? user.photoURL : "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" } /> 
          
        </div>
        </div>

       }
        

        
         
      </div>
    </div>
  );
};

export default Navbar;
