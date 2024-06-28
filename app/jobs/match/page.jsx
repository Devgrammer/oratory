import React from "react";
import Matches from "../../../public/undraw_Surveillance_re_8tkl.png";
import Image from "next/image";
import { EmptyPreview } from "@/components";

const Match = () => {
  return (
    <div className="message-preview-contianer flex justify-center items-center h-fit">
      <EmptyPreview alertMessage={"No matches for now!"} img={Matches} />
    </div>
  );
};

export default Match;