import "../../globals.css";
// font
import iranYekanFont from "@/constants/localFonts";
//components
import Main from './_layout/Main'
//redux
import Providers from "@/src/redux/Providers";

export const metadata = {
  title: "login",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    
        <Providers>
          <Main>{children}</Main>
        </Providers>
      
  );
}