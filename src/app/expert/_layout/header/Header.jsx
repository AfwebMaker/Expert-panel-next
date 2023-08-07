import React from "react";
import Image from "next/image";
// public --> images
import kargosha_logo from "@/public/images/layout/header/kargosha_logo.svg";
import kargosha_typo from "@/public/images/layout/header/kargosha_typo.svg";

function Header() {
  return (
    <div className="">
      <div className="h-14"></div>
      <header className="fixed top-0 right-0 w-full h-14 flex items-center px-4 bg-red-500">
        <div className="flex items-center">
          <Image
            className=""
            src={kargosha_logo}
            alt="Picture of the author"
            width={30}
            height={30}
          />
          <Image
            src={kargosha_typo}
            alt="Picture of the author"
            height={20}
          />
        </div>
      </header>
    </div>
  );
}

export default Header;
