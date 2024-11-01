import React from "react";
import { assets } from "../assets/assets";
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlineWallet,
  AiOutlineBell,
} from "react-icons/ai";
import { MdOndemandVideo } from "react-icons/md";
import {
  FaRegFlag,
  FaUser,
  FaFacebookMessenger,
  FaFacebook,
} from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";

export const HeaderArea = () => {
  return (
    <div className="flex flex-col w-full h-auto gap-2 md:gap-4">
      <div className="top-0 z-10 w-full bg-white shadow-md flex justify-between items-center px-4 h-16 relative">
        {/* First header: logo and search */}
        <div className="flex items-center w-full">
          <div className="logo">
            <FaFacebook
              className="text-4xl sm:text-5xl md:text-6xl"
              style={{ color: "#1b0877" }}
            />
          </div>
          <div className="flex items-center bg-gray-100 rounded-full px-2 py-1 ml-2 w-48 sm:w-64 md:w-80 lg:w-96 border border-gray-300">
            <AiOutlineSearch className="text-gray-500 text-3xl" />
            <input
              type="search"
              placeholder="Search Facebook"
              className="bg-gray-100 w-full outline-none pl-3 text-xs sm:text-sm"
            />
          </div>
        </div>

        {/* Middle header: icons (visible only above 1500px) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden 2xl:flex flex-grow justify-center items-center space-x-20">
          <AiFillHome className="text-2xl sm:text-3xl cursor-pointer text-blue-800" />
          <FaRegFlag className="text-2xl sm:text-3xl cursor-pointer" />
          <MdOndemandVideo className="text-2xl sm:text-3xl cursor-pointer" />
          <FaUser className="text-2xl sm:text-3xl cursor-pointer" />
          <AiOutlineWallet className="text-2xl sm:text-3xl cursor-pointer" />
        </div>

        {/* Third header: messenger, notifications, profile picture */}
        <div
          className="flex items-center space-x-10 md:space-x-4"
          style={{ gap: "10px" }}
        >
          <CgMenuGridO className="text-2xl sm:text-3xl cursor-pointer" />
          <FaFacebookMessenger className="text-2xl sm:text-3xl cursor-pointer" />
          <AiOutlineBell className="text-2xl sm:text-3xl cursor-pointer" />
          <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full overflow-hidden">
            <img
              src={assets.img3}
              alt="dp"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Responsive middle header for smaller screens */}
      <div className="2xl:hidden flex justify-end items-center w-full bg-white shadow-md h-16 mt-2 px-4">
        <div className="flex justify-between items-center space-x-4 md:space-x-6 lg:space-x-10 w-full">
          <AiFillHome className="text-2xl sm:text-3xl text-blue-600 cursor-pointer" />
          <FaRegFlag className="text-2xl sm:text-3xl cursor-pointer" />
          <MdOndemandVideo className="text-2xl sm:text-3xl cursor-pointer" />
          <FaUser className="text-2xl sm:text-3xl cursor-pointer" />
          <AiOutlineWallet className="text-2xl sm:text-3xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default HeaderArea;
