import React from "react";
import { Link } from "react-router"; 

const DoctorCard = ({ doctor }) => {
  const {
    id,
    name,
    image,
    education,
    speciality,
    details,
    experience,
    registrationNumber,
  } = doctor;

  return (
    <div className="card bg-base-100 shadow-sm h-full flex flex-col">
      <figure>
        <img src={image} alt={name} className="w-full h-80 object-cover rounded-2xl" />
      </figure>

      <div className="card-body flex-1 flex flex-col">
        {/* Availability and Experience in one line */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-green-600 font-semibold p-0.5 border-r-amber-400 rounded-xl bg-[#EBF9F2]">Available</span>
          <span className="text-sm text-blue-600 p-0.7 border-r-amber-400 rounded-xl bg-[#E9EEFC]">{experience} years experience</span>
        </div>

        {/* Name */}
        <h2 className="card-title text-lg font-semibold mb-2">{name}</h2>

        {/* Speciality */}
        <p className="text-gray-500 text-sm mb-2">{speciality}</p>

        {/* Registration Number */}
        <p className="text-gray-600 text-sm mb-4">Reg: {registrationNumber}</p>

        {/* Centered Button at Bottom */}
        <div className="card-actions justify-center mt-auto pt-4">
          <Link to={`/doctordetails/${id}`} className="w-full flex justify-center">
            <button className="relative inline-block px-6 py-3 font-medium group cursor-pointer w-full max-w-xs">
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-1 group-hover:translate-y-1"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span className="relative text-black group-hover:text-white text-sm font-medium">
                View Details
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;