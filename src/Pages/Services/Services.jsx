import React from "react";
import success from "../../assets/success-doctor.png";
import success1 from "../../assets/success-patients.png";
import success3 from "../../assets/success-review.png";
import success4 from "../../assets/success-staffs.png";

const Services = () => {
  return (
    <div className=" rounded-2xl mt-20 p-5">
      <h2 className="text-3xl font-bold text-center">
        We Provide Best Medical Services
      </h2>
      <p className="text-center mt-2.5">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.{" "}
      </p>
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        <div className="w-full mx-auto bg-white p-10 flex flex-col justify-center rounded-2xl ">
          <img className="w-11 " src={success} alt="" />
          <h3 className="text-5xl mt-2 mb-1 font-bold">199+</h3>
          <p>Total Doctors</p>
        </div>
        <div className="w-full mx-auto bg-white p-10 flex flex-col justify-center rounded-2xl ">
          <img className="w-11 " src={success1} alt="" />
          <h3 className="text-5xl mt-2 mb-1 font-bold">467+</h3>
          <p>Total Reviews</p>
        </div>
        <div className="w-full mx-auto bg-white p-10 flex flex-col justify-center rounded-2xl ">
          <img className="w-11 " src={success3} alt="" />
          <h3 className="text-5xl mt-2 mb-1 font-bold">1900+</h3>
          <p>Patients</p>
        </div>
        <div className="w-full mx-auto bg-white p-10 flex flex-col justify-center rounded-2xl ">
          <img className="w-11  " src={success4} alt="" />
          <h3 className="text-5xl mt-2 mb-1 font-bold">300+</h3>
          <p>Total Stuffs</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
