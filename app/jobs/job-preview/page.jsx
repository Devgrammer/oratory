import Image from "next/image";
import React from "react";
import { LuDot } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { GrMoney } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";
import AdobeXD from "../../../public/adbxd.webp";
import AdobeAI from "../../../public/adbai.png";
import Figma from "../../../public/fig.webp";
import Atlassian from "../../../public/images.png";
import { MdPeopleOutline } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { MdHowToReg } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { BsDot } from "react-icons/bs";
const JobPreview = () => {
  // Job Data
  const jobDesc = [
    {
      heading: "About the Job",
      items: [
        "Handle the UI/UX research design",
        "Research the latest web application designs and trends",
        "Conceptualize and visualize",
        "Create graphic content and other graphic-related works",
      ],
    },
    {
      heading: "Benefits",
      items: ["Health insurance", "Provident Fund"],
    },
    {
      heading: "Schedule",
      items: ["Day shift"],
    },
    {
      heading: "Supplemental Pay Types",
      items: ["Performance bonus", "Yearly bonus"],
    },
    {
      heading: "Work Location",
      items: ["In person"],
    },
  ];

  // Company Data
  const companyDetails = [
    {
      heading: "Company Size",
      items: ["1k-2k Employees"],
    },
    {
      heading: "Type",
      items: ["Private"],
    },
    {
      heading: "Sector",
      items: ["Technology"],
    },

    {
      heading: "Funding",
      items: ["Bootstrapped"],
    },
    {
      heading: "Founded In",
      items: ["2019"],
    },
    {
      heading: "Founded By",
      items: ["Scott Farquhar", "Mike Cannon-Brookes"],
    },
  ];

  return (
    <div className="job-preview-main-container flex box-border ">
      {/* Job Previews Left Section */}
      <div className="job-preview-left-section w-[70%] py-[24px]  border-r-2 border-gray-200 ">
        {/* Job Preview Header */}
        <div className="job-preview-header space-y-4 pb-8 pl-[100px]">
          <div className="job-preview-header-detail-type-a flex  items-center gap-x-2">
            <div className="job-role-name text-[35px] font-semibold text-[#3D3D3D]">
              Senior Product Designer
            </div>
            <LuDot size={40} color="#D1D1D1" />
            <div className="job-posting-time text-[#888888] font-[500] text-[14px]">
              posted 3 days ago
            </div>
            <div className="job-posting-indicator w-fit border border-green-300 flex  items-center justify-center text-green-700 text-[12px] bg-green-50 rounded-full font-[500] box-border h-[22px] pr-2 py-1 cursor-none">
              <span>
                <BsDot size={40} color="#17B26A" className="w-[20px]" />
              </span>
              Open
            </div>
          </div>

          <div className="job-preview-header-detail-type-b flex justify-start gap-x-2">
            {/* Type A Details */}
            <div className="job-preview-header-detail-item flex justify-evenly items-center gap-x-2">
              <div className="job-detail-icon">
                <IoLocationOutline size={24} color="#5D5D5D" />
              </div>

              <div className="job-detail-name text-[20px] font-[500] leading-[27px] text-[#5D5D5D]">
                Delaware, USA
              </div>
            </div>
            <LuDot size={40} color="#D1D1D1" />
            {/* Type B Details */}
            <div className="job-preview-header-detail-item flex justify-evenly items-center gap-x-2">
              <div className="job-detail-icon">
                <GrMoney size={24} color="#5D5D5D" />
              </div>
              <div className="job-detail-name text-[20px] font-[500] leading-[27px] text-[#5D5D5D]">
                $300k-$500k
              </div>
            </div>
          </div>
        </div>
        <hr />

        {/* Skill, Languages & Type */}
        <div className="job-preview-further-details grid grid-flow-col py-8 grid-cols-4 pl-[100px]">
          {/* Skills */}
          <div className="skills-required-contianer space-y-2 ">
            <div className="container-heading text-[14px] text-[#6E6D6D]">
              Skills Required
            </div>
            <div className="skill-pill-box-container space-y-2 ">
              {/* Skill Pills */}
              <div className="skill-pill-item  flex gap-x-1 items-center border-2 rounded-md w-fit p-1 px-2 justify-center">
                <div className="skill-type-icons">
                  <Image src={Figma} alt="skill" width={16} />
                </div>
                <div className="skill-type-name font-[500] text-[#344054] text-[12px]">
                  Figma
                </div>
              </div>
              <div className="skill-pill-item  flex gap-x-1  items-center border-2 rounded-md w-fit p-1 px-2 justify-center">
                <div className="skill-type-icons">
                  <Image src={AdobeAI} alt="skill" width={16} />
                </div>
                <div className="skill-type-name font-[500] text-[#344054] text-[12px]">
                  Adobe Illustrator
                </div>
              </div>

              <div className="skill-pill-item  flex gap-x-1 items-center border-2 rounded-md w-fit p-1 px-2 justify-center ">
                <div className="skill-type-icons">
                  <Image src={AdobeXD} alt="skill" width={16} />
                </div>

                <div className="skill-type-name text-[#344054] font-[500] text-[12px]">
                  Adobe XD
                </div>
              </div>
            </div>
          </div>
          {/* Languages */}
          <div className="languages-preferred-container space-y-2  ">
            <div className="container-heading text-[14px] text-[#6E6D6D]">
              Preferred Language
            </div>
            <div className="languages-name font-semibold text-[16px] leading-[22px] text-[#3D3D3D]">
              English
            </div>
          </div>
          {/* Type */}
          <div className="job-type-contianer space-y-2">
            <div className="container-heading text-[14px] text-[#6E6D6D]">
              Type
            </div>
            <div className="job-type font-semibold text-[16px] leading-[22px] text-[#3D3D3D]">
              Full Time
            </div>
          </div>
          {/* YOE */}
          <div className="job-type-contianer space-y-2">
            <div className="container-heading text-[14px] text-[#6E6D6D]">
              Year of Experience
            </div>
            <div className="job-type font-semibold text-[16px] leading-[22px] text-[#3D3D3D]">
              3+ Years of Experience
            </div>
          </div>
        </div>
        <hr />

        {/* Job Description */}
        <div className="job-description-container py-8 pl-[100px]">
          {/* About The Job */}
          <div className="about-the-job-container  ">
            {jobDesc.map((jobHeader, el) => {
              return (
                <>
                  <div className="job-desc-heading text-[16px] mt-4 mb-2 leading-[19px] font-[500] text-[#6E6D6D]">
                    {jobHeader.heading}
                  </div>
                  {el === 0 ? (
                    <ol
                      style={{ listStyleType: "number" }}
                      key={`list- ${el}`}
                      className="job-list pl-4 "
                    >
                      {jobHeader.items.map((jobItem, rl) => {
                        return (
                          <li
                            key={`sub-list- ${el}-${rl}`}
                            className="list-item text-[16px] font-[500] text-[#3D3D3D] leading-[28px]"
                          >
                            {jobItem}
                          </li>
                        );
                      })}
                    </ol>
                  ) : (
                    <ul
                      style={{ listStyleType: "disc" }}
                      key={`list- ${el}`}
                      className="job-list  pl-4"
                    >
                      {jobHeader.items.map((jobItem, rl) => {
                        return (
                          <li
                            key={`sub-list- ${el}-${rl}`}
                            className="list-item text-[16px] font-[500] text-[#3D3D3D] leading-[28px]"
                          >
                            {jobItem}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </>
              );
            })}
          </div>
        </div>
        <hr />

        {/* Company Description */}
        <div className="company-details-contianer py-10 pl-[100px]">
          <div className="company-branding-header flex items-center gap-x-4 py-2 pb-8">
            <Image
              src={Atlassian}
              alt="company-logo"
              className="rounded-md"
              width={40}
              height={40}
            />
            <div className="company-name text-[20px] text-[#4F4F4F] font-[500]">
              Atlassian
            </div>
          </div>
          <div className="company-detail-contianer grid grid-cols-2 gap-6 ">
            {companyDetails.map((companyDetail, dl) => {
              return (
                <div
                  key={`company-detail-${dl}`}
                  className="company-detail-item space-y-2"
                >
                  <div className="company-detail-heading text-[14px] font-[500] text-[#6E6D6D] leading-[19px]">
                    {companyDetail.heading}
                  </div>
                  <div className="company-detail-heading-content text-sm leading-[22px] text-[#3D3D3D] font-[500]">
                    {companyDetail.items.toString()}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Job Preview Right Section */}
      <div className="job-preview-right-section mx-auto space-y-8 py-[24px]">
        <div className="job-preview-action-btn-menu flex gap-2">
          <button className="delete-job-btn min-w-[172px] bg-[#FEF4F2] hover:bg-[#DC4A2D] hover:text-white delay-100 ease-in-out flex justify-center items-center gap-x-2  max-w-fit h-[46px] rounded-lg border-2 border-[#DC4A2D] text-[#DC4A2D] px-2 text-[16px] font-[500] leading-[22px] ">
            <RiDeleteBin6Line /> Delete Job
          </button>
          <button className="edit-job-btn min-w-[172px] bg-[#FEF4F2] hover:bg-[#DC4A2D] hover:text-white delay-100 ease-in-out flex justify-center items-center gap-x-2  max-w-fit h-[46px] rounded-lg border-2 border-[#DC4A2D] text-[#DC4A2D] px-2 text-[16px] font-[500] leading-[22px] ">
            <GrEdit /> Edit Job
          </button>
        </div>

        {/* Job Stats */}
        <div className="job-stats space-y-6">
          {/* Applicants */}
          <div className="job-stats-applicants  flex justify-between items-center">
            <div className="jobs-stat-type flex  gap-x-2 items-center">
              <MdPeopleOutline size={20} color="#4F4F4F" />
              <div className="job-stat-type-heading  text-[16px] leading-[22px] font-[500] text-[#4F4F4F]">
                Applicants
              </div>
            </div>
            <div className="job-stats-figure font-[600] text-[20px] leading-[27px] text-[#3D3D3D]">
              400
            </div>
          </div>
          <hr />
          {/* Matches */}
          <div className="job-stats-matches  flex justify-between items-center">
            <div className="jobs-stat-type text-[16px] flex items-center gap-x-2 leading-[22px] font-[500] text-[#4F4F4F]">
              <MdPeopleOutline size={20} color="#4F4F4F" />
              <div className="job-stat-type-heading">Matches</div>
            </div>
            <div className="job-stats-figure font-[600] text-[20px] leading-[27px] text-[#3D3D3D] ">
              100
            </div>
          </div>
          <hr />

          {/* Messages */}
          <div className="job-stats-messages  flex justify-between items-center">
            <div className="jobs-stat-type text-[16px] flex items-center gap-x-2 leading-[22px] font-[500] text-[#4F4F4F]">
              <FiMessageSquare size={20} color="#4F4F4F" />
              <div className="job-stat-type-heading">Messages</div>
            </div>
            <div className="job-stats-figure font-[600] text-[20px] leading-[27px] text-[#3D3D3D]">
              147
            </div>
          </div>
          <hr />
          {/* Views */}
          <div className="job-stats-views  flex justify-between items-center">
            <div className="jobs-stat-type text-[16px] flex items-center gap-x-2 leading-[22px] font-[500] text-[#4F4F4F]">
              <IoEyeOutline size={20} color="#4F4F4F" />
              <div className="job-stat-type-heading">Views</div>
            </div>
            <div className="job-stats-figure font-[600] text-[20px] leading-[27px] text-[#3D3D3D]">
              800
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPreview;
