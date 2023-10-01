import React from "react";
// react icons
import { HiOutlineExclamationCircle } from "react-icons/hi";

function InfoCard({ styleCustom, children }) {
  return (
    <div className={`${styleCustom} flex items-center justify-center text-xs leading-6 sm:text-sm p-3 sm:p-5 sm:leading-7 rounded-lg bg-blue-100`}>
      <div className="h-full px-3 sm:px-5 pt-1 flex items-start justify-center">
        <HiOutlineExclamationCircle className="text-xl" />
      </div>
      <div>{children}</div>
    </div>
  );
}

export default InfoCard;
