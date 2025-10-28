import React from 'react';
import Hero from "../component/Hero";
import DoctorsContainer from "../component/DoctorsContainer";
import { useLoaderData } from "react-router";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Import your images from assets folder
import doctorIcon from "../assets/success-doctor.png";
import patientsIcon from "../assets/success-patients.png";
import reviewIcon from "../assets/success-review.png";
import staffIcon from "../assets/success-staffs.png";

// CountUpCard component
const CountUpCard = ({ end, label, icon }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className="bg-white p-8 rounded-lg shadow-lg max-w-xs mx-auto my-4 transition duration-300 hover:shadow-xl"
    >
      <div className="flex justify-center items-center mb-4">
        {icon && <img src={icon} alt={label} className="w-12 h-12" />}
      </div>

      <div className="text-5xl font-extrabold text-black mb-2">
        {inView ? (
          <CountUp end={end} duration={3} separator="," suffix="+" delay={0} />
        ) : (
          "0+"
        )}
      </div>

      <p className="text-lg font-medium text-gray-600">{label}</p>
    </div>
  );
};

const Home = () => {
  const data = useLoaderData();

  // Stats data with your custom icons
  const stats = [
    { count: 199, label: "Total Doctors", icon: doctorIcon },
    { count: 467, label: "Total Reviews", icon: reviewIcon },
    { count: 1900, label: "Patients", icon: patientsIcon },
    { count: 300, label: "Total Staff", icon: staffIcon },
  ];

  return (
    <div>
      <Hero />

      {/* Doctors Section */}
      <div className="text-center space-y-2 mb-8">
        <h1 className="text-5xl font-bold">Our Best Doctors</h1>
        <p className="text-gray-400 text-[16px]">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a <br />
          routine checkup or urgent consultation, book appointments in minutes
          and receive quality care you can trust.
        </p>
      </div>

      <DoctorsContainer doctors={data} />

      {/* Stats Section */}
      <div className="py-16 px-4 bg-pink-50/50">
        <div className="text-center space-y-2 mb-12">
          <h1 className="text-5xl font-bold">
            We Provide Best Medical Services
          </h1>
          <p className="text-gray-400 text-[16px]">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience.
          </p>
        </div>

        {/* CountUp Cards */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
          {stats.map((stat) => (
            <CountUpCard
              key={stat.label}
              end={stat.count}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>

        {/* Separator Line */}
        <div className="flex justify-center mt-10">
          <div className="h-1 w-20 bg-pink-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
