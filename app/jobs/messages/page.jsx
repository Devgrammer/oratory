import React from "react";
import Msg from "../../../public/undraw_my_app_re_gxtj.png";
import Image from "next/image";
import { EmptyPreview } from "@/components";

const Messages = () => {
  return (
    <div className="message-preview-contianer flex justify-center items-center h-fit">
      <EmptyPreview alertMessage={"No message for now!"} img={Msg} />
    </div>
  );
};

export default Messages;
