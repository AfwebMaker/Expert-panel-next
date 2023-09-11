import "../../globals.css";
// font
import iranYekanFont from "@/constants/localFonts";
// components
import Header from "./_layout/header/Header";
import NavigationBar from "./_layout/navigationBar/NavigationBar";

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
        <Header />
        {children}
        <NavigationBar />
      </body>
    </html>
  );
}
