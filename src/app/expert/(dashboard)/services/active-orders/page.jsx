"use client"
import React, { useState } from 'react'
// components
import NoContent from "../_components/NoContent"
import ActiveOrders from "./_components/ActiveOrders"
// react icons
import { HiOutlineClipboardCheck, HiOutlineClipboardCopy } from 'react-icons/hi'

function Page() {
  const [data, setData] = useState(true);

  return (
    <div className="w-[100%] h-[calc(100vh-135px)] md:h-[calc(100vh-190px)] rounded-lg bg-white flex flex-col items-center justify-start p-5 overflow-y-scroll hideScroll">
      <div className="w-full h-auto flex flex-col items-center justify-start">
        {
          !data ?
            (<NoContent
              icon={<HiOutlineClipboardCheck className="text-5xl" />}
              title={"شما هیج سفارش فعالی ندارید!"}
              description={"در حال حاضر شما هیچ سفارش فعالی برای انجام و اقدام ندارید. شما می توانید از منوی سمت راست، تب سفارش های جدید سفارش جدید را پیدا کنید و در مناقصه آن شرکت کنید و در صورت برنده شدن در مناقصه سفارش را می توانید در این صفحه مشاهده کنید و برای انجام آن برنامه ریزی و اقدام فرمایید."}
              textBtn={"مشاهده سفارشات جدید"}
              iconBtn={<HiOutlineClipboardCopy className="text-lg" />}
              href={"#"}
            />)
            :
            (<ActiveOrders />)
        }
      </div>
    </div>
  )
}

export default Page