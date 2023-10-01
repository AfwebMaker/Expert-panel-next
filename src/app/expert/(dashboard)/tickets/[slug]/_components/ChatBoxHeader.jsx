"use client";
import Link from "next/link";
import React from "react";
// react icons
import {
  HiOutlineXCircle,
  HiOutlineCheckCircle,
  HiOutlineDotsCircleHorizontal,
  HiOutlineChevronRight,
} from "react-icons/hi";

function ChatBoxHeader({ name, problem, ticketNumber, status }) {
  // status = answered, pending, *

  const removeTicketHandler = () => {
    console.log("removeTicketHandler");
  };

  return (
    <div className="w-full h-[140px] flex items-center justify-start px-5 md:px-10 py-5 mt-5">
      <div className="bg-black h-16 w-16 md:h-24 md:w-24 rounded-full fcc"></div>
      <div className="h-full flex flex-col justify-center md:justify-between mr-5 md:mr-8">
        <h2 className="font-bold text-sm md:text-base my-2 md:my-0">{name}</h2>
        <span className="text-xs md:text-base">
          {problem} - {ticketNumber}
        </span>
        <div className="text-xs md:text-sm flex items-center">
          وضعیت تیکت :
          {status === "pending" ? (
            <div className="flex text-warning fcc px-2 h-8 text-sm">
              <span>در انتظار پاسخ</span>
              <HiOutlineDotsCircleHorizontal className="mr-1" />
            </div>
          ) : status === "answered" ? (
            <div className="flex text-success fcc px-2 h-8">
              <span>پاسخ داده شده</span>
              <HiOutlineCheckCircle className="mr-1" />
            </div>
          ) : (
            <div className="flex text-error fcc px-2 h-8">
              <span>بسته شده</span>
              <HiOutlineXCircle className="mr-1" />
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between md:justify-end absolute top-0 md:top-3 right-0 w-full px-[3%] md:px-3">
        <Link
          href={"#"}
          className="flex md:hidden items-center justify-start text-cf-300 text-sm font-bold"
        >
          <HiOutlineChevronRight className="ml-1 text-base" />
          <h1>تیکت های من</h1>
        </Link>
        <div
          onClick={removeTicketHandler}
          role="button"
          className="hover:bg-red-500 h-full gap-x-1 hover:text-white cursor-pointer rounded-full px-3 py-2 left-3 text-red-500 fcc text-sm transition-all duration-300"
        >
          <span className="flex ">بستن تیکت</span>
          <HiOutlineXCircle />
        </div>
      </div>
    </div>
  );
}

export default ChatBoxHeader;
