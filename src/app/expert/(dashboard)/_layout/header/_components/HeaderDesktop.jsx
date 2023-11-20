import React from "react";
import Image from "next/image";
// react icons
import { HiLogout } from "react-icons/hi";
// redux
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebarHandler } from "/src/redux/features/layout/layoutConfigSlice";
// components
import ProfileDropdown from "./ProfileDropdown"
// react icons
import { HiOutlineSun, HiOutlineBell } from "react-icons/hi";

function HeaderDesktop() {
  //redux
  const toggleSidebar = useSelector(
    (state) => state.layoutConfig.toggleSidebar
  );
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(toggleSidebarHandler());
  };

  return (
    <div className="hidden lg:flex items-center justify-between w-full h-full">
      <div
        role="button"
        onClick={clickHandler}
        className="h-full w-10 fcc text-2xl text-cf-300"
      >
        <HiLogout
          className={`${
            toggleSidebar ? "rotate-0" : "rotate-180"
          } transition-all duration-300`}
        />
      </div>
      <div className="flex fcc">
        <div className="ml-4 fcc">
          <span role="button" className="ml-4 text-2xl text-yellow-500 cursor-pointer"><HiOutlineSun/></span>
          <span role="button" className="ml-3 text-2xl text-cf-300 cursor-pointer"><HiOutlineBell/></span>
        </div>
        <ProfileDropdown />
      </div>
    </div>
  );
}

export default HeaderDesktop;
