"use client";
import React, { useState } from "react";
//react icons
import { HiOutlinePaperAirplane } from "react-icons/hi";
// components
import ClipModule from "./ClipModal"
import UploadFile from "./UploadFile"

function ChatBoxFooter({ refScroll, sendMessageHandler, sendMessageUploadFileHandler }) {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const changeHandler = (e) => {
    // console.log(e.target.value);
    setValue(e.target.value);
  };

  const clickHandler = (e) => {
    setValue("");
    sendMessageHandler(value, setValue);
    // refScroll.current?.scrollIntoView({
    //   behavior: "instant",
    //   block: "end",
    // });
  };

  return (
    <div className="w-full h-[110px] absolute bottom-0 flex items-center justify-start px-2 pt-8 pb-5">
      <div className="w-full h-full fcc overflow-hidden">
        <div className="w-[calc(100%-64px)] md:w-[calc(100%-112px)] h-full bg-gray-100 pl-12 py-2 relative rounded-tr-lg rounded-br-lg">
          <textarea
            value={value}
            onChange={changeHandler}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                clickHandler()
              }
            }}
            placeholder="پیام خود را بنویسید ..."
            className="w-full h-full pr-5 pl-2 pt-[10px] border-none outline-none bg-transparent resize-none scroll_custom text-sm caret-primary-500"
          />
          <UploadFile isOpen={isOpen} setIsOpen={setIsOpen} sendMessageUploadFileHandler={sendMessageUploadFileHandler} />
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
