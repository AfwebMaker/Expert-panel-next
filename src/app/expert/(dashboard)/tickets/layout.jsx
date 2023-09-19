import React from "react";

import DesktopNavigation from "./_components/DesktopNavigation";

function RootLayout({ children }) {
  return (
    <div className="px-5 pt-5">
      <div className="w-full h-[70px] fcc">
        <div className="w-full h-full max-w-[1605px] flex items-center">تیکت‌ها</div>
      </div>
      <div className="fcc">
        <div className="flex w-full max-w-[1605px] flex-col xl:flex-row xl:justify-center py-0 px-5 md:px-0 lg:px-0 xl:items-start">
          <DesktopNavigation />
          {children}
        </div>
      </div>
    </div>
  );
}

export default RootLayout;
