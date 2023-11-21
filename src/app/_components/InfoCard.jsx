import React from "react";
// react icons
import { HiOutlineExclamationCircle } from "react-icons/hi";

function InfoCard({ styleCustom, bgColor, children }) {
  return (
    <div style={{backgroundColor:`${bgColor ? bgColor : "#DBEAFE"}`}} className={`${styleCustom} flex items-start justify-start text-xs leading-6 sm:text-sm p-2 sm:p-4 sm:leading-7 rounded-lg`}>
      <div className="px-3 sm:px-3 flex items-start justify-center">
        <HiOutlineExclamationCircle className="text-xl h-full mt-1" />
      </div>
      <div>{children}</div>
    </div>
  );
}

export default InfoCard;
