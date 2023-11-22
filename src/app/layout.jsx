import "./globals.css";
// fonts
import iranYekanFont from "@/constants/localFonts";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
          {children}
      </body>
    </html>
  );
}
