import React from "react";
import Navbar from "../../Components/Header/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Outlet, useNavigation } from "react-router";
import DaisyNav from "../../Components/Header/DaisyNav";

const Root = () => {
  const navigation = useNavigation();
  return (
    <div className="md:w-11/12 mx-auto shadow-2xl text-black bg-gray-200">
      <Navbar></Navbar>
      {navigation.state === "loading" ? (
        <div className="flex justify-center items-center h-[60vh]">
          <span className="loading loading-bars loading-md"></span>
        </div>
      ) : (
        /* <DaisyNav></DaisyNav> */
        <Outlet></Outlet>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Root;
