"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
// components
import SendNewTicketBtn from "./SendNewTicketBtn";
import MasterTicket from "./MasterTicket";
// react icons
import { HiOutlineChat } from "react-icons/hi";
//scroll
import ScrollContainer from 'react-indiana-drag-scroll'

function DesktopNavigation() {
  const pathName = usePathname();
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
    router.push("/expert/tickets/new-ticket");
  };

  return (
    <div className="hidden md:block ml-5 xl:w-[390px] py-5 xl:py-0">
      <div>
        <div className="text-cf-300 text-sm flex items-center justify-between mb-2">
          <div className="flex">
            <HiOutlineChat className="ml-1 text-base" />
            <h2>تیکت های من</h2>
          </div>
          <div className="flex xl:hidden">
            <SendNewTicketBtn SendNewTicketHandler={SendNewTicketHandler} />
          </div>
        </div>
        <div className="overflow-x-scroll xl:overflow-y-scroll hideScroll xl:h-[calc(100vh-210px)]">
          <ScrollContainer className='scroll-container whitespace-nowrap' >
            <ul className="h-auto xl:h-full font-medium text-lg flex flex-nowrap gap-x-3 xl:flex-wrap xl:gap-x-0 justify-between ">
              <MasterTicket
                navigationData={navigation_data}
                SendNewTicketHandler={SendNewTicketHandler}
              />
            </ul>
          </ScrollContainer>
        </div>
      </div>
    </div>
  );
}

export default DesktopNavigation;
