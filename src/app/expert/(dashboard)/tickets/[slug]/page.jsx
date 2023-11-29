"use client";
import React, { useState, useEffect } from "react";
// services
import fetchMessages from "@/src/services/ticket_kg_local/fetchMessages";
import sendMessage from "@/src/services/ticket_kg_local/sendMessage";
import fetchNewMessages from "@/src/services/ticket_kg_local/fetchNewMessages";
// components
import ChatBoxHeader from "./_components/ChatBoxHeader";
import ChatBoxMain from "./_components/ChatBoxMain";
import ChatBoxFooter from "./_components/ChatBoxFooter";
//
import { useParams } from "next/navigation";

function Page() {
  const [dataMessages, setDataMessages] = useState([]);
  const pathname = useParams();
  const ticketId = pathname.slug;


  useEffect(() => {
    fetchMessages(ticketId)
      .then((res) => {
        console.log("fetchMessages", res.data.data);
        if (res.status === 200) {
          setDataMessages(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const fetchNewMessagesHandler = () => {
  //   fetchNewMessages()
  //     .then((res) => {
  //       console.log(res.data);
  //       if (res.status === 200) {
  //         setMessages([...messages, res.data]);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const sendMessageHandler = (value, setValue) => {
    setValue("");
    const data = {
      content: value,
      media: []
    };
    sendMessage(data, ticketId)
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          console.log("jon")
          // fetchNewMessagesHandler();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sendMessageUploadFileHandler = (value, setValue, uploadFiles) => {
    setValue("");
    const data = {
      content: value,
      media: uploadFiles.map((item) => ({ path: JSON.stringify(item) })),
    };
    sendMessage(data, ticketId)
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          // fetchNewMessagesHandler();
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
      <ChatBoxMain messages={dataMessages.results} />
      <ChatBoxFooter
        sendMessageHandler={sendMessageHandler}
        sendMessageUploadFileHandler={sendMessageUploadFileHandler}
      />
    </div>
  );
}

export default Page;
