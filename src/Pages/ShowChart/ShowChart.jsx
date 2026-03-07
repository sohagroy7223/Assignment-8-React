import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
} from "recharts";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "black",
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
  C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2},${y}
  C${x + width / 2},${y + height / 3}
  ${x + (2 * width) / 3},${y + height}
  ${x + width},${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { x, y, width, height, index } = props;
  const color = colors[index % colors.length];

  return <path d={getPath(x, y, width, height)} stroke={color} fill={color} />;
};

const ShowChart = ({ doctors }) => {
  const chartData = doctors.map((doc) => ({
    name: doc.name,
    fee: doc.fee,
  }));

  return (
    <div className="mt-10 flex justify-center">
      <BarChart width={700} height={400} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Bar dataKey="fee" shape={<TriangleBar />}>
          <LabelList dataKey="fee" position="top" />
        </Bar>
      </BarChart>
    </div>
  );
};

export default ShowChart;
