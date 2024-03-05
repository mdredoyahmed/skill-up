 import React from 'react'
import { createContext } from 'react'
import { getAuth, signInWithEmailAndPassword ,GoogleAuthProvider,signInWithPopup, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

import app from './../firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';
 export const AuthContext= createContext(null)
 const auth= getAuth(app)
 const googleProvider = new GoogleAuthProvider()

 const AuthProvider = ({children}) => {
  const [loading,setLoading]= useState(true)
  const [user ,setUser]=useState()

    const googleSignIn=(value)=>{
      setLoading(true)
     return signInWithPopup(auth,googleProvider)
    }
    const signUp=(email,password)=>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn=(email,password)=>{
      setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut =()=>{
      setLoading(true)
      return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribes= onAuthStateChanged(auth, currentUser=>{
          console.log('state changed');
          setUser(currentUser)
          setLoading( false)
        })

        return (()=>{
          return unSubscribes();
        } )

    },[])


    const AuthInfo={
        googleSignIn,
        loading,
        signUp,
        signIn,
        user,
        logOut
    }
   return (
     <AuthContext.Provider value={AuthInfo}  >
            {
                children
            }
     </AuthContext.Provider>
   )
 }
 
 export default AuthProvider