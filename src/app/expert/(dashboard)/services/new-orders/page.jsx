"use client"
import React, { useState } from 'react'
// components
import NoContent from "../_components/NoContent"
import NewOrders from "./_components/NewOrders"
// react icons
import { HiOutlineClipboardCopy, HiBadgeCheck } from 'react-icons/hi'

function Page() {
  const [data, setData] = useState(true);

  return (
    <div className="w-[100%] h-[calc(100vh-135px)] md:h-[calc(100vh-190px)] rounded-lg bg-white flex flex-col items-center justify-start p-5 overflow-y-scroll hideScroll">
      <div className="w-full h-auto flex flex-col items-center justify-center">
        {
          !data ?
            (<NoContent
              icon={<HiOutlineClipboardCopy className="text-5xl" />}
              title={"متاسفانه هیچ سفارش جدید یافت نشد!"}
              description={"در حال حاضر هیچ سفارشی در ضمینه هایی که شما در آن احراز صلاحیت کردید وجود ندارد شما می توانید در قست احراز صلاحیت > اضافه کردن سرویس جدید ، سرویس جدید اضافه کنید یا سرویس های قبلیتان را ویرایش کنید تا سفارش های موجود را ببینید."}
              textBtn={"احراز طلاحیت سرویس جدید"}
              iconBtn={<HiBadgeCheck className="text-lg" />}
              href={"#"}
            />)
            :
            (<NewOrders />)
        }
      </div>
    </div>
  )
}

export default Page;