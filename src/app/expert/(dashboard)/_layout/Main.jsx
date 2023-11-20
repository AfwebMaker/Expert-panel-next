"use client";

import React, { useEffect } from "react";
// components
import Header from "../_layout/header/Header";
import Loading from '@/app/_components/Loading'
// import NavigatorInterface from "../_layout/navigatorInterface/NavigatorInterface";
import NavigationBar from "./navigatorInterface/_components/NavigationBar";
import SideBar from "./navigatorInterface/_components/SideBar";
//redux
import { useSelector, useDispatch } from "react-redux";
import { fetchUserHandler } from "@/src/redux/features/getExpertInfo/getExpertInfoSlice";
//services
import getExpertInfo from '@/src/services/person_kg_local/getExpertInfo'

function Main({ children }) {
  const toggleSidebar = useSelector(state => state.layoutConfig.toggleSidebar)
  const isLoading = useSelector(state => state.layoutConfig.isLoading)
  const dispatch = useDispatch();

  //Get Data User
  useEffect(() => {
    getExpertInfo()
      .then(res => {
        dispatch(fetchUserHandler(res.data.data))
      })
      .catch(error => {
        console.log("Get Data User", error)
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="w-full flex">
      {isLoading && <Loading />}
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
