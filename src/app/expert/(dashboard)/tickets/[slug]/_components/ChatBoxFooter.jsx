"use client";
import React, { useState } from "react";
//react icons
import { HiOutlinePaperAirplane, HiOutlinePhotograph } from "react-icons/hi";

function ChatBoxFooter({ sendMessageHandler }) {
  const [value, setValue] = useState("");
  const fileHandler = () => {
    console.log("fileHandler");
  };

  const changeHandler = (e) => {
    // console.log(e.target.value);
    setValue(e.target.value);
  };

  const clickHandler = (e) => {
    sendMessageHandler(value, setValue);
  };

  return (
    <div className="w-full h-[110px] absolute bottom-0 flex items-center justify-start px-5 pt-8 pb-5">
      <div className="w-full h-full fcc overflow-hidden">
        <div className="w-[calc(100%-64px)] md:w-[calc(100%-112px)] h-full bg-gray-100 pl-12 py-2 relative rounded-tr-lg rounded-br-lg">
          <textarea
            value={value}
            onChange={changeHandler}
            // onKeyDown={handleKeyDown}
            placeholder="پیام خود را بنویسید ..."
            className="w-full h-full pr-5 pl-2 pt-[10px] border-none outline-none bg-transparent resize-none scroll_custom text-sm caret-primary-500"
          />
          <HiOutlinePhotograph
            role="button"
            onClick={fileHandler}
            className="absolute left-3.5 top-4 text-2xl text-gray-500"
          />
        </div>
        <div
          onClick={clickHandler}
          role="button"
          className="w-16 md:w-28 h-full text-white bg-primary-500 rounded-tl-lg rounded-bl-lg fcc text-sm cursor-pointer gap-x-1 fcc"
        >
          <span className="hidden md:flex">ارسال پیام</span>
          <HiOutlinePaperAirplane className="-rotate-90 text-2xl md:text-sm" />
        </div>
      </div>
    </div>
  );
}

export default ChatBoxFooter;
