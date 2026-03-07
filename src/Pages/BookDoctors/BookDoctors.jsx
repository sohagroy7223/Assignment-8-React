import React from "react";
const BookDoctors = ({ doctor, cancelBooking }) => {
  const { name, education, fee } = doctor;
  return (
    <div className="bg-white w-11/12 mx-auto p-10 rounded-2xl mt-10">
      <h3 className="font-bold text-lg">{name}</h3>
      <div className="flex justify-between">
        <p className="mt-2">{education}</p>
        <p>Appointment Fee : {fee} Taka + Vat</p>
      </div>
      <button
        onClick={() => cancelBooking(doctor.id)}
        className="btn btn-block rounded-4xl text-amber-700 text-xl mt-5 bg-white border-3 border-amber-700"
      >
        Cancel Appointment
      </button>
    </div>
  );
};

export default BookDoctors;
