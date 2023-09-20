import React from "react";
// components
import UserMessage from "./UserMessage";

function ChatBoxMain({ messages }) {
  // flex flex-col items-end justify-end overflow-hidden
  return (
    <div className="overflow-y-scroll hideScroll w-full h-[calc(100%-140px)] flex flex-col pb-24 px-5">
      <ul className="bg-amber-300 w-full flex flex-col">
        {messages &&
          Array.isArray(messages) &&
          messages.map((message, index) => (
            <UserMessage
              key={index}
              isSender={true}
              userSupport={"5"}
              userName={"4"}
              message={message}
            />
          ))}
      </ul>
    </div>
  );
}

export default ChatBoxMain;
