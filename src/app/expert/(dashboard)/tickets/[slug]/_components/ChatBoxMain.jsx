import React, { useEffect, useRef } from "react";
// components
import UserMessage from "./UserMessage";

function ChatBoxMain({ messages }) {
  const ref = useRef(null);

  useEffect(() => {
    if (true) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
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
              isSender={true}
              userSupport={"5"}
              userName={"4"}
              // message={}
            />
          ))}
          {/* <UserMessage
              isSender={true}
              userSupport={"5"}
              userName={"4"}
              // message={}
            />
          <UserMessage
              isSender={false}
              userSupport={"5"}
              userName={"4"}
              // message={message}
            />
          <UserMessage
              isSender={true}
              userSupport={"5"}
              userName={"4"}
              // message={}
            />
          <UserMessage
              isSender={false}
              userSupport={"5"}
              userName={"4"}
              // message={message}
            />
          <UserMessage
              isSender={true}
              userSupport={"5"}
              userName={"4"}
              // message={}
            />
          <UserMessage
              isSender={false}
              userSupport={"5"}
              userName={"4"}
              // message={message}
            />
          <UserMessage
              isSender={true}
              userSupport={"5"}
              userName={"4"}
              // message={}
            />
          <UserMessage
              isSender={false}
              userSupport={"5"}
              userName={"4"}
              // message={message}
            /> */}
            <div ref={ref} />
      </ul>
    </div>
  );
}

export default ChatBoxMain;