"use client";

import { usePathname } from "next/navigation";
import React from "react";
// components
import Ticket from "./Ticket";
// react icons
import { HiOutlineChat } from "react-icons/hi";

function DesktopNavigation() {
  const pathName = usePathname();
  const navigation_data = [
    {
      id: 0,
      title: "",
      description: "",
      status: "",
      ticketNumber: "",
      createdAt: "",
      slug: "/expert/notification/orders",
    },
    {
      id: 1,
      title: "",
      description: "",
      status: "",
      ticketNumber: "",
      createdAt: "",
      slug: "/expert/notification/orders",
    },
    {
      id: 2,
      title: "",
      description: "",
      status: "",
      ticketNumber: "",
      createdAt: "",
      slug: "/expert/notification/orders",
    },
    {
      id: 3,
      title: "",
      description: "",
      status: "",
      ticketNumber: "",
      createdAt: "",
      slug: "/expert/notification/orders",
    },
  ];

  return (
    <div className="hidden lg:block ml-5 xl:w-[350px] py-5 xl:py-0">
      <div>
        <div className="text-cf-300 text-sm flex items-center justify-start mb-2">
          <HiOutlineChat className="ml-1 text-base" />
          <h2>تیکت های من</h2>
        </div>
        <div
          style={{ height: "calc(100vh - 185px)" }}
          className="overflow-y-scroll hideScroll"
        >
          <ul className="h-full font-medium text-lg flex flex-wrap justify-between ">
            <Ticket
              title={"مشکل در پذیرش سفارش"}
              status={"1"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
            />
            <Ticket
              title={"مشکل در پذیرش سفارش"}
              status={"answered"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
            />
            <Ticket
              title={"مشکل در پذیرش سفارش"}
              status={"pending"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
            />
            <Ticket
              title={"مشکل در پذیرش سفارش"}
              status={"answered"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
            />
            <Ticket
              title={"مشکل در پذیرش سفارش"}
              status={"answered"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
            />
            <Ticket
              title={"مشکل در پذیرش سفارش"}
              status={"answered"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
            />
            <Ticket
              title={"مشکل در پذیرش سفارش"}
              status={"answered"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
            />
            <Ticket
              title={"مشکل در پذیرش سفارش"}
              status={"answered"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
            />
            <Ticket
              title={"مشکل در پذیرش سفارش"}
              status={"answered"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
            />
            <Ticket
              title={"مشکل در پذیرش سفارش"}
              status={"answered"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
            />
            <Ticket
              title={"مشکل در پذیرش سفارش"}
              status={"answered"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
            />
            <Ticket
              title={"مشکل در پذیرش سفارش"}
              status={"answered"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
            />
            <Ticket
              title={"مشکل در پذیرش سفارش"}
              status={"answered"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
            />
            <Ticket
              title={"مشکل در پذیرش سفارش"}
              status={"answered"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
            />
            <Ticket
              title={"مشکل در پذیرش سفارش"}
              status={"answered"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
            />
            <Ticket
              title={"مشکل در پذیرش سفارش"}
              status={"answered"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
            />
            <Ticket
              title={"مشکل در پذیرش سفارش"}
              status={"answered"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
            />
            <Ticket
              title={"مشکل در پذیرش سفارش"}
              status={"answered"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
            />
            <Ticket
              title={"مشکل در پذیرش سفارش"}
              status={"answered"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
            />
            <Ticket
              title={"مشکل در پذیرش سفارش"}
              status={"answered"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
            />
            <Ticket
              title={"مشکل در پذیرش سفارش"}
              status={"answered"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
            />
            <Ticket
              title={"مشکل در پذیرش سفارش"}
              status={"answered"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
            />
            <Ticket
              title={"مشکل در پذیرش سفارش"}
              status={"answered"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
            />
            <Ticket
              title={"مشکل در پذیرش سفارش"}
              status={"answered"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
            />
            <Ticket
              title={"مشکل در پذیرش سفارش"}
              status={"answered"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
            />
            <Ticket
              title={"مشکل در پذیرش سفارش"}
              status={"answered"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
            />
            <Ticket
              title={"مشکل در پذیرش سفارش"}
              status={"answered"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
            />
            <Ticket
              title={"مشکل در پذیرش سفارش"}
              status={"answered"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
            />
            <Ticket
              title={"مشکل در پذیرش سفارش"}
              status={"answered"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
            />
            <Ticket
              title={"مشکل در پذیرش سفارش"}
              status={"answered"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
            />
            <Ticket
              title={"مشکل در پذیرش سفارش"}
              status={"answered"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
            />
            <Ticket
              title={"مشکل در پذیرش سفارش"}
              status={"answered"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
            />
            <Ticket
              title={"مشکل در پذیرش سفارش"}
              status={"answered"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
            />
            <Ticket
              title={"مشکل در پذیرش سفارش"}
              status={"answered"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
            />
            <Ticket
              title={"مشکل در پذیرش سفارش"}
              status={"answered"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DesktopNavigation;
