"use client";
import React from "react";
import { usePathname } from "next/navigation";
//components
import Ticket from "./Ticket";
import SendNewTicketBtn from "./SendNewTicketBtn";

function MasterTicket({ SendNewTicketHandler, navigationData }) {
  const pathName = usePathname();
  return (
    <>
      {
        navigationData && navigationData.map((item) => (
          <Ticket
            key={item.id}
            id={item.id}
            title={"مشکل در پذیرش سفارش"}
            status={item.status}
            description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
            createdAt={"۲۸ شهریور ۱۴۰۱ ساعت ۱۸:۵۵"}
            ticketNumber={item.id}
            pathName={pathName}
          />
        ))
      }
      {/* <Ticket
        id={1}
        title={"مشکل در پذیرش سفارش"}
        status={"1"}
        description={"مشکل در پذیرش سفارش در بخش سفارشات جدید ..."}
        createdAt={"۲۸ شهریور ۱۴۰۱ ساعت ۱۸:۵۵"}
        ticketNumber={454831}
        pathName={pathName}
      /> */}
      <div className="hidden xl:flex w-[49%] min-w-[390px] justify-between xl:w-[390px] h-[100px] mt-3"></div>
      <div className="hidden xl:flex z-50 w-[390px] h-10 fixed bottom-10 fcc">
        <SendNewTicketBtn SendNewTicketHandler={SendNewTicketHandler} />
      </div>
      <div className="hidden xl:block z-50 w-[390px] h-10 fixed bottom-0 bg-gradient-to-t from-gray-200 to-[#ffffff00] transition-all duration-300"></div>
      {/* <div className="block z-50 w-10 h-[160px] xl:w-[390px] xl:h-10 absolute left-10 top-[254px] xl:bottom-0 xl:bg-gradient-to-t from-gray-200 to-[#e5e7eb00] bg-gradient-to-r transition-all duration-300"></div> */}
    </>
  );
}

export default MasterTicket;
