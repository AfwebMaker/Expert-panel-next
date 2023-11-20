import "../../globals.css";
// font
import iranYekanFont from "/src/constants/localFonts";
// components
import Footer from "./_layout/footer/Footer"
import Header from "./_layout/header/Header";


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
        <Footer />
      </body>
    </html>
  );
}
