"use client";

import React, { useEffect } from "react";
// components
import Header from "../_layout/header/Header";
// import NavigatorInterface from "../_layout/navigatorInterface/NavigatorInterface";
import NavigationBar from "./navigatorInterface/_components/NavigationBar";
import SideBar from "./navigatorInterface/_components/SideBar";
//redux
import { useSelector, useDispatch } from "react-redux";
import { fetchUserHandler } from "@/src/redux/features/profileBase/profileBaseSlice";
//services
import operatorInfoProfileBase from '@/src/services/person_kg_local/operatorInfoProfileBase'

function Main({ children }) {
  //redux
  const toggleSidebar = useSelector(
    (state) => state.layoutConfig.toggleSidebar
  );

  return (
    <div className="w-full flex">
      {isLoading  && <div className="w-[100vw] h-screen bg-pink-300 top-0 left-0 fixed z-[100] fcc">loading...</div>}
      <SideBar />
      <div
        className={`h-full lg:h-screen w-full transition-all duration-300 ${toggleSidebar ? "layout_dashboard_open" : "layout_dashboard_close"
          }`}
      >
        <Header />
        <div className="w-full bg-[#F8F9F9] overflow-y-scroll header_dashboard_desk lg:header_dashboard_phone hideScroll">
          {children}
        </div>
        <NavigationBar />
      </div>
    </div>
  );
}

export default Main;
