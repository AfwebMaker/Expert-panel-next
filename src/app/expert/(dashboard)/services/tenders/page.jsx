"use client"
import React, { useState, useEffect } from 'react'
// components
import NoContent from "../_components/NoContent"
import Tenders from "./_components/Tenders"
import Loading from "@/app/_components/Loading"
// react icons
import { HiOutlineClipboardList, HiOutlineClipboardCopy } from 'react-icons/hi'
// services
import fetchServices from "@/src/services/core_kg_local/fetchServices";

function Page() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("-");
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    fetchServices(page, 10, 2, "-")
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
      <div className="w-[100%] h-[calc(100vh-135px)] md:h-[calc(100vh-190px)] rounded-lg bg-white flex flex-col items-center justify-start py-10 px-5 overflow-y-scroll hideScroll">
        <div className="w-full h-auto flex flex-col items-center justify-start">
          {
            data && data.lstData && data.lstData.length ?
              (<Tenders data={data.lstData} />)
              :
              (<NoContent
                icon={<HiOutlineClipboardList className="text-5xl" />}
                title={"شما در هیچ مناقصه ای شرکت نکردید!"}
                description={"در حال حاضر شما در هیچ مناقصه ای شرکت نکردید و یا قیمت پیشنهادیتان را وارد نکردید برای شرکت از منوی سمت راست سفارشات جدید را انتخاب کنید و با انتخاب یک سفارش در مناقصه شرکت کنید. پش از شرکت در مناقصه یا مناقصات وضعیت مناقصات فعال را در این اینجا می توانید مشاهده کنید."}
                textBtn={"مشاهده سفارشات جدید"}
                iconBtn={<HiOutlineClipboardCopy className="text-lg" />}
                href={"#"}
              />)
          }
        </div>
      </div>
    </>

  )
}

export default Page