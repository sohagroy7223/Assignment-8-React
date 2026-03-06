import React from "react";
import { Link } from "react-router";
import logo from "../../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-white p-10 mt-20">
      <div className="flex items-center gap-2 justify-center mx-auto p-5">
        <img src={logo} alt="" />
        <h3 className="text-3xl font-bold">Phudu</h3>
      </div>
      <div className="flex gap-8 font-medium justify-center">
        {/* tap */}
        <Link to="/">Home</Link>
        <Link to="/booking">My-Bookings</Link>
        <Link to="/blog">Blogs</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <p className="border border-dashed text-gray-400 mt-4"></p>
      <div className="flex gap-4 mt-4 justify-center ">
        <Link to="https://www.facebook.com/sohag.roy.283426">
          <FaFacebook size={30} />
        </Link>
        <Link to="https://www.linkedin.com/in/sohag-roy-/">
          <FaLinkedin size={30} />
        </Link>
        <Link to="https://github.com/sohagroy7223">
          <FaGithub size={30} />
        </Link>
        <Link to="https://www.youtube.com/@sohagroy7223">
          <FaYoutube size={30} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
