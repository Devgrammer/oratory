import React from "react";
import Cat from "../../public/undraw_Cat_epte.png";
import Image from "next/image";
import { EmptyPreview } from "@/components";
import Pay from '../../public/undraw_Transfer_money_re_6o1h.png'

const Payments = () => {
  return (
    <div className="payments-preview-contianer flex justify-center items-center h-fit">
      <EmptyPreview alertMessage={"No payments for now!"} img={Pay} />
    </div>
  );
};

export default Payments;
