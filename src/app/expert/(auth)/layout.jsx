import "../../globals.css";
// font
import iranYekanFont from "@/constants/localFonts";

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
        {children}
      </body>
    </html>
  );
}