import React from "react";
import error from "../../assets/download.png";

const Error = () => {
  return (
    <div className="relative flex justify-center mt-36">
      <div className="absolute">
        <h2 className="text-3xl font-bold">Not found this Page</h2>
        <img className="rounded-2xl mt-3 w-96" src={error} alt="" />
      </div>
    </div>
  );
};

export default Error;
