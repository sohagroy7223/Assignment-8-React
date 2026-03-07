import React, { use } from "react";
import ShowChart from "../ShowChart/ShowChart";

const FeeChart = ({ doctorsPromise }) => {
  const data = use(doctorsPromise);

  return (
    <div>
      {data.map((doctors) => (
        <ShowChart key={doctors.id} doctors={doctors}></ShowChart>
      ))}
    </div>
  );
};

export default FeeChart;
