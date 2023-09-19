"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
// components
import Ticket from "./Ticket";
import SendNewTicketBtn from "./SendNewTicketBtn";
// react icons
import { HiOutlineChat } from "react-icons/hi";

function DesktopNavigation() {
  
  const pathName = usePathname();
  console.log(pathName)
  const router = useRouter();
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

  const SendNewTicketHandler = () => {
    console.log("first");
    router.push("/expert/tickets/new-ticket")

  };

  return (
    <div className="hidden lg:block ml-5 xl:w-[390px] py-5 xl:py-0">
      <div>
        <div className="text-cf-300 text-sm flex items-center justify-between mb-2">
          <div className="flex">
            <HiOutlineChat className="ml-1 text-base" />
            <h2>تیکت های من</h2>
          </div>
          <div className="flex xl:hidden">
            <SendNewTicketBtn SendNewTicketHandler={SendNewTicketHandler}/>
          </div>
        </div>
        <div className="overflow-x-scroll xl:overflow-y-scroll hideScroll xl:h-[calc(100vh-210px)]">
          <ul className="h-auto xl:h-full font-medium text-lg flex flex-nowrap gap-x-3 xl:flex-wrap xl:gap-x-0 justify-between ">
            <Ticket
              id={1}
              title={"مشکل در پذیرش سفارش"}
              status={"1"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
              createdAt={"۲۸ شهریور ۱۴۰۱ ساعت ۱۸:۵۵"}
              ticketNumber={454831}
              pathName={pathName}
            />
            <Ticket
              id={451}
              title={"مشکل در پذیرش سفارش"}
              status={"pending"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
              createdAt={"۲۸ شهریور ۱۴۰۱ ساعت ۱۸:۵۵"}
              ticketNumber={454831}
              pathName={pathName}
            />
            <Ticket
              id={454831}
              title={"مشکل در پذیرش سفارش"}
              status={"answered"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
              createdAt={"۲۸ شهریور ۱۴۰۱ ساعت ۱۸:۵۵"}
              ticketNumber={454831}
              pathName={pathName}
            />
            <Ticket
              id={20}
              title={"مشکل در پذیرش سفارش"}
              status={"1"}
              description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
              createdAt={"۲۸ شهریور ۱۴۰۱ ساعت ۱۸:۵۵"}
              ticketNumber={454831}
              pathName={pathName}
            />
            <div className="hidden xl:flex w-[49%] min-w-[390px] justify-between xl:w-[390px] h-[100px] mt-3"></div>
            <div className="hidden xl:flex z-50 w-[390px] h-10 fixed bottom-10 fcc">
              <SendNewTicketBtn SendNewTicketHandler={SendNewTicketHandler} />
            </div>
            <div className="hidden xl:block z-50 w-[390px] h-10 fixed bottom-0 bg-gradient-to-t from-gray-200 to-[#ffffff00] transition-all duration-300"></div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DesktopNavigation;
