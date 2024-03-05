import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import PeopleSay from '../../components/PeopleSay/PeopleSay'
import Services from '../../components/Services/Services'
import Teachers from '../../components/Teachers/Teachers'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <div className='container p-5'>
      <Banner />
      <PeopleSay />
      <Services />
      <Teachers />
    </div>
  )
}

export default Home