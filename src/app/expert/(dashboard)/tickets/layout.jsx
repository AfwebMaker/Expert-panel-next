import React from "react";

import DesktopNavigation from "./_components/DesktopNavigation";

function RootLayout({ children }) {
  return (
    <div>
      <div className="w-full h-[70px] fcc">
        <div className="w-full h-full max-w-[1125px] flex items-center px-5">تیکت‌ها</div>
      </div>
      <div className="fcc">
        <div className="flex max-w-[1125px] flex-col xl:flex-row xl:justify-center py-0 px-5 md:px-28 lg:px-5 xl:items-start">
          <DesktopNavigation />
          {children}
        </div>
      </div>
    </div>
  );
}

export default RootLayout;
