import "../../globals.css";
// font
import iranYekanFont from "@/constants/localFonts";
//toast
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "login",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        suppressHydrationWarning={true}
        className={`${iranYekanFont.variable} font-sans`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}