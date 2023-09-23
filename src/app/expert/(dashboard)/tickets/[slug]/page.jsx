"use client";
import React, { useState, useEffect } from "react";
// services
import { fetchMessages } from "@/src/services/ChatBoxTickets/fetchMessages";
import { sendMessage } from "@/src/services/ChatBoxTickets/sendMessage";
import { fetchNewMessages } from "@/src/services/ChatBoxTickets/fetchNewMessages";
// components
import ChatBoxHeader from "./_components/ChatBoxHeader";
import ChatBoxMain from "./_components/ChatBoxMain";
import ChatBoxFooter from "./_components/ChatBoxFooter";

function page() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages()
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          setMessages("ok");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const fetchNewMessagesHandler = () => {
    fetchNewMessages()
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          setMessages([...messages, res.data]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sendMessageHandler = (value, setValue) => {
    setValue("");
    const postData = {
      id: 1,
    };
    sendMessage(postData)
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          fetchNewMessagesHandler();
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
