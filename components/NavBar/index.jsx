"use client"

import React, { useState } from "react";
import { PiSuitcaseBold, PiHandCoinsBold } from "react-icons/pi";
import { FiMessageSquare } from "react-icons/fi";
import { FiBell } from "react-icons/fi";
import Atlassian from "./../../public/images.png";
import Image from "next/image";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const NavBar = () => {
  const [navMenu, setNavMenu] = useState([
    {
      id: "jobs",
      isActive: true,
    },
    {
      id: "messages",
      isActive: false,
    },
    {
      id: "payments",
      isActive: false,
    },
  ]);

  const handleClick = (e)=>{
const updatedItems = navMenu.map((item) =>
  item.id === e.target.title ? { ...item, isActive: true } : { ...item, isActive: false }
);

setNavMenu(updatedItems);
console.log('d', navMenu)
  }

  return (
    <div className="navbar-main-contianer border-2 border-gray-200 h-[109px] px-8 py-6 box-border flex items-center justify-center">
      <div className="navbar-sub-container flex  w-full justify-between items-center">
        {/* Left Navbar */}
        <div className="left-sub-contianer">
          <div className="brand-logo w-[110px] h-[61px] flex justify-center items-center border-2 border-[#DC4A2D] bg-[#E7E7E7]">
            Logo
          </div>
        </div>

        {/* Center Navbar */}
        <div className="center-sub-contianer min-w-[538px] flex justify-between p-2  box-border h-[74px] items-center border rounded-[36px]">
          {/* Jobs */}
          <div
            className="center-menu-container "
            title="jobs"
            onClick={(e) => handleClick(e)}
          >
            <div
              className={`center-sub-item-container max-w-fit cursor-pointer h-[58px] text-white gap-x-3 rounded-[49px]   ${
                navMenu.find((item) => item.id === "jobs")?.isActive
                  ? "bg-[#DC4A2D] border-[2px]"
                  : "bg-transaparent text-[#B0B0B0]"
              } border-[#FCB4A5] p-4 box-border flex items-center justify-evenly`}
            >
              <div className="navbar-center-menu-icon">
                <PiSuitcaseBold size={24} />
              </div>
              <div className="navbar-center-menu-item text-[20px] font-[500] leading-[27px]">
                Jobs
              </div>
            </div>
          </div>
          {/* Messages */}
          <div
            className="center-menu-container "
            title="messages"
            onClick={(e) => handleClick(e)}
          >
            <div
              className={`center-sub-item-container cursor-pointer max-w-fit h-[58px] text-white gap-x-3 rounded-[49px]   ${
                navMenu.find((item) => item.id === "messages")?.isActive
                  ? "bg-[#DC4A2D] border-[2px]"
                  : "bg-transaparent text-[#B0B0B0]"
              } border-[#FCB4A5] p-4 box-border flex items-center justify-evenly`}
            >
              <div className="navbar-center-menu-icon">
                <FiMessageSquare size={24} />
              </div>
              <div className="navbar-center-menu-item text-[20px] font-[500] leading-[27px]">
                Messages
              </div>
            </div>
          </div>
          {/* Payments */}
          <div
            className="center-menu-container "
            title="payments"
            onClick={(e) => handleClick(e)}
          >
            <div
              className={`center-sub-item-container max-w-fit cursor-pointer h-[58px] text-white gap-x-3 rounded-[49px]   ${
                navMenu.find((item) => item.id === "payments")?.isActive
                  ? "bg-[#DC4A2D] border-[2px]"
                  : "bg-transaparent text-[#B0B0B0]"
              }  p-4 box-border flex items-center justify-evenly`}
            >
              <div className="navbar-center-menu-icon">
                <PiHandCoinsBold size={24} />
              </div>
              <div className="navbar-center-menu-item text-[20px] font-[500] leading-[27px]">
                Payments
              </div>
            </div>
          </div>
        </div>
        {/* Right Navbar */}
        <div className="right-sub-contianer ">
          <div className="navbar-right-menu-console-item flex justify-evenly items-center gap-x-3">
            <div className="bell-notification cursor-pointer">
              <FiBell color="black" size={24} />
            </div>
            <div className="company-avatar cursor-pointer ">
              <Image
                src={Atlassian}
                className="rounded-full"
                alt="avatar"
                width={40}
                height={40}
              />
            </div>
            <div className="dropdown-btn cursor-pointer">
              <MdOutlineKeyboardArrowDown color="black" size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
