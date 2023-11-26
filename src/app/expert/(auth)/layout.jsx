//components
import Main from './_layout/Main'
//redux
import Providers from "@/src/redux/Providers";

export const metadata = {
  title: "کارگشا | ورود",
  description: "ورود به پنل متخصصین",
};

export default function RootLayout({ children }) {
  return (
        <Providers>
          <Main>{children}</Main>
        </Providers>
  );
}