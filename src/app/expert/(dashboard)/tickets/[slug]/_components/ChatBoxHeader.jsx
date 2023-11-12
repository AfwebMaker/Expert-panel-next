"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
// react icons
import { HiOutlineChevronLeft } from "react-icons/hi";
// components
import Dropdown from "./Dropdown"

function ChatBoxHeader({ name, problem, ticketNumber, status }) {
  const router = useRouter();

  const removeTicketHandler = () => {
    router.replace("/expert/tickets")
    console.log("removeTicketHandler");
  };

  return (
    <div className="w-full flex items-center justify-start p-2">
      <div className="bg-black h-10 w-10 rounded-full fcc"></div>
      <div className="h-full flex items-center w-[calc(100%-52px)] justify-between mr-3">
        <h2 className="font-bold text-xs sm:text-base h-full fcc">{name}</h2>
        <div className="fcc gap-x-1">
          <Dropdown status={status} Problem={problem} number={ticketNumber} removeTicketHandler={removeTicketHandler} />
          <Link href={"/expert/tickets"} title="بازگشت" className="w-5 h-5 sm:w-9 sm:h-9 fcc rounded-md hover:bg-gray-200 transition-all duration-300 text-cf-300 font-extrabold cursor-pointer relative">
            <HiOutlineChevronLeft className="text-lg font-bold" />
          </Link>
        </div>
      </div>
      {/* <div className="flex items-center justify-between md:justify-end absolute top-0 md:top-3 right-0 w-full px-[3%] md:px-3">
        <Link
          href={"#"}
          className="flex md:hidden items-center justify-start text-cf-300 text-sm font-bold"
        >
          <HiOutlineChevronRight className="ml-1 text-base" />
          <h1>تیکت های من</h1>
        </Link>
      </div> */}
    </div>
  );
}

export default ChatBoxHeader;
