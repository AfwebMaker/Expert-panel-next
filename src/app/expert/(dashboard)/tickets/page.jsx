import React from "react";
//components
import MobileNavigation from "./_components/MobileNavigation";
// react icons
import { HiOutlineTicket } from "react-icons/hi";

function page() {
  return (
    <div className="flex">
      {/* <MobileNavigation /> */}
      <div className="bg-gray-500 w-[715px] max-w-[715px] h-[850px] flex items-start justify-center py-10">
        <div className="rounded-full bg-primary-200 w-20 h-20">
          <HiOutlineTicket/>
        </div>
      </div>
    </div>
  );
}

export default page;
