import React from "react";

const Teacher = ({ teacher }) => {
  return (
    
      <div className="card   bg-base-100 shadow-xl" data-aos="fade-left">
         
          <img src={teacher.image} />
        
        <div className="card-body">
          <h2 className="card-title"> {teacher.name}</h2>
          <p>{teacher.title}</p>
          <p>{teacher.bio}</p>
        </div>
      </div>
   
  );
};

export default Teacher;
