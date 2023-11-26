import "../../globals.css";
// fonts
import iranYekanFont from "@/constants/localFonts";
// redux provider
import Providers from "../../../redux/Providers";
// components
import Main from "../(dashboard)/_layout/Main"

export const metadata = {
  title: "پنل متخصصین | ",
  description: "",
};

export default function RootLayout({ children }) {
  console.log()
  return (
    
        <Providers>
          <Main>{children}</Main>
        </Providers>
      
  );
}
