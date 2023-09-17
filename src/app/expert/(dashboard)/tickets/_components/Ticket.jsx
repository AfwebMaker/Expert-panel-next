import Link from "next/link";
import React from "react";
// react icons
import {
  HiOutlineChatAlt2,
  HiOutlineXCircle,
  HiOutlineCheckCircle,
  HiOutlineDotsCircleHorizontal,
} from "react-icons/hi";

function Ticket({ title, status, description }) {
  return (
    <li className="w-[49%] justify-between xl:w-[390px] flex items-center h-[160px] rounded-xl bg-white mt-3 hover:shadow-inner">
      <Link className="w-full h-full fcc items-center" href="#">
        <div className="w-full h-full flex flex-col items-center justify-between pt-4 pb-1 px-6">
          <div className="w-full h-[30%] flex items-center justify-between">
            <h2 className="text-sm text-cf-500">{title}</h2>
            {/* status */}
            {status === "pending" ? (
              <div className="flex bg-amber-100 text-warning fcc px-2 rounded-full h-8">
                <span className="text-xs">در انتظار پاسخ</span>
                <HiOutlineDotsCircleHorizontal className="mr-1" />
              </div>
            ) : status === "answered" ? (
              <div className="flex bg-emerald-100 text-success fcc px-2 rounded-full h-8">
                <span className="text-xs">پاسخ داده شده</span>
                <HiOutlineCheckCircle className="mr-1" />
              </div>
            ) : (
              <div className="flex bg-red-100 text-error fcc px-2 rounded-full h-8">
                <span className="text-xs">بسته شده</span>
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
            <div className="rounded-tl-full rounded-bl-full h-8 w-4 bg-[#F8F9F9] absolute top-0 -right-6"></div>
            <hr className="border-t-2 border-cf-200 border-dashed w-full" />
            <div className="rounded-tr-full rounded-br-full h-8 w-4 bg-[#F8F9F9] absolute top-0 -left-6"></div>
          </div>

          <div className="w-full h-[15%] flex items-center justify-between text-[10px] text-cf-300 pb-1.5">
            <div>۲۸ شهریور ۱۴۰۱ ساعت ۱۸:۵۵</div>
            <div>شماره تیکت: ٤٥٤۸۳۱</div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default Ticket;
