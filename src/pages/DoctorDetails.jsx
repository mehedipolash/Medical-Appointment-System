import React from "react";
import { useParams, useLoaderData } from "react-router";
import Button from "../component/ui/Button";

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
    <>
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <div className="text-center space-y-4 bg-white rounded-2xl shadow-sm border border-gray-100 py-12 px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Doctor's Profile Details
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Specialist in patient care with expertise in diagnostics and treatments. 
            Focused on preventive care and overall wellness.
          </p>
        </div>
      </div>

      {/* Main Doctor Profile Card */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
          <div className="flex flex-col lg:flex-row">
            {/* Doctor Image */}
            <div className="lg:w-2/5 w-full">
              <img
                src={image}
                alt={name}
                className="w-full h-80 lg:h-full object-cover"
              />
            </div>

            {/* Details Section */}
            <div className="lg:w-3/5 w-full p-6 lg:p-8">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{name}</h2>
                  <p className="text-lg text-blue-600 font-semibold mb-6">{speciality}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-xl mr-3">🎓</span>
                    <div>
                      <strong className="text-gray-800">Education:</strong>
                      <p className="text-gray-700 mt-1">{education}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <span className="text-xl mr-3">💼</span>
                    <div>
                      <strong className="text-gray-800">Experience:</strong>
                      <span className="text-gray-700 ml-2">{experience}</span>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <span className="text-xl mr-3">🆔</span>
                    <div>
                      <strong className="text-gray-800">Registration No:</strong>
                      <span className="text-gray-700 ml-2">{registrationNumber}</span>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="text-xl mr-3">📋</span>
                    <div>
                      <strong className="text-gray-800">Details:</strong>
                      <p className="text-gray-700 mt-1">{details}</p>
                    </div>
                  </div>

                  {/* Available Days */}
                  <div className="flex items-start">
                    <span className="text-xl mr-3">📅</span>
                    <div className="flex-1">
                      <strong className="text-gray-800">Available Days:</strong>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {available_days.map((day, index) => (
                          <span 
                            key={index}
                            className="bg-green-100 text-green-800 px-3 py-2 rounded-lg text-sm font-medium border border-green-200"
                          >
                            {day}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Book Appointment Button
      <div className="max-w-6xl mx-auto px-4 mb-8 flex justify-center">
        <Button label={'Book an appointment'} />
      </div> */}

      {/* Availability Status */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 py-6 px-6">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium border border-green-200">
              ✅ Available for Consultation
            </span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium border border-blue-200">
              📍 Doctor available today
            </span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium border border-purple-200">
              ⏰ Emergency Services
            </span>
          </div>
        </div>
      </div>
    </div>
    <div>{/* Book Appointment Button */}
      <div className="max-w-6xl mx-auto px-4 mb-8 flex justify-center">
        <Button label={'Book appointment'} />
      </div></div></>
    
  );
};

export default DoctorDetails;