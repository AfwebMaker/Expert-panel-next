import React from "react";
// react icons
import { HiOutlineExclamationCircle } from "react-icons/hi";

function InfoCard({ styleCustom, children }) {
  console.log(styleCustom);
  return (
    <div className={`${styleCustom} flex items-center justify-center text-sm p-5 leading-7 rounded-lg bg-blue-100`}>
      <div className="h-full px-5 pt-1 flex items-start justify-center">
        <HiOutlineExclamationCircle className="text-xl" />
      </div>
      <div>{children}</div>
    </div>
  );
}

export default InfoCard;
