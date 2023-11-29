import React, { useEffect, useState } from "react";
import Link from "next/link";
// react icons
import { HiLogout } from "react-icons/hi";
// redux
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebarHandler } from "@/src/redux/features/layout/layoutConfigSlice";
// components
import ProfileDropdown from "./ProfileDropdown"
// react icons
import { HiOutlineBell } from "react-icons/hi";
// services
import profileBase from '@/services/person_kg_local/profileBase'
// react-loader-spinner
import { ThreeDots } from 'react-loader-spinner'

function HeaderDesktop() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  //redux
  const toggleSidebar = useSelector(
    (state) => state.layoutConfig.toggleSidebar
  );
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(toggleSidebarHandler());
  };

  //get form state
  useEffect(() => {
    profileBase()
      .then(res => {
        setData(res.data.data)
      })
      .catch(() => {
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <div className="hidden lg:flex items-center justify-between w-full h-full">
      <div
        role="button"
        onClick={clickHandler}
        className="h-full w-10 fcc text-2xl text-cf-300"
      >
        <HiLogout
          className={`${toggleSidebar ? "rotate-0" : "rotate-180"
            } transition-all duration-300`}
        />
      </div>
      <div className="flex fcc">
        <div className="ml-4 fcc">
          {/* <span role="button" className="ml-4 text-2xl text-yellow-500 cursor-pointer"><HiOutlineSun/></span> */}
          <Link href="/expert/notification/orders" className="text-2xl text-cf-300 hover:text-primary-500 transition-all duration-300 cursor-pointer"><HiOutlineBell /></Link>
        </div>
        {
          isLoading ?
            (
              <div className="fcc bg-gray-100 rounded-lg w-[197px] h-10">
                <ThreeDots
                  height="40"
                  width="40"
                  radius="9"
                  color="#45B649"
                  ariaLabel="three-dots-loading"
                  visible={true}
                />
              </div>
            )
            :
            (<ProfileDropdown profileData={data} />)
        }
      </div>
    </div>
  );
}

export default HeaderDesktop;
