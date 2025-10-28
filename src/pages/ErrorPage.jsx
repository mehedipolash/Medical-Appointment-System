import React from "react";
import Navbar from "../component/Navbar";
import { NavLink } from "react-router";
import Button from "../component/ui/Button";

const ErrorPage = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-right from-blue-50 via-blue-100 to-blue-200 text-center px-6">
        <h1 className="text-[100px] md:text-[140px] font-extrabold text-blue-500 drop-shadow-lg leading-none">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 mt-3 max-w-md">
          The page you're looking for doesn't exist or has been moved. Please
          check the URL or return to the homepage.
        </p>

        <div className="mt-8">
          <NavLink to={"/"}>
            <Button label={"🏠 Back to Home"} />
          </NavLink>
        </div>

        <div className="mt-12 opacity-40 text-sm">
          <p>— Medical Appointment System —</p>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
