import React from "react";
import Navbar from "../../Components/Header/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Outlet } from "react-router";
import DaisyNav from "../../Components/Header/DaisyNav";

const Root = () => {
  return (
    <div className="md:w-11/12 mx-auto shadow-2xl text-black bg-gray-200">
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
