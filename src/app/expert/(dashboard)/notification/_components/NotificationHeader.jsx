"use client"

import React from "react";
//react icons
import { HiOutlineNewspaper } from 'react-icons/hi'

function NotificationHeader() {
  return (
    <div className="w-full flex items-center justify-start">
      <div className='flex w-full items-center lg:rounded-t-xl justify-between bg-white font-bold px-5 border-b border-gray-400 shadow-lg z-10'>
        <div className='h-[71px] flex items-center text-lg text-cf-300'>
          <HiOutlineNewspaper size={24} />
          <div className='mr-2'>
            تازه ها
          </div>
        </div>
        <div className='flex text-blue-500 text-sm cursor-pointer'>دیدن همه</div>
      </div>
    </div>
  );
}

export default NotificationHeader;
