import React, { Suspense } from "react";
import Doctors from "../Doctors/Doctors";

const Main = () => {
  const doctorsPromise = fetch("doctors.json").then((res) => res.json());
  return (
    <div className="mt-20">
      <h2 className="text-4xl font-bold text-center p-4">Our Best Doctors</h2>
      <p className="text-center w-9/12 mx-auto">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a routine
        checkup or urgent consultation, book appointments in minutes and receive
        quality care you can trust.
      </p>
      <Suspense>
        <Doctors doctorsPromise={doctorsPromise}> </Doctors>
      </Suspense>
    </div>
  );
};

export default Main;
