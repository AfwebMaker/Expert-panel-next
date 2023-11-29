"use client";
import React, { useState, useEffect, useRef } from "react";
// services
import fetchMessages from "@/src/services/ticket_kg_local/fetchMessages";
import fetchTicketData from "@/src/services/ticket_kg_local/fetchTicketData";
import sendMessage from "@/src/services/ticket_kg_local/sendMessage";
import newMessages from "@/src/services/ticket_kg_local/newMessages";
// components
import ChatBoxHeader from "./_components/ChatBoxHeader";
import ChatBoxMain from "./_components/ChatBoxMain";
import ChatBoxFooter from "./_components/ChatBoxFooter";
//
import { useParams } from "next/navigation";

function Page() {
  const [dataMessages, setDataMessages] = useState([]);
  const [messages, setMessages] = useState([]);
  const pathname = useParams();
  const ticketId = pathname.slug;
  const [ticketData, setTicketData] = useState({});
  const refScroll = useRef(null);

  useEffect(() => {
    fetchTicketData(ticketId)
      .then((res) => {
        if (res.status !== 200) {
          console.log(res);
        }
        // get the ticket 
        setTicketData(res.data.data);

        // now fetch its messages 
        fetchMessages(ticketId)
          .then((res) => {
            console.log("fetchMessages", res.data.data);
            if (res.status === 200) {
              setMessages(res.data.data.results.toReversed())
              setDataMessages(res.data.data);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ticketId]);



  const CheckNewMessages = (ticketId) => {
    const id = messages.length ? messages[messages.length - 1].id : 0;
    const data = {
      lastMessageId: id
    };

    newMessages(data, ticketId)
      .then((res) => {
        console.log("CheckNewMessages", res.data);
        if (res.status === 200) {
          setMessages((pre) => [...pre, ...res.data.data.results])
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const send = (data, ticketId) => {
    sendMessage(data, ticketId)
      .then((res) => {
        console.log("sendMessage", res.data);
        if (res.status === 200) {
          CheckNewMessages(ticketId);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const sendMessageHandler = (value, setValue) => {
    setValue("");
    const data = {
      content: value,
      media: []
    };
    send(data, ticketId)
  };

  const sendMessageUploadFileHandler = (value, setValue, uploadFiles) => {
    setValue("");
    const data = {
      content: value,
      media: uploadFiles.map((item) => ({ path: JSON.stringify(item) })),
    };
    send(data, ticketId)
  };

  return (
    <div className="w-[100%] mb-16 xl:mb-0 h-[calc(100vh-120px)] md:h-[calc(100vh-20px)] lg:h-[calc(100vh-190px)] rounded-lg flex flex-col items-center justify-start relative">

      <ChatBoxHeader
        name={ticketData.users?.find(x => x.isStarter !== true && x.isActive === true)?.name ?? "در انتظار بررسی"}
        problem={ticketData.subject}
        ticketNumber={ticketData.ticket?.id}
        status={ticketData.ticket?.status}
      />
      <ChatBoxMain refScroll={refScroll} ticketData={ticketData} messages={messages} />
      <ChatBoxFooter
        refScroll={refScroll}
        sendMessageHandler={sendMessageHandler}
        sendMessageUploadFileHandler={sendMessageUploadFileHandler}
      />
    </div>
  );
}

export default Page;
