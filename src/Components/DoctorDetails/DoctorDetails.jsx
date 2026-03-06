import React from "react";
import { useLoaderData, useParams } from "react-router";

const DoctorDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const doctorId = parseInt(id);
  const singleDoc = data.find((doctor) => doctor.id === doctorId);
  const {
    image,
    name,
    education,
    workplace,
    registrationNumber,
    availability,
    fee,
  } = singleDoc;
  return (
    <div className="md:w-11/12 mx-auto shadow-2xl text-black">
      <div className="bg-white text-center rounded-2xl p-5">
        <h3 className="text-3xl font-bold">Doctor’s Profile Details</h3>
        <p className="w-8/12 mx-auto mt-2.5">
          Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor
          amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis
          turpis imperdiet mattis donec dignissim volutpat.
        </p>
      </div>
      <div className=" md:flex  w-full mx-auto  gap-4 mt-4 bg-white p-8 rounded-2xl">
        <img className="md:w-96 w-full rounded-2xl" src={image} alt="" />
        <div>
          <p className="text-4xl font-bold">{name}</p>
          <p className="mt-4 text-gray-500 font-medium">{education}</p>
          <h4 className="mt-5 text-xl font-medium">
            <span className=" text-lg text-gray-500 font-bold">
              Working at:{" "}
            </span>
            <br />
            {workplace}
          </h4>
          <p className="border border-dashed text-gray-400 w-full mt-3"></p>
          <p className="mt-4">
            <span className="border p-1 rounded-full font-medium">R</span> Reg
            No: {registrationNumber}
          </p>
          <p className="border border-dashed text-gray-400 w-full mt-4"></p>
          <h4 className="flex gap-2.5 mt-4">
            <span className="text-lg font-bold">Available : </span>{" "}
            {availability.map((available) => (
              <p className="border p-1 rounded-2xl bg-amber-100 ">
                {available}
              </p>
            ))}
          </h4>
          <h4 className="text-lg font-bold mt-3.5">
            Consultation Fee: <span className="text-blue-600">{fee} taka</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
