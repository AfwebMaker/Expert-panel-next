import "../../globals.css";
// font
import iranYekanFont from "@/constants/localFonts";
// components
import Header from "./_layout/header/Header";
import NavigatorInterface from "./_layout/navigatorInterface/NavigatorInterface";

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
          <div className="bg-blue-300 w-[275px] h-screen hidden lg:flex">f</div>
          <div className="bg-purple-500 h-full lg:h-screen w-full lg:layout_dashboard">
            <div className="w-full h-14 lg:h-[88px] bg-yellow-300 sticky top-0">header</div>
            <div className="w-full overflow-y-scroll header_dashboard_desk lg:header_dashboard_phone hideScroll">
              <div className="w-full h-60 bg-orange-300 mb-3">f</div>
              <div className="w-full h-60 bg-orange-300 mb-3">f</div>
              <div className="w-full h-60 bg-orange-300 mb-3">f</div>
              <div className="w-full h-60 bg-orange-300 mb-3">f</div>
              <div className="w-full h-60 bg-orange-300 mb-3">f</div>
              <div className="w-full h-60 bg-orange-300 mb-3">f</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
