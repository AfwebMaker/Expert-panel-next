import React from "react";
// react icons
import { HiFolder } from "react-icons/hi";

function UserMessage({ id, isSender, userSupport, userName, message, appendices }) {
  const isUserName = userSupport || userName;
  // console.log(Boolean(isUserName))

  return (
    <li
      className={`w-full mb-4 flex items-center ${isSender ? "justify-start" : "justify-end"
        }`}
      key={id}
    >
      <div className={`w-[50%] max-w-[50%] min-w-[270px] md:min-w-[400px] h-auto p-3 sm:p-5 rounded-lg ${isSender ? "bg-gray-200" : "bg-green-200"}`}>
        {/* name */}
        {isSender ? <h2 className="w-full flex text-sm sm:text-base font-bold">سید میثاق حمزه زاده موسوی</h2> : null}
        {/* content */}
        <div
          className={`text-sm sm:text-base leading-6 ${isSender ? "mt-5" : "mt-0"}`}
        // dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, "<br />") }}
        >
          با سلام خدمت شما من در قسمت ثبت سفارش های جدید هرچه تلاش میکنم که قیمتم را برای مناقصه ثبت کنم موفق نمی شوم و زمانی که دکمه ثبت را میزنم صفحه برای من رفرش نمی شود و قیمت نیز ثبت نمی شود. لطفا من را راهنمایی بفرمایید. ممنون
        </div>
        {/* appendices */}
        <div className="w-full mt-5">
          <h2 className="text-sm sm:text-base font-bold">ضمیمه ها:</h2>
          <ul className="mt-5 w-full flex flex-wrap items-start gap-2">
            {/* {
              appendices.map((item) => (
                <li key={item.id}>

                </li>
              ))
            } */}
            <li className="border border-cf-300 text-cf-300 rounded-full p-1 fcc gap-1 w-[100px] h-[35px] cursor-pointer">
              <HiFolder className="text-xl" />
              <span className="text-sm">
                مشاهده
              </span>
            </li>
          </ul>
        </div>
        {/* create At */}
        <div className={`flex w-full mt-8 items-center gap-x-2 justify-between text-xs sm:text-sm text-cf-300 ${isSender ? "" : "flex-row-reverse"}`}>
          <div>۲۵ شهریور ۱۴۰۱</div>
          <div>۱۶:۵۵</div>
        </div>
      </div>
    </li>
  );
}

export default UserMessage;
