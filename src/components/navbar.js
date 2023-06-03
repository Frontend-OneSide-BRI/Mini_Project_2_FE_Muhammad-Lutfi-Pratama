import React, { useState } from "react";
import logoGaLerry from "../assets/logo.png";

export default function Navbar({ activeMenu : menu, activeMenuListener }) {
  let [activeMenu, setActiveMenu] = useState(menu);

  const handleActiveMenuStyle = menu => {
    if (menu === activeMenu) return "font-semibold text-lg";
    return "opacity-70";
  };

  return (
    <nav className="flex flex-col pb-2 shadow-md rounded-3xl justify-around mx-auto bg-[#fdf7f2ee] md:flex-row md:justify-between md:px-8 xl:container">
      <div className="w-auto h-8 mt-3 md:w-1/4 md:h-auto">
        <ul className="flex justify-around h-[100%] cursor-pointer md:items-center">
          <li
            className="w-1/4 text-center"
            onClick={() => {
              setActiveMenu("home");
              activeMenuListener("home");
            }}
          >
            <p
              className={`transition-all hover:font-semibold hover:text-lg ${handleActiveMenuStyle(
                "home"
              )}`}
            >
              Home
            </p>
          </li>
          <li
            className="w-1/4 text-center"
            onClick={() => {
              setActiveMenu("gallery");
              activeMenuListener("gallery");
            }}
          >
            <p
              className={`transition-all hover:font-semibold hover:text-lg ${handleActiveMenuStyle(
                "gallery"
              )}`}
            >
              Gallery
            </p>
          </li>
        </ul>
      </div>

      <div className="order-first w-full md:order-none md:w-2/4">
        <img
          src={logoGaLerry}
          onClick={() => window.location.reload()}
          className="mx-auto cursor-pointer w-[100px] sm:w-[150px] md:w-[120px] lg:w-[100px]"
          alt="my-logo"
        />
      </div>

      <div className="flex justify-center w-full gap-4 text-sm sm:text-base -order-2 md:order-none md:items-center md:w-1/4 ">
        <button className="px-4 py-1 border-2 rounded-lg sm:py-2 border-yellow-950 hover:scale-105 ">
          Sign Up
        </button>
        <button className="px-4 py-1 text-white transition-all bg-yellow-800 rounded-lg sm:py-2 hover:bg-yellow-900 hover:scale-105">
          Sign In
        </button>
      </div>

      <span class="-order-1 mt-6 mx-auto h-0.5 rounded-full w-5/6 bg-gray-200 lg:w-1/3 md:hidden"></span>
    </nav>
  );
}