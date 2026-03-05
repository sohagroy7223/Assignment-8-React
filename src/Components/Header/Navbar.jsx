import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-1.5 items-center">
        {/* logo */}
        <img src={logo} alt="" />
        <h3 className="text-3xl font-bold">Phudu</h3>
      </div>
      <div className="flex gap-8 font-medium">
        {/* tap */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/booking">My-Bookings</NavLink>
        <NavLink to="/blog">Blogs</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </div>
      <button className="btn bg-green-500">Emergency</button>
    </div>
  );
};

export default Navbar;
