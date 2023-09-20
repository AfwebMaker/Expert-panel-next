"use client";
import React, { useState, useEffect } from "react";
//axios
import axios from "axios";

import ChatBoxHeader from "./_components/ChatBoxHeader";
import ChatBoxMain from "./_components/ChatBoxMain";
import ChatBoxFooter from "./_components/ChatBoxFooter";

function page() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await axios.get("YOUR_SERVER_URL");
      setMessages("");
    };

    fetchMessages();
  }, []);

  const sendMessageHandler = (value, setValue) => {
    setMessages([...messages, value]);
    setValue("");
  };

  return (
    <div className="w-[100%] h-[calc(100vh-190px)] rounded-lg bg-white flex flex-col items-center justify-start relative">
      <ChatBoxHeader
        name={"سید میثاق حمزه زاده موسوی"}
        problem={"مشکل در پذیرش سفارش"}
        ticketNumber={485731}
        status={"answered"}
      />
      <ChatBoxMain messages={messages} />
      <ChatBoxFooter sendMessageHandler={sendMessageHandler} />
    </div>
  );
}

export default page;
