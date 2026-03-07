import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { getDoctorFromLs, removeDocFromLs } from "../../Utility/addToLocalS";
import BookDoctors from "../BookDoctors/BookDoctors";
import { ToastContainer } from "react-toastify";
import ShowChart from "../ShowChart/ShowChart";

const Booking = () => {
  const [booking, setBooking] = useState([]);

  const data = useLoaderData();

  const cancelBooking = (id) => {
    // console.log("cancel", id);
    const remainingDoctor = booking.filter((doctor) => doctor.id !== id);
    setBooking(remainingDoctor);
    removeDocFromLs(id);
  };

  useEffect(() => {
    const storeDoctorId = getDoctorFromLs();
    const converted = storeDoctorId.map((id) => parseInt(id));

    const booking = data.filter((doctor) => converted.includes(doctor.id));

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBooking(booking);
  }, [data]);

  return (
    <div>
      {booking.length > 0 && <ShowChart doctors={booking} />}
      <ToastContainer />
      <div className={`p-3 w-full ${booking.length > 0 && "hidden"}`}>
        <h3 className="text-3xl font-bold text-center mt-5">
          you have not Booked any Appointment yet
        </h3>
        <p className="text-lg text-center mt-3">
          Our platform connects your verified ,esperance doctors across various
          specialties- all at your conveniences
        </p>
        <Link to="/">
          <button className="btn btn-wide bg-green-600 mx-auto flex justify-center mt-4">
            Book an Appointment
          </button>
        </Link>
      </div>
      <div className={`${booking.length > 0 || "hidden"}`}>
        <h3 className="text-3xl font-bold text-center mt-10">
          My Today Appointments
        </h3>
        <p className="text-center mt-3">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
        {booking.map((doctor) => (
          <BookDoctors
            key={doctor.id}
            cancelBooking={cancelBooking}
            doctor={doctor}
          ></BookDoctors>
        ))}
      </div>
    </div>
  );
};

export default Booking;
