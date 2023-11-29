import Link from "next/link";
import React from "react";
// function
import getFileIcon from "@/src/functions/getFileIcon"

function UserMessage({ isSender, content, media, name, date }) {

  return (
    <li
      className={`w-full mb-4 flex items-center ${isSender ? "justify-start" : "justify-end"}`}>
      <div className={`w-[50%] max-w-[50%] min-w-[270px] md:min-w-[400px] h-auto p-3 sm:p-5 rounded-lg ${isSender ? "bg-gray-200" : "bg-green-200"}`}>

        {/* {isSender ? <h2 className="w-full flex text-sm sm:text-base font-bold">{name}</h2> : null} */}
        <h2 className="w-full flex text-sm sm:text-base font-bold">{name}</h2>

        <p className={`text-sm sm:text-base leading-8 break-words mt-5`}>
          {content}
        </p>

        {
          !!media?.length &&
          (
            <div className="w-full mt-5">
              <h2 className="text-sm sm:text-base font-bold">ضمیمه ها:</h2>
              <ul className="mt-5 w-full flex flex-wrap items-start gap-2">
                {
                  media.map((item) => {
                    if (!item.path) return;
                    let path = JSON.parse(item.path);
                    return (
                      <li key={item.id} onClick={() => { if (path.url) window.open(path.url) }} className="border border-cf-300 text-cf-300 text-xl rounded-full p-1 fcc gap-1 w-[100px] h-[35px] cursor-pointer">
                        {getFileIcon(path.url)}
                        <span className="text-sm">
                          مشاهده
                        </span>
                      </li>
                    );
                  })
                }
              </ul>
            </div>
          )
        }

        <div className={`flex w-full mt-8 items-center gap-x-2 justify-between text-xs sm:text-sm text-cf-300 ${isSender ? "" : "flex-row-reverse"}`}>
          <div>{date.date}</div>
          <div>{date.watch}</div>
        </div>
      </div>
    </li>
  );
}

export default UserMessage;