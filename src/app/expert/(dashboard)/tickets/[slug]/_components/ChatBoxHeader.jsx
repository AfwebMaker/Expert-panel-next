"use client"
import React from "react";
// react icons
import {
  HiOutlineXCircle,
  HiOutlineCheckCircle,
  HiOutlineDotsCircleHorizontal,
} from "react-icons/hi";

function ChatBoxHeader({ name, problem, ticketNumber, status }) {
  // status = answered, pending, *

  const removeTicketHandler = () => {
    console.log("removeTicketHandler")
  }

  return (
    <div className="w-full h-[140px] flex items-center justify-start px-10 py-5 mt-5">
      <div className="bg-black h-24 w-24 rounded-full fcc"></div>
      <div className="h-full flex flex-col justify-between mr-8">
        <h2 className="font-bold text-base">{name}</h2>
        <span className="text-base">
          {problem} - {ticketNumber}
        </span>
        <div className="text-sm flex items-center">
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
      <div onClick={removeTicketHandler} role="button" className="hover:bg-red-500 hover:text-white cursor-pointer rounded-full px-3 py-2 absolute top-3 left-3 text-red-500 fcc text-sm gap-x-1 transition-all duration-300">
        بستن تیکت
        <HiOutlineXCircle />
      </div>
    </div>
  );
}

export default ChatBoxHeader;
