"use client";

import { Hanalei_Fill } from "next/font/google";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const NavigationBar = () => {
  const router = useRouter();

  const [navBarMenu, setNavBarMenu] = useState([
    {
      id: "job-preview",
      isActive: true,
    },
    {
      id: "applicants",
      isActive: false,
    },
    {
      id: "match",
      isActive: false,
    },
    {
      id: "messages",
      isActive: false,
    },
  ]);

  const handleClick = (e) => {
    let target = e.currentTarget.getAttribute("id");
    router.push(`/jobs/${target}`);
    const updatedItems = navBarMenu.map((item) =>
      item.id === target
    ? { ...item, isActive: true }
    : { ...item, isActive: false }
    );
    setNavBarMenu(updatedItems);
    console.log('d', navBarMenu)
  };


  return (
    <div className="navigation-bar-main-container h-[67px] border-b flex justify-start items-center pl-[100px]">
      <div className="navigation-bar-sub-container min-w-[590px] flex justify-between items-center">
        <div
          id="job-preview"
          className={`navigation-bar-menu-item  leading-[27px]  cursor-pointer  ${
            navBarMenu.find((item) => item.id === "job-preview")?.isActive
              ? "border-[#DC4A2D] border-b-4  text-[#DC4A2D] font-semibold"
              : "text-[#888888] font-[500]  "
          } h-[67px] flex items-center`}
          onClick={(e) => handleClick(e)}
        >
          Job Preview
        </div>
        <div
          id="applicants"
          className={`navigation-bar-menu-item leading-[27px] cursor-pointer ${
            navBarMenu.find((item) => item.id === "applicants")?.isActive
              ? "border-[#DC4A2D] border-b-4  text-[#DC4A2D] font-semibold"
              : "text-[#888888] font-[500] "
          } h-[67px] flex items-center`}
          onClick={(e) => handleClick(e)}
        >
          Applicants
        </div>
        <div
          id="match"
          className={`navigation-bar-menu-item  leading-[27px] cursor-pointer  ${
            navBarMenu.find((item) => item.id === "match")?.isActive
              ? "border-[#DC4A2D] border-b-4  text-[#DC4A2D] font-semibold"
              : "text-[#888888] font-[500] "
          } h-[67px] flex items-center`}
          onClick={(e) => handleClick(e)}
        >
          Match
        </div>
        <div
          id="messages"
          className={`navigation-bar-menu-item leading-[27px] cursor-pointer  ${
            navBarMenu.find((item) => item.id === "messages")?.isActive
              ? "border-[#DC4A2D] border-b-4 text-[#DC4A2D] font-semibold "
              : "text-[#888888] font-[500]"
          } h-[67px] flex items-center`}
          onClick={(e) => handleClick(e)}
        >
          Messages
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
