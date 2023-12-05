import React from "react";
//components
import DesktopTicket from "./_components/DesktopTicket";
// react icons
import { HiHome, HiOutlineChevronLeft } from "react-icons/hi";

function RootLayout({ children }) {
  return (
    <div className="lg:px-5 lg:pt-5">
      <div className='hidden w-full max-w-[1605px] pt-5 xl:pb-5 lg:flex justify-start items-center font-medium text-base'>
        <HiHome size={18} className='h-full' />
        <HiOutlineChevronLeft className='mx-2 h-full' size={15} />
        <div className='ml-2 h-full'>تیکت ها</div>
      </div>
      <div className="fcc">
        <div className="flex w-full max-w-[1605px] flex-col xl:flex-row xl:justify-center py-0 xl:items-start">
          <DesktopTicket />
          {children}
          {/* {React.cloneElement(children, { data })} */}
        </div>
      </div>
    </div>
  );
}

export default RootLayout;
