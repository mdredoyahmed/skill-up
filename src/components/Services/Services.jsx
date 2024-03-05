import React, { useEffect, useState } from 'react'
import Service from './Service'

const Services = () => {
    const [data, setData]=useState()
    useEffect(()=>{
        fetch('/data.json')
        .then(res=>res.json())
        .then(course=>setData(course))
      
    },[])
  return (
  <div className='my-5'    >
            <h1 className='text-4xl font-bold text-amber-800 text-center mb-20'>Our Popular Services</h1>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        { 
            data?.map((item)=>(
                <Service key={item.id} item={item} />
            ))
        } 
    </div>
  </div>
  )
}

export default Services