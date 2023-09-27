"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
//react icons
import {
  HiOutlineClipboardList,
  HiOutlineCreditCard,
  HiOutlineAdjustments,
  HiOutlineTicket,
} from "react-icons/hi";

function DesktopNavigation() {
  const pathName = usePathname();
  const navigation_data = [
    {
      id: 0,
      icon: <HiOutlineClipboardList size={24} />,
      title: "سفارشات",
      notification: 9,
      link: "/expert/notification/orders",
    },
    {
      id: 1,
      icon: <HiOutlineAdjustments size={24} />,
      title: "سیستمی",
      notification: 8,
      link: "/expert/notification/systemic",
    },
    {
      id: 2,
      icon: <HiOutlineCreditCard size={24} />,
      title: "مالی",
      notification: 25,
      link: "/expert/notification/financial",
    },
    {
      id: 3,
      icon: <HiOutlineTicket size={24} />,
      title: "تیکت‌ها",
      notification: 3,
      link: "/expert/notification/tickets",
    },
  ];

  return (
    <div className="hidden md:block xl:ml-5 xl:w-[350px] px-5 lg:px-0 py-5 xl:py-0">
      <nav>
        <ul className="font-medium text-lg flex flex-wrap justify-between">
          {navigation_data.map((item, index) => (
            <li
              key={item.id}
              className={`w-[49%] justify-between xl:w-[340px] flex items-center h-[85px] rounded-lg ${pathName === item.link ? "bg-white" : ""
                }`}
            >
              <Link
                className="w-full flex justify-between items-center py-2 my-2 px-2 h-full"
                href={item.link}
              >
                <div className="flex items-center">
                  <div
                    className={`w-16 h-16 ml-5 ${pathName === item.link
                      ? "bg-[#F8F9F9] text-primary-500"
                      : "bg-white text-cf-400"
                      } rounded-lg fcc`}
                  >
                    {item.icon}
                  </div>
                  <div
                    className={`${pathName === item.link
                      ? "text-primary-500"
                      : "text-cf-400"
                      }`}
                  >
                    <div>{item.title}</div>
                  </div>
                </div>
                {!!item.notification && (
                  <div className="flex items-center bg-primary-200 rounded-full fcc">
                    <span className="px-2 pt-[2px] text-sm text-primary-600">
                      {item.notification < 10 ? item.notification : 9 + '+'}
                    </span>
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default DesktopNavigation;
