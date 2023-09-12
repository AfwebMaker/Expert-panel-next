import React from "react";
// react icons
import { HiLogout } from "react-icons/hi";

function HeaderDesktop() {

    const clickHandler = () => {
        console.log("first")
    }

  return (
    <div className="hidden lg:flex items-center justify-between bg-red-400 w-full h-full">
      <div onClick={clickHandler} className="h-full w-10 bg-amber-300 fcc text-3xl text-cf-300">
        <HiLogout />
      </div>
      <div className="h-full bg-amber-500">d</div>
    </div>
  );
}

export default HeaderDesktop;
