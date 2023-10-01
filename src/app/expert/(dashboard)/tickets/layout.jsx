import React from "react";
//components
import DesktopTicket from "./_components/DesktopTicket";

function RootLayout({ children }) {
  return (
    <div className="lg:px-5 lg:pt-5">
      <div className="w-full h-[70px] hidden md:fcc">
        <div className="w-full h-full max-w-[1605px] flex items-center">تیکت‌ها</div>
      </div>
      <div className="fcc">
        <div className="flex w-full max-w-[1605px] flex-col xl:flex-row xl:justify-center py-0 md:px-5 xl:items-start">
          <DesktopTicket />
          {children}
          {/* {React.cloneElement(children, { data })} */}
        </div>
      </div>
    </div>
  );
}

export default RootLayout;
