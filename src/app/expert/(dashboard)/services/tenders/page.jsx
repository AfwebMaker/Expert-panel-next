"use client"
import React, { useState } from 'react'
// components
import NoContent from "../_components/NoContent"
import Tenders from "./_components/Tenders"
// react icons
import { HiOutlineClipboardList, HiOutlineClipboardCopy } from 'react-icons/hi'

function Page() {
  const [data, setData] = useState(true);

  return (
    <div className="w-[100%] h-[calc(100vh-135px)] md:h-[calc(100vh-190px)] rounded-lg bg-white flex flex-col items-center justify-start py-10 px-5 overflow-y-scroll hideScroll">
      <div className="w-full h-auto flex flex-col items-center justify-start">
        {
          !data ?
            (<NoContent
              icon={<HiOutlineClipboardList className="text-5xl" />}
              title={"شما در هیچ مناقصه ای شرکت نکردید!"}
              description={"در حال حاضر شما در هیچ مناقصه ای شرکت نکردید و یا قیمت پیشنهادیتان را وارد نکردید برای شرکت از منوی سمت راست سفارشات جدید را انتخاب کنید و با انتخاب یک سفارش در مناقصه شرکت کنید. پش از شرکت در مناقصه یا مناقصات وضعیت مناقصات فعال را در این اینجا می توانید مشاهده کنید."}
              textBtn={"مشاهده سفارشات جدید"}
              iconBtn={<HiOutlineClipboardCopy className="text-lg" />}
              href={"#"}
            />)
            :
            (<Tenders />)
        }
      </div>
    </div>
  )
}

export default Page