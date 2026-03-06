import React from "react";
import error from "../../assets/download.png";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="flex flex-col p-28 gap-3 justify-center text-center items-center ">
      <div className="">
        <h2 className="text-3xl font-bold">Not found this Page</h2>
        <img className="rounded-2xl mt-3 w-96" src={error} alt="" />
      </div>
      <Link to="/">
        <button className="btn bg-green-600">Go Back Home</button>
      </Link>
    </div>
  );
};

export default Error;
