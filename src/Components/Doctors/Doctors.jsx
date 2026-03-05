import React, { use } from "react";
import Doctor from "../Doctor/Doctor";

const Doctors = ({ doctorsPromise }) => {
  const doctors = use(doctorsPromise);
  console.log(doctors);
  return (
    <div>
      <h3>all doctors is here {doctors.length}</h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2">
        {doctors.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor}></Doctor>
        ))}
      </div>
      <span className="w-full ">
        <button className="btn mt-3.5 bg-green-600 mx-auto flex justify-center ">
          View All Doctors
        </button>
      </span>
    </div>
  );
};

export default Doctors;
