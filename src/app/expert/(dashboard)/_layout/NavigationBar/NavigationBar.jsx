"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
// react icons
import {
  HiOutlineBell,
  HiOutlineMailOpen,
  HiOutlineViewGrid,
  HiOutlineSave,
  HiOutlineUser,
} from "react-icons/hi";
import { HiBell, HiMailOpen, HiViewGrid, HiSave, HiUser } from "react-icons/hi";

const styleIconOutline = "text-xl";
const styleIconNormal = "text-2xl";

const dataNavigationBar = [
  {
    id: 1,
    title: "اعلان ها",
    href: "/expert/notifications",
    icon_outline: <HiOutlineBell className={styleIconOutline} />,
    icon_normal: <HiOutlineBell className={styleIconNormal} />,
  },
  {
    id: 2,
    title: "پشتیبانی",
    href: "/expert/support",
    icon_outline: <HiOutlineMailOpen className={styleIconOutline} />,
    icon_normal: <HiMailOpen className={styleIconNormal} />,
  },
  {
    id: 3,
    title: "خانه",
    href: "/expert/home",
    icon_outline: <HiOutlineViewGrid className={styleIconOutline} />,
    icon_normal: <HiViewGrid className={styleIconNormal} />,
  },
  {
    id: 4,
    title: "سفارشات",
    href: "/expert/orders",
    icon_outline: <HiOutlineSave className={styleIconOutline} />,
    icon_normal: <HiSave className={styleIconNormal} />,
  },
  {
    id: 5,
    title: "پروفایل",
    href: "/expert/profile",
    icon_outline: <HiOutlineUser className={styleIconOutline} />,
    icon_normal: <HiUser className={styleIconNormal} />,
  },
];
function NavigationBar() {
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <div className="h-14"></div>
      <nav
        style={{ boxShadow: "0px -3px 15px rgba(38, 38, 38, 0.1)" }}
        className="fixed z-10 bottom-0 right-0 w-full h-20 flex items-center px-4 justify-start transition-all duration-500 delay-[30ms] bg-white"
      >
        <ul className="flex items-center justify-between w-full h-full">
          {dataNavigationBar &&
            dataNavigationBar.map((item) => (
              <li
                className="w-14 h-full fcc text-xs cursor-pointer text-cf-300"
                key={item.id}
              >
                <Link
                  className={`h-full w-full fcc flex-col ${
                    pathname === item.href && "text-secondary-500 font-bold"
                  }`}
                  href={item.href}
                >
                  <span className="w-full h-7 fcc">
                    {pathname === item.href
                      ? item.icon_normal
                      : item.icon_outline}
                  </span>
                  <span className="mt-2 w-full fcc">{item.title}</span>
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;
