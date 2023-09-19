import React from "react";

import ChatBoxHeader from "./_components/ChatBoxHeader";
import ChatBoxMain from "./_components/ChatBoxMain";
import ChatBoxFooter from "./_components/ChatBoxFooter";

function page() {
  return (
    <div className="w-[100%] h-[calc(100vh-190px)] rounded-lg bg-white flex flex-col items-center justify-start relative">
      <ChatBoxHeader name={"سید میثاق حمزه زاده موسوی"} problem={"مشکل در پذیرش سفارش"} ticketNumber={485731} status={"answered"} />
      <ChatBoxMain />
      <ChatBoxFooter />
    </div>
  );
}

export default page;
