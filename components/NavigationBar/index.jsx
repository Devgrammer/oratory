import React from "react";

const NavigationBar = () => {
  return (
    <div className="navigation-bar-main-container h-[67px] border-2 flex justify-start items-center pl-[100px]">
      <div className="navigation-bar-sub-container min-w-[590px] flex justify-between items-center">
        <div className="navigation-bar-menu-item font-semibold text-[#DC4A2D] leading-[27px]  border-b-4 border-[#DC4A2D] h-[67px] flex items-center">
          Job Preview
        </div>
        <div className="navigation-bar-menu-item  text-[#888888] leading-[27px] h-[67px] flex items-center">
          Applicants
        </div>
        <div className="navigation-bar-menu-item  text-[#888888] leading-[27px] h-[67px] flex items-center ">
          Match
        </div>
        <div className="navigation-bar-menu-item  text-[#888888] leading-[27px] h-[67px] flex items-center">
          Messages
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
