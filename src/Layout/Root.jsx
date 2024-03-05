import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const Root = () => {
  return (
    <div className='container mx-auto'>
        <Navbar />
        <Outlet />
        <Footer />
       
    </div>
  )
}

export default Root