import React from "react";
import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <header className="flex justify-between items-center h-20 px-20 border-b border-gray-200 relative">
      {/* Logo */}
      <a href="#">
        <img src={logo} alt="Hireoon Logo" className="w-41 h-5.5" />
      </a>

      {/* Navbar */}
      <nav>
        <ul className="flex items-center gap-8 list-none">
          <li>
            <a
              href="#"
              className="text-[#111111] font-semibold text-lg hover:text-[#0d3d9b] transition-all duration-200 ease-in-out"
            >
              Find Jobs
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[#111111] font-semibold text-lg hover:text-[#0d3d9b] transition-all duration-200 ease-in-out"
            >
              Companies
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[#111111] font-semibold text-lg hover:text-[#0d3d9b] transition-all duration-200 ease-in-out"
            >
              For Employers
            </a>
          </li>
          <li>
            <a
              href="#"
              className="bg-[#0843c5] text-white px-4 py-2 rounded-md font-semibold text-lg hover:bg-[#0d3d9b] transition-all duration-200 ease-in-out"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
