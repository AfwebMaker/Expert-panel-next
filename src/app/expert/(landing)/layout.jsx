import "../../globals.css";
// font
import iranYekanFont from "@/constants/localFonts";
// components
import Footer from "./_layout/footer/Footer"
import Header from "./_layout/header/Header";


export const metadata = {
  title: "پنل متخصصین | ",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
