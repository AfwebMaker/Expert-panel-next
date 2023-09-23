import "../../globals.css";
// fonts
import iranYekanFont from "@/constants/localFonts";
// redux provider
import Providers from "../../../redux/Providers";
// components
import Main from "@/app/expert/(dashboard)/_layout/Main"

export const metadata = {
  title: "پنل متخصصین | ",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/@majidh1/jalalidatepicker/dist/jalalidatepicker.min.css" />
        <script type="text/javascript" src="https://unpkg.com/@majidh1/jalalidatepicker/dist/jalalidatepicker.min.js"></script>
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${iranYekanFont.variable} font-sans`}
      >
        <Providers>
          <Main>{children}</Main>
        </Providers>
      </body>
    </html>
  );
}
