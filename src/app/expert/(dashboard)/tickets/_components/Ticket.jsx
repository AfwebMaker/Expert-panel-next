import Link from "next/link";
import React from "react";
// react icons
import {
  HiOutlineChatAlt2,
  HiOutlineXCircle,
  HiOutlineCheckCircle,
  HiOutlineDotsCircleHorizontal,
} from "react-icons/hi";

function Ticket({ title, status, description, createdAt, ticketNumber, id, pathName }) {

  let str = pathName;
  let slug = str.split('/').pop();

  return (
    <li key={id} className="w-full max-w-full bg-white hover:bg-gray-50 border rounded-lg border-gray-200 md:min-w-[390px] lg:max-w-[390px] justify-between xl:w-[390px] flex items-center h-[160px] mt-2">
      <Link className="w-full h-full fcc items-center" href={`/expert/tickets/${id}`}>
        <div className="w-full h-full flex flex-col items-center justify-between pt-4 pb-1 px-4 sm:px-6">
          <div className="w-full h-[30%] flex items-center justify-between">
            <h2 className={`text-sm  ${slug === String(id) ? "text-primary-500 font-bold" : "text-cf-500"}`}>
              {title.length > 20
                ? title.slice(0, 20 - 1) + " ..."
                : title}
            </h2>
            {/* status */}
            {status === "pending" ? (
              <div className="flex bg-amber-100 text-warning fcc px-1 sm:px-2 rounded-full h-7 sm:h-8">
                <span className="text-[10px] sm:text-xs">در انتظار پاسخ</span>
                <HiOutlineDotsCircleHorizontal className="mr-1" />
              </div>
            ) : status === "answered" ? (
              <div className="flex bg-emerald-100 text-success fcc px-1 sm:px-2 rounded-full h-7 sm:h-8">
                <span className="text-[10px] sm:text-xs">پاسخ داده شده</span>
                <HiOutlineCheckCircle className="mr-1" />
              </div>
            ) : (
              <div className="flex bg-red-100 text-error fcc px-1 sm:px-2 rounded-full h-7 sm:h-8">
                <span className="text-[10px] sm:text-xs">بسته شده</span>
                <HiOutlineXCircle className="mr-1" />
              </div>
            )}
          </div>
          <div className="w-full h-[25%] flex items-center justify-start mt-3 overflow-hidden relative">
            <HiOutlineChatAlt2 className="text-primary-500 ml-2" />
            <p className="text-xs text-cf-300">
              {description.length > 35
                ? description.slice(0, 35 - 1) + "..."
                : description}
            </p>
          </div>

          <div className="w-full h-8 fcc relative">
            {/* <div className="rounded-tl-full rounded-bl-full h-8 w-4 bg-[#F8F9F9] absolute top-0 -right-6"></div> */}
            <hr className="border-t-2 border-cf-200 border-dashed w-full" />
            {/* <div className="rounded-tr-full rounded-br-full h-8 w-4 bg-[#F8F9F9] absolute top-0 -left-6"></div> */}
          </div>

          <div className="w-full h-[15%] flex items-center justify-between text-[10px] text-cf-300 pb-1.5">
            <div>{createdAt}</div>
            <div>شماره تیکت: {ticketNumber}</div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default Ticket;
