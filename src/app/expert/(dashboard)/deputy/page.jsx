"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
// components
import DeputyCard from "./_components/DeputyCard";
import MyActiveDeputy from "./_components/MyActiveDeputy";
import MyFormerDeputy from "./_components/MyFormerDeputy";
import Loading from "@/app/_components/Loading"
// services
import expertData from "@/src/services/deputy_kg_local/expertData";
// react icons
import { HiOutlineIdentification, HiOutlineUserAdd } from "react-icons/hi";

function Page() {
  const [dataExpertData, setDataExpertData] = useState("");
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    expertData()
      .then((res) => {
        console.log(res.data.data);
        setDataExpertData(res.data.data);
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
      <div className="flex w-full flex-col pb-5 text">
        <div className="flex w-full h-[calc(100vh-130px)] md:bg-white md:h-[calc(100vh-220px)] lg:h-[calc(100vh-190px)] rounded-lg flex-col items-center justify-start py-10 px-3 sm:px-5 overflow-y-scroll hideScroll">
          <div className="w-full h-full flex flex-col items-center justify-start">
            {
              (dataExpertData && !dataExpertData.activeData && !dataExpertData.newData && !dataExpertData.deActiveData.length) ?
                (
                  <div className="w-full h-full fcc flex-col">
                    <div className="bg-primary-100 fcc rounded-full text-primary-500 h-20 w-20">
                      <HiOutlineIdentification className="text-5xl" />
                    </div>
                    <div className="w-full fcc md:hidden gap-x-2 text-primary-500 mt-2">
                      <h1>نماینده من</h1>
                    </div>
                    <div className="fcc flex-col m-4">
                      <h2 className="text-cf-500 mb-3 font-bold">شما هیج نماینده فعالی ندارید!</h2>
                      <p className="text-cf-300 text-sm text-center w-full flex">
                        در حال حاضر شما هیچ نماینده فعالی برای ندارید.
                      </p>
                    </div>
                    <Link href="deputy/new" className="fcc bg-primary-100 text-primary-500 gap-x-1 px-4 py-3 rounded-lg mt-3">
                      <span className="text-sm">اضافه کردن نماینده جدید</span>
                      <HiOutlineUserAdd className="text-lg" />
                    </Link>
                  </div>
                )
                :
                (
                  <>
                    <div className="w-full fcc md:hidden gap-x-2 mb-10 text-primary-500">
                      <h1>نماینده من</h1>
                      <HiOutlineIdentification className="text-xl" />
                    </div>
                    <MyActiveDeputy
                      activeData={dataExpertData.activeData}
                      newData={dataExpertData.newData}
                    />
                    <MyFormerDeputy dataExpertData={dataExpertData.deActiveData} />
                  </>
                )
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
