"use client";
import React, { useEffect, useState } from "react";
// components
import DeputyCard from "./_components/DeputyCard";
import MyActiveDeputy from "./_components/MyActiveDeputy";
import MyFormerDeputy from "./_components/MyFormerDeputy";
// services
import expertData from "@/src/services/deputy_kg_local/expertData";
//redux
import { useDispatch } from "react-redux";
// react icons
import { HiOutlineIdentification } from "react-icons/hi";

function Page() {
  const [dataExpertData, setDataExpertData] = useState("");

  const dispatch = useDispatch()

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
        dispatch()
      })
  }, []);

  return (
    <div className="flex w-full flex-col pb-5">
      <div className="flex w-full h-[calc(100vh-130px)] md:bg-white md:h-[calc(100vh-220px)] lg:h-[calc(100vh-190px)] rounded-lg flex-col items-center justify-start py-10 px-3 sm:px-5 overflow-y-scroll hideScroll">
        <div className="w-full h-auto flex flex-col items-center justify-start">
          <div className="w-full fcc md:hidden gap-x-2 mb-10 text-primary-500">
            <h1>نماینده من</h1>
            <HiOutlineIdentification className="text-xl" />
          </div>
          <MyActiveDeputy
            activeData={dataExpertData.activeData}
            newData={dataExpertData.newData}
          />
          {dataExpertData.deActiveData && (
            <MyFormerDeputy dataExpertData={dataExpertData.deActiveData} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
