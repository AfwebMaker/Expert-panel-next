"use client"
import React, { useState, useEffect } from 'react'
// components
import NoContent from "../_components/NoContent"
import NewOrders from "./_components/NewOrders"
import Loading from "@/app/_components/Loading"
// react icons
import { HiOutlineClipboardCopy, HiBadgeCheck } from 'react-icons/hi'
// services
import fetchServices from "@/src/services/core_kg_local/fetchServices";

function Page() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    fetchServices()
      .then((res) => {
        console.log("amir", res.data.data)
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoadingPage(false)
      })
  }, []);

  return (
    <>
      {loadingPage && <Loading />}
      <div className="w-[100%] h-[calc(100vh-135px)] md:h-[calc(100vh-190px)] rounded-lg bg-white flex flex-col items-center justify-start p-3 sm:p-5  overflow-y-scroll hideScroll">
        <div className="w-full h-auto flex flex-col items-center justify-center">
          {
            data && data.lstData && data.lstData.length ?
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
    </>

  )
}

export default Page;