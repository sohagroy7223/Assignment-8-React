import React from "react";
import banner from "../../assets/banner-img-1.png";
import banner2 from "../../assets/banner2.png";
const Banner = () => {
  return (
    <div className=" p-14 border-2 border-white bg-gray-100 rounded-3xl text-black">
      <h2 className="lg:text-5xl text-3xl font-bold text-center p-2">
        Dependable Care, Backed by Trusted Professionals.
      </h2>
      <p className="text-center w-9/12 mx-auto">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a routine
        checkup or urgent consultation, book appointments in minutes and receive
        quality care you can trust.
      </p>
      <div className="text-center mt-4 ">
        <input
          className="border lg:w-72 mr-3 rounded-2xl py-2 px-5"
          type="text"
          placeholder="search any doctor "
        />
        <button className="btn bg-green-500 m-1">search now</button>
      </div>

      <div className="md:flex gap-2 leading-2 mt-6">
        <img src={banner} alt="" />
        <img
          className="w-160 image-full bg-cover rounded-2xl"
          src={banner2}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
