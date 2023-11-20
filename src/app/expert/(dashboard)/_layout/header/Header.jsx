"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
//components
import HamburgerMenu from "/src/app/expert/(dashboard)/_layout/header/_components/HamburgerMenu";
import DropDownMenu from "/src/app/expert/(dashboard)/_layout/header/_components/DropDownMenu";
import HeaderDesktop from "./_components/HeaderDesktop";
// public --> images
import kargosha_logo from "/public/images/layout/header/kargosha_logo.svg";
import kargosha_typo from "/public/images/layout/header/kargosha_typo.svg";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [marginRight, setMarginRight] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const header = document.querySelector(".header");
      const rect = header.getBoundingClientRect().width / 2 - 30;
      setMarginRight(rect + "px");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-14 lg:h-[88px] sticky top-0 z-50">
      {/* <div className=""> */}
      <header
        className={`header z-10 lg:bg-white w-full h-14 lg:h-[88px] flex items-center pr-4 pl-6 justify-start transition-all duration-500 delay-[30ms] ${
          showMenu ? "bg-dark" : "bg-white"
        }`}
      >
        <div className="flex items-end lg:hidden">
          <div
            className="transition-all duration-500"
            style={{ marginRight: `${showMenu ? marginRight : ""}` }}
          >
            <Image
              className="ml-2"
              src={kargosha_logo}
              alt="Picture of the author"
              width={30}
              height={30}
            />
          </div>
          <Image
            hidden={showMenu}
            src={kargosha_typo}
            alt="Picture of the author"
            height={20}
            priority
          />
        </div>
        <HamburgerMenu showMenu={showMenu} setShowMenu={setShowMenu} />
        <HeaderDesktop />
      </header>
      <DropDownMenu showMenu={showMenu} />
      {/* </div> */}
    </div>
  );
}

export default Header;
