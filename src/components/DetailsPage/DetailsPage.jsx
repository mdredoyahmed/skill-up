import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const DetailsPage = () => {
  const [data, setData] = useState({});

  const {id} = useParams();
  console.log(id);

  const courses = useLoaderData();
 console.log(courses);
 

 useEffect(()=>{

    const findCourse= courses?.find(course => course.id == id )
    setData(findCourse);

 },[ id,courses])
  console.log(data);
  

  return (
    <div>
    
       <div className="mb-20">
        <img className="w-full h-[400px]" src={data.image} alt="" />
        <div className="mt-5 ">
          <h1 className="text-4xl text-amber-700">{data.event_name}</h1>
          <h1 className="mt-2 text-red-500 font-semibold ">
            Date : {data.date}
          </h1>
          <h1 className="mt-2 text-gray-700 ">{data.description}</h1>
          <h1 className="font-semibold mt-5">Organizer : {data.organizer}</h1>
          <h1 className="font-semibold mt-5">
             
            Registration Fees :
            <span className="text-red-500"> {data.price} </span>{" "}
          </h1>
          <h1>
            Registration Link :
            <span className="text-blue-600"> {data.registration_link} </span>{" "}
          </h1>
        </div>
      </div>  
    </div>
  );
};

export default DetailsPage;
