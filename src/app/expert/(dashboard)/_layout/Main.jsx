"use client";

import React from "react";
// components
import Header from "../_layout/header/Header";
import NavigatorInterface from "../_layout/navigatorInterface/NavigatorInterface";
import SideBar from "./navigatorInterface/_components/SideBar";
//redux
import { useSelector } from "react-redux";

function Main({children}) {
  //redux
  const toggleSidebar = useSelector((state) => state.layoutConfig.toggleSidebar);

  return (
    <div className="w-full flex">
      <SideBar />
      <div className={`h-full lg:h-screen w-full transition-all duration-300 ${toggleSidebar ? "layout_dashboard_open" : "layout_dashboard_close"}`}>
        <Header />
        <div className="w-full bg-[#F8F9F9] overflow-y-scroll header_dashboard_desk lg:header_dashboard_phone hideScroll">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Main;
