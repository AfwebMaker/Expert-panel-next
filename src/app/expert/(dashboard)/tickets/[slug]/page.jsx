"use client";
import React, { useState, useEffect } from "react";
// services
import  fetchMessages  from "/src/services/ticket_kg_local/fetchMessages";
import  sendMessage  from "/src/services/ticket_kg_local/sendMessage";
import  fetchNewMessages  from "/src/services/ticket_kg_local/fetchNewMessages";
// components
import ChatBoxHeader from "./_components/ChatBoxHeader";
import ChatBoxMain from "./_components/ChatBoxMain";
import ChatBoxFooter from "./_components/ChatBoxFooter";

function Page() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages()
      .then((res) => {
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
        if (res.status === 200) {
          fetchNewMessagesHandler();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-[100%] mb-16 xl:mb-0 h-[calc(100vh-120px)] md:h-[calc(100vh-20px)] lg:h-[calc(100vh-190px)] rounded-lg flex flex-col items-center justify-start relative">
      <ChatBoxHeader
        name={"سید میثاق حمزه زاده موسوی"}
        problem={"مشکل در پذیرش سفارش"}
        ticketNumber={485731}
        status={"pending"}
      />
      <ChatBoxMain messages={messages} />
      <ChatBoxFooter sendMessageHandler={sendMessageHandler} />
    </div>
  );
}

export default Page;
