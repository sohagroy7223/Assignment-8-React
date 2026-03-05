import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handelMenu = () => {
    setOpen(!open);
  };

  const links = (
    <div
      className={`flex md:hidden bg-blue-700 rounded-2xl absolute ml-7 p-5 leading-8 duration-700 ${open ? "mt-36" : "-mt-64"} flex-col font-medium`}
    >
      {/* tap */}
      <ul>
        <li className="hover:bg-blue-500 px-2.5">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="hover:bg-blue-500 px-2.5">
          <NavLink to="/booking">My-Bookings</NavLink>
        </li>
        <li className="hover:bg-blue-500 px-2.5">
          {" "}
          <NavLink to="/blog">Blogs</NavLink>
        </li>
        <li className="hover:bg-blue-500 px-2.5">
          {" "}
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
      </ul>
    </div>
  );
  return (
    <div className="flex justify-between items-center p-5 bg-amber-800">
      <span onClick={handelMenu} className="md:hidden">
        {open ? <IoClose size={28} /> : <GiHamburgerMenu size={26} />}{" "}
      </span>

      <div className="md:flex hidden gap-1.5 items-center">
        {/* logo */}
        <img src={logo} alt="" />
        <h3 className="text-3xl font-bold">Phudu</h3>
      </div>
      {/* responsive sm device */}
      {links}

      {/* large device */}
      <div className="md:flex hidden gap-8 font-medium">
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
