"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
//redux
import { useSelector } from "react-redux";
// public --> images
import kargosha_logo from "@/public/images/layout/header/kargosha_logo.svg";
import kargosha_typo from "@/public/images/layout/header/kargosha_typo.svg";
// react icons
import {
  HiOutlineHome,
  HiOutlineFingerPrint,
  HiOutlineBadgeCheck,
  HiOutlineClipboardList,
  HiOutlinePresentationChartBar,
  HiOutlineIdentification,
  HiOutlineCreditCard,
  HiOutlineUserGroup,
  HiOutlineTicket,
} from "react-icons/hi";

function SideBar() {
  const dataSidebar = [
    {
      id: 0,
      title: "داشبورد",
    },
    {
      id: 1,
      title: "خانه",
      icon: <HiOutlineHome />,
      href: "/expert/home",
      notifications: 6,
    },
    {
      id: 0,
      title: "پروفایل",
    },
    {
      id: 2,
      title: "احراز هویت",
      icon: <HiOutlineFingerPrint />,
      href: "",
      notifications: 7,
    },
    {
      id: 3,
      title: "احراز صلاحیت",
      icon: <HiOutlineBadgeCheck />,
      href: "",
      notifications: 0,
    },
    {
      id: 0,
      title: "سفارشات",
    },
    {
      id: 4,
      title: "سفارشات",
      icon: <HiOutlineClipboardList />,
      href: "",
      notifications: 0,
    },
    {
      id: 5,
      title: "گزارشات",
      icon: <HiOutlinePresentationChartBar />,
      href: "",
      notifications: 5,
    },
    {
      id: 0,
      title: "سرویس ها",
    },
    {
      id: 6,
      title: "نماینده من",
      icon: <HiOutlineIdentification />,
      href: "",
      notifications: 2,
    },
    {
      id: 7,
      title: "کیف پول",
      icon: <HiOutlineCreditCard />,
      href: "",
      notifications: 2,
    },
    {
      id: 8,
      title: "دیده شو",
      icon: <HiOutlineUserGroup />,
      href: "",
      notifications: 0,
    },
    {
      id: 0,
      title: "پشتیبانی",
    },
    {
      id: 9,
      title: "تیکت ها",
      icon: <HiOutlineTicket />,
      href: "",
      notifications: 2,
    },
  ];

  const dataBeast = [
    {
      title: "",
      child: [
        {
          id: 1,
          title: "خانه",
          icon: <HiOutlineHome />,
          href: "/expert/home",
          notifications: 6,
        },
      ],
    },
    {
      title: "",
      child: [
        {
          id: 2,
          title: "احراز هویت",
          icon: <HiOutlineFingerPrint />,
          href: "",
          notifications: 7,
        },
        {
          id: 3,
          title: "احراز صلاحیت",
          icon: <HiOutlineBadgeCheck />,
          href: "",
          notifications: 0,
        },
      ],
    },
    {
      title: "",
      child: [
        {
          id: 4,
          title: "سفارشات",
          icon: <HiOutlineClipboardList />,
          href: "",
          notifications: 0,
        },
        {
          id: 5,
          title: "گزارشات",
          icon: <HiOutlinePresentationChartBar />,
          href: "",
          notifications: 5,
        },
      ],
    },
    {
      title: "",
      child: [
        {
          id: 6,
          title: "نماینده من",
          icon: <HiOutlineIdentification />,
          href: "",
          notifications: 2,
        },
        {
          id: 7,
          title: "کیف پول",
          icon: <HiOutlineCreditCard />,
          href: "",
          notifications: 2,
        },
        {
          id: 8,
          title: "دیده شو",
          icon: <HiOutlineUserGroup />,
          href: "",
          notifications: 0,
        },
      ],
    },
    {
      title: "",
      child: [
        {
          id: 9,
          title: "تیکت ها",
          icon: <HiOutlineTicket />,
          href: "",
          notifications: 2,
        },
      ],
    },
  ];

  const pathname = usePathname();
  //redux
  const toggleSidebar = useSelector(
    (state) => state.layoutConfig.toggleSidebar
  );

  return (
    <div
      className={` h-screen  hidden lg:flex lg:flex-col transition-all duration-300 border-l border-gray-200 
      ${toggleSidebar ? "w-[275px]" : "w-[80px] hideScroll"}
      `}
    >
      <div
        className={`z-50 bg-red-200 h-[88px] flex items-center justify-start px-3 transition-all duration-300 ${
          toggleSidebar ? "w-[275px] " : "w-[80px]"
        }`}
      >
        <div
          className={`flex items-center w-full h-full 
            ${toggleSidebar ? "" : "items-center justify-center"}`}
        >
          <Image
            className={toggleSidebar ? "ml-2" : ""}
            src={kargosha_logo}
            alt="Picture of the author"
            width={30}
            height={30}
          />
          <Image
            hidden={!toggleSidebar}
            src={kargosha_typo}
            alt="Picture of the author"
            height={20}
            priority
          />
        </div>
      </div>
      <div style={{height: "calc(100vh - 88px)"}} className="py-5 w-full overflow-y-scroll scroll_custom">
        <ul className="w-full flex flex-col items-center justify-center px-4">
          {dataSidebar &&
            dataSidebar.map((item, index) => {
              return item.id ? (
                <li
                  key={index}
                  className={`w-full h-[3rem] fcc relative cursor-pointer rounded-md px-2 hover:bg-gray-100 transition-all duration-300 
                  ${pathname === item.href ? "bg-gray-100" : ""}
                  ${toggleSidebar ? "mb-[1%]" : "mb-3"}
                  `}
                >
                  <Link
                    className={`w-full h-full flex items-center justify-start font-bold  ${
                      toggleSidebar ? "justify-start" : "justify-center w-full"
                    }`}
                    href={item.href}
                  >
                    <div
                      className={`flex items-center justify-start h-full w-5/6`}
                    >
                      <span
                        className={`text-lg h-full fcc ${
                          toggleSidebar ? "ml-[10px]" : "ml-0 w-full"
                        }`}
                      >
                        {item.icon}
                      </span>
                      <span
                        hidden={!toggleSidebar}
                        className="text-black text-sm"
                      >
                        {item.title}
                      </span>
                    </div>
                    {!!item.notifications && (
                      <div
                        className={`${
                          toggleSidebar
                            ? "flex h-full w-1/6 fcc"
                            : "absolute -top-1.5 -left-1.5"
                        }`}
                      >
                        <span
                          className={`fcc leading-10 rounded-full 
                          ${
                            pathname === item.href
                              ? "bg-black text-white"
                              : "bg-gray-100"
                          }
                          ${
                            toggleSidebar
                              ? "px-3 text-xs h-[23px]"
                              : "px-1 text-[10px] h-[19px]"
                          }
                          `}
                        >
                          {item.notifications}+
                        </span>
                      </div>
                    )}
                  </Link>
                </li>
              ) : (
                <li
                  hidden={!toggleSidebar}
                  key={index}
                  className="w-full text-xs my-2 text-cf-300 pr-2.5"
                >
                  {item.title}
                </li>
              );
            })}
        </ul>
        {toggleSidebar && (
          <>
            <div className="bg-white h-10 fcc text-cf-300 text-[10px] pt-8 pb-5 border-t-2 border-gray-50">
              پنل متخصصین کارگشا ۱.۰۱
            </div>
            <div
              className={`z-50 h-10 fixed bottom-0 bg-gradient-to-t from-gray-100 to-[#ffffff00] transition-all duration-300 ${
                toggleSidebar ? "w-[270px] " : "w-[75px]"
              }`}
            ></div>
          </>
        )}
      </div>
    </div>
  );
}

export default SideBar;
