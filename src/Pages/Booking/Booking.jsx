import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getDoctorFromLs } from "../../Utility/addToLocalS";

const Booking = () => {
  const [booking, setBooking] = useState([]);

  const data = useLoaderData();

  useEffect(() => {
    const storeDoctorId = getDoctorFromLs();
    const converted = storeDoctorId.map((id) => parseInt(id));
    // console.log(converted);
    const booking = data.filter((doctor) => converted.includes(doctor.id));
    console.log(booking);
  }, [data]);

  return (
    <div>
      <h3>this is booking page </h3>
    </div>
  );
};

export default Booking;
