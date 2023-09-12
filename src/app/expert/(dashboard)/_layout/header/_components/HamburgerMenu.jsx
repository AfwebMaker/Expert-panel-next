"use client";
import React, { useMemo } from "react";

function HamburgerMenu({ showMenu, setShowMenu }) {
  const styleMenuLines = useMemo(
    () => "bg-[#404040] w-6 h-[3px] rounded-full transition-all duration-200",
    []
  );

  return (
    <div
      onClick={() => setShowMenu(!showMenu)}
      className="absolute cursor-pointer left-4 flex flex-col fcc h-8 gap-y-1 transition-all duration-500 lg:hidden"
      role="button"
      tabIndex={0}
    >
      <div
        className={`${styleMenuLines} ${
          showMenu && "rotate-45 transform translate-y-[3.5px] bg-white"
        }`}
      ></div>
      <div className={`${styleMenuLines} ${showMenu && "hidden"}`}></div>
      <div
        className={`${styleMenuLines} ${
          showMenu && "-rotate-45 transform -translate-y-[3.5px] bg-white"
        }`}
      ></div>
    </div>
  );
}

export default HamburgerMenu;
