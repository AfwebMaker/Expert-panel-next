import React from "react";
// react icons
import { HiLogout } from "react-icons/hi";
// redux
//redux
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebarHandler } from "@/src/redux/features/layout/layoutConfigSlice";

function HeaderDesktop() {
  //redux
  const toggleSidebar = useSelector((state) => state.layoutConfig.toggleSidebar);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(toggleSidebarHandler())
  };

  return (
    <div className="hidden lg:flex items-center justify-between  w-full h-full">
      <div
        onClick={clickHandler}
        className="h-full w-10  fcc text-3xl text-cf-300"
      >
        <HiLogout className={`${toggleSidebar ? "rotate-0" : "rotate-180" } transition-all duration-300`} />
      </div>
      <div className="h-full "></div>
    </div>
  );
}

export default HeaderDesktop;
