import React from "react";

const Doctor = ({ doctor }) => {
  const { image, experience, name, education, registrationNumber } = doctor;
  return (
    <div className="border p-3 bg-white flex-1">
      <img className="w-80 mx-auto rounded-2xl" src={image} alt="" />
      <div className="flex items-center gap-3 mt-3">
        <p className="bg-green-200 text-green-700 rounded-3xl p-2">Available</p>
        <p className="bg-blue-200 text-green-700 rounded-3xl p-2">
          {experience}+ experience
        </p>
      </div>
      <h2 className="text-3xl font-bold mt-4">{name}</h2>
      <p className="text-lg text-gray-500 mt-3">{education}</p>
      <p className="border border-dashed text-gray-400 mt-3"></p>
      <p className="mt-4">
        <span className="border p-1 rounded-full font-medium">R</span> Reg No:{" "}
        {registrationNumber}
      </p>
      <button className="btn btn-block bg-white text-blue-600 font-medium mt-3 rounded-4xl text-xl">
        View Details
      </button>
    </div>
  );
};

export default Doctor;
