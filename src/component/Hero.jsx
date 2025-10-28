import { useState } from "react";
import bannerImg from "../assets/bannerImg.png";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <div className="py-12">
      <div className="mb-5">
        <img
          src={bannerImg}
          alt="bannerimg"
          className="w-full md:max-w-md lg:max-w-[800px] mx-auto"
        />
      </div>

      <div className="space-y-4 text-center">
        <h1 className="font-thin text-2xl md:text-5xl lg:text-5xl text-gray-900">
          Dependable Care, Backed by Trusted Professionals.
        </h1>
        <p className="text-gray-500">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's <br /> a
          routine checkup or urgent consultation, book appointments in minutes
          and receive quality care you can trust.
        </p>

        <form className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4 md:px-24">
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto justify-center">
            <input
              type="text"
              placeholder="search doctor by name"
              className="bg-white border border-gray-300 rounded shadow-md w-full md:w-80 h-12 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Button type="submit" label="search" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;