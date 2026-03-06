import React from "react";
import { useLoaderData, useParams } from "react-router";

const DoctorDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const convert = parseInt(id);
  const singleDoc = data.filter((doctor) => doctor.id === convert);

  return (
    <div className="md:w-11/12 mx-auto shadow-2xl text-black  bg-gray-200">
      <div className="bg-white text-center rounded-2xl p-5">
        <h3 className="text-3xl font-bold">Doctor’s Profile Details</h3>
        <p className="w-8/12 mx-auto mt-2.5">
          Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor
          amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis
          turpis imperdiet mattis donec dignissim volutpat.
        </p>
      </div>
      <div>
        <img src={singleDoc.image} alt="" />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default DoctorDetails;
