// redux provider
import Providers from "../../../redux/Providers";
// components
import Main from "./_layout/Main"

export const metadata = {
  title: "کارگشا | پنل متخصصین",
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
