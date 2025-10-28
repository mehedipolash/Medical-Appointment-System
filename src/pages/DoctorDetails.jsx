import React from "react";
import { useParams, useLoaderData } from "react-router";

const DoctorDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const singleDoctor = data.find((doctor) => doctor.id === parseInt(id));

  const {
    name,
    image,
    education,
    speciality,
    details,
    experience,
    registrationNumber,
    available_days
  } = singleDoctor;

  return (
    <div className="flex justify-center items-center py-12 px-4">
      <div className="w-full max-w-5xl bg-white shadow-lg border border-gray-200 rounded-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Doctor Image */}
          <div className="md:w-1/2 w-full">
            <img
              src={image}
              alt={name}
              className="object-cover w-full h-64 md:h-full"
            />
          </div>

          {/* Details Section */}
          <div className="md:w-1/2 w-full p-6 md:p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-1">{name}</h2>
              <p className="text-lg text-blue-600 font-semibold mb-4">
                {speciality}
              </p>

              <div className="space-y-3 text-gray-700 text-base">
                <p>
                  <strong>🎓 Education:</strong> {education}
                </p>
                <p>
                  <strong>💼 Experience:</strong> {experience}
                </p>
                <p>
                  <strong>🆔 Registration No:</strong> {registrationNumber}
                </p>
                <p>
                  <strong>📋 Details:</strong> {details}
                </p>
                
                {/* Available Days */}
                <div>
                  <strong>📅 Available Days:</strong>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {available_days.map((day, index) => (
                      <span 
                        key={index}
                        className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {day}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="mt-6 flex justify-start md:justify-end">
              <button className="relative inline-block px-6 py-2 font-medium group cursor-pointer">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  Book Appointment
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;