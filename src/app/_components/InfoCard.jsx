import React from "react";
// react icons
import { HiOutlineExclamationCircle } from "react-icons/hi";

function InfoCard({ styleCustom, children }) {
  return (
    <div className={`${styleCustom} flex items-center justify-start text-xs leading-6 sm:text-sm p-2 sm:p-4 sm:leading-7 rounded-lg bg-blue-100`}>
      <div className="h-full px-3 sm:px-3 flex items-start justify-center">
        <HiOutlineExclamationCircle className="text-xl h-full" />
      </div>
      <div>{children}</div>
    </div>
  );
}

export default InfoCard;
