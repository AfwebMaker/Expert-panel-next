import "../globals.css";
// font
import iranYekanFont from "@/constants/localFonts";


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
        <header className="">هدر</header>
        {children}
        <aside className="">ساید بار</aside>
      </body>
    </html>
  );
}
