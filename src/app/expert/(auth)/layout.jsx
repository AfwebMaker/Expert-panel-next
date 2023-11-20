import "../../globals.css";
// font
import iranYekanFont from "/src/constants/localFonts";
//components
import Main from './_layout/Main'
//redux
import Providers from "/src/redux/Providers";

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
        <Providers>
          <Main>{children}</Main>
        </Providers>
      </body>
    </html>
  );
}