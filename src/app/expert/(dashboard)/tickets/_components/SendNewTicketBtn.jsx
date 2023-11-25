import React from "react";
// react icons
import { HiOutlinePlus } from "react-icons/hi";

function SendNewTicketBtn({ SendNewTicketHandler }) {

  return (
    <div
      onClick={SendNewTicketHandler}
      className="cursor-pointer z-40 w-[160px] h-10 rounded-full bg-primary-500 fcc gap-x-1 text-white text-sm"
    >
      <HiOutlinePlus />
      <span>ارسال تیکت جدید</span>
    </div>
  );
}

export default SendNewTicketBtn;
