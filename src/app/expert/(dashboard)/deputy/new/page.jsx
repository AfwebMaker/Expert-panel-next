"use client";
import Link from "next/link";
import React, { useState } from "react";
// react icons
import { HiOutlineChevronRight, HiOutlineUserAdd } from "react-icons/hi";
//components
import SwitchInput from "@/app/_components/SwitchInput";
import NotPrefer from "./_components/notPrefer/NotPrefer";
import Prefer from "./_components/Prefer";

function page() {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="flex w-full flex-col pb-5">
      <div className="flex w-full h-[calc(100vh-130px)] md:bg-white md:h-[calc(100vh-200px)] lg:h-[calc(100vh-180px)] rounded-lg flex-col items-center justify-start py-5 px-3 sm:px-5 overflow-y-scroll hideScroll">
        <div className="w-full h-auto flex flex-col items-center justify-start">
          <div className="flex items-center justify-between md:justify-end w-full">
            <Link
              href="/expert/deputy"
              className="flex md:hidden items-center justify-start text-cf-300 text-sm font-bold"
            >
              <HiOutlineChevronRight className="ml-1 text-base" />
              <h1>نماینده من</h1>
            </Link>
          </div>
          <div className="w-full fcc gap-x-2 mb-10 text-primary-500 mt-10">
            <h1>اضافه کردن نماینده جدید</h1>
            <HiOutlineUserAdd className="text-xl" />
          </div>
          <div className="w-full">
            <p className="text-xs leading-5 w-full text-cf-300">
              در صورتی که تمایل دارید که خودتان با شماره ای دیگر به عنوان
              نماینده تان مشغول به کار شوید گزینه تمایل دارم را روشن و شماره
              تلفنتان را وارد کنید.
            </p>
            <div className="w-full flex items-center justify-between mt-5">
              <span className="text-cf-500 text-sm">تمایل دارم</span>
              <SwitchInput enabled={enabled} setEnabled={setEnabled} />
            </div>
            {enabled ? <Prefer/> : <NotPrefer/>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
