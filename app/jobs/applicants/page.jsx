import React from "react";
import Apply from "../../../public/undraw_Futuristic_interface_re_0cm6.png";
import Image from "next/image";
import { EmptyPreview } from "@/components";

const Applicants = () => {
  return (
    <div className="message-preview-contianer flex justify-center items-center h-fit">
      <EmptyPreview alertMessage={"No applicants for now!"} img={Apply} />
    </div>
  );
};

export default Applicants;
