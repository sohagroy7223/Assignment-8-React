import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { getDoctorFromLs } from "../../Utility/addToLocalS";
import BookDoctors from "../BookDoctors/BookDoctors";

const Booking = () => {
  const [booking, setBooking] = useState([]);

  const data = useLoaderData();

  useEffect(() => {
    const storeDoctorId = getDoctorFromLs();
    const converted = storeDoctorId.map((id) => parseInt(id));
    // console.log(converted);
    const booking = data.filter((doctor) => converted.includes(doctor.id));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBooking(booking);
  }, [data]);

  return (
    <div>
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
          <BookDoctors doctor={doctor}></BookDoctors>
        ))}
      </div>
    </div>
  );
};

export default Booking;
