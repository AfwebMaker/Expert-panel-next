import "../../globals.css";
// font
import iranYekanFont from "@/constants/localFonts";
// components
import Header from "./_layout/header/Header";
import NavigatorInterface from "./_layout/navigatorInterface/NavigatorInterface";
import SideBar from "./_layout/navigatorInterface/SideBar";

export const metadata = {
  title: "پنل متخصصین | ",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        suppressHydrationWarning={true}
        className={`${iranYekanFont.variable} font-sans`}
      >
        {/* <Header /> */}
        {/* {children}
        <NavigatorInterface /> */}
        <div className="w-full flex">
          <SideBar />
          <div className="h-full lg:h-screen w-full layout_dashboard">
            <Header />
            <div className="w-full overflow-y-scroll header_dashboard_desk lg:header_dashboard_phone hideScroll">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
