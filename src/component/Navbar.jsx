import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm mx-auto px-8 md:px-12 lg:px-16 xl:px-24">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>

          <ul tabIndex="-1" className="menu menu-sm dropdown-content z-1 mt-3 w-52 p-2 bg-base-100 shadow rounded-box">
            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-blue-700" : "text-black"}>Home</NavLink></li>
            <li><NavLink to="/mybookings" className={({ isActive }) => isActive ? "text-blue-700" : "text-black"}>MyBookings</NavLink></li>
            <li><NavLink to="/blogs" className={({ isActive }) => isActive ? "text-blue-700" : "text-black"}>Blogs</NavLink></li>
            <li><NavLink to="/contactus" className={({ isActive }) => isActive ? "text-blue-700" : "text-black"}>ContactUs</NavLink></li>
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <img src={logo} alt="Phudu Logo" className="h-8 w-8 object-contain" />
          <Link to="/" className="font-bold text-xl text-gray-900">Phudu</Link>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to="/" className={({ isActive }) => isActive ? "underline font-bold text-blue-700" : "text-black"}>Home</NavLink></li>
          <li><NavLink to="/mybookings" className={({ isActive }) => isActive ? "underline font-bold text-blue-700" : "text-black"}>MyBookings</NavLink></li>
          <li><NavLink to="/blogs" className={({ isActive }) => isActive ? "underline font-bold text-blue-700" : "text-black"}>Blogs</NavLink></li>
          <li><NavLink to="/contactus" className={({ isActive }) => isActive ? "underline font-bold text-blue-700" : "text-black"}>ContactUs</NavLink></li>
        </ul>
      </div>

      <div className="navbar-end hidden lg:flex">
        <a
          className="bg-blue-600 rounded-2xl text-white px-4 py-2"
          href="https://www.youtube.com/watch?v=Ezv8sdTLxKo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Emergency
        </a>
      </div>
    </div>
  );
};

export default Navbar;
