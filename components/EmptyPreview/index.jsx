import React from "react";
import Cat from "../../public/undraw_Cat_epte.png";
import Image from "next/image";

const EmptyPreview = ({img, classNamex,alertMessage}) => {
  return (
    <div className={`empty-preview-contianer flex justify-center items-center ${classNamex}`}>
      <div className="empty-preview-sub-contianer w-fit">
        <Image src={img?img:Cat} alt="preview" className="w-1/2 mx-auto" />
        <div className="alert-message text-[#3D3D3D] text-center">
          {alertMessage?alertMessage:"Not Available"}
        </div>
      </div>
    </div>
  );
};

export default EmptyPreview;
