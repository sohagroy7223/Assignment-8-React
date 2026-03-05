import React, { use, useState } from "react";
import Doctor from "../Doctor/Doctor";

const Doctors = ({ doctorsPromise }) => {
  const doctors = use(doctorsPromise);
  const [showAll, setShowAll] = useState(false);

  const DisplayDoctors = showAll ? doctors : doctors.slice(0, 6);

  return (
    <div>
      <h3>all doctors is here {doctors.length}</h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2">
        {DisplayDoctors.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor}></Doctor>
        ))}
      </div>
      <span className="w-full ">
        <button
          onClick={() => setShowAll(!showAll)}
          className="btn mt-3.5 bg-green-600 mx-auto flex justify-center "
        >
          View All Doctors
        </button>
      </span>
    </div>
  );
};

export default Doctors;
