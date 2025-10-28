import React, { useEffect, useState } from "react";
import DoctorCard from "../component/DoctorCard";
import Button from "./ui/Button";

const DoctorsContainer = ({ doctors }) => {
  const [displayDoctors, setDisplayDoctors] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      setDisplayDoctors(doctors);
    } else {
      setDisplayDoctors(doctors.slice(0, 6));
    }
  }, [doctors, showAll]);

  return (
    <div className="py-12">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {displayDoctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor}></DoctorCard>
        ))}
      </div>
      {/*  */}

      <div className="flex justify-center">
        <Button
          type="submit"
          label={showAll ? "show less" : "show all"}
          onClick={() => {
            setShowAll((prev) => !prev);
            if (showAll) window.scrollTo(0, 280);
          }}
        ></Button>
      </div>
    </div>
  );
};

export default DoctorsContainer;
