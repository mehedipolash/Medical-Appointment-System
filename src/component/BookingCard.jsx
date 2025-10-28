import React from "react";

const BookingCard = ({ doctor, handleDelete }) => {
  const { id, name, speciality, fee } = doctor;

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-md rounded-2xl p-6 border border-gray-200 mb-4 w-full">
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600 text-sm mt-1">{speciality}</p>
        <p className="text-gray-700 font-medium mt-2">Fee: ${fee}</p>
      </div>

      <div className="mt-4 md:mt-0">
        <button
          onClick={() => handleDelete(id)}
          className="px-5 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition duration-200"
        >
          Cancel Appointment
        </button>
      </div>
    </div>
  );
};

export default BookingCard;
