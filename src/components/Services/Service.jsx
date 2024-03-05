import React from "react";
import { Link, useParams } from "react-router-dom";

const Service = ({ item }) => {
  const { id, event_name, image, location, description } = item;
  return (
    <div className=""  data-aos="zoom-in-up">
      <div className="card card-compact bg-base-100 shadow-xl">
        <img className="h-40 " src={image} alt="Shoes" />

        <div className="card-body">
          <h2 className="card-title">{event_name}</h2>
          <p>{location}</p>
          <div className="card-actions justify-end">
            <Link to={`/details/${id}`}>
              <button className="btn btn-sm btn-outline btn-info">
                Details 
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
