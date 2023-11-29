import React, { useEffect, useRef } from "react";
// components
import UserMessage from "./UserMessage";
// function
import convertToJalali from "@/src/functions/convertToJalali";

function ChatBoxMain({ refScroll, ticketData, messages }) {

  useEffect(() => {
    if (true) {
      refScroll.current?.scrollIntoView({
        // behavior: "smooth",
        behavior: "instant",
        block: "end",
      });
    }
  }, [messages]);

  return (
    <div className="overflow-y-scroll hideScroll w-full h-[calc(100%-140px)] flex flex-col pb-0 px-3 sm:px-5">
      <ul className="bg-amber-300 w-full flex flex-col">
        {messages &&
          Array.isArray(messages) &&
          messages.map((message, index) => (
            <UserMessage
              key={index}
              isSender={ticketData.ticket.users.find(x => x.userId === message.userId).isStarter}
              name={ticketData.users.find(x => x.id === message.userId).name}
              content={message.content}
              media={message.media}
              date={convertToJalali(message.dateCreated)}
            />
          ))}
        <div ref={refScroll} />
      </ul>
    </div>
  );
}

export default ChatBoxMain;