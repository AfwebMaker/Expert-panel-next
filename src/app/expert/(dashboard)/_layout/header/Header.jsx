"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
//components
import HamburgerMenu from "@/app/expert/(dashboard)/_layout/header/_components/HamburgerMenu";
import DropDownMenu from "@/app/expert/(dashboard)/_layout/header/_components/DropDownMenu";
// public --> images
import kargosha_logo from "@/public/images/layout/header/kargosha_logo.svg";
import kargosha_typo from "@/public/images/layout/header/kargosha_typo.svg";

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
    <div className="">
      <div className="h-14"></div>
      <header
        className={`header fixed ${
          showMenu ? "bg-dark" : "bg-white"
        } z-10 top-0 right-0 w-full h-14 flex items-center px-4  justify-start transition-all duration-500 delay-[30ms]`}
      >
        <div className="flex items-end">
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
      </header>
      <DropDownMenu showMenu={showMenu} />
    </div>
  );
}

export default Header;
