import React from 'react'
import { useContext } from 'react'
import { AuthContext } from './AuthProvider'

import { Navigate } from "react-router-dom";




const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    console.log(user);
    if(user){
      return children
    }

    return <Navigate to="/login"  />
 
}

export default PrivateRoute