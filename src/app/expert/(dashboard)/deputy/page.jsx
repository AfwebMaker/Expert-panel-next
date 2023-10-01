"use client";
import React, { useEffect, useState } from "react";
// components
import DeputyCard from "./_components/DeputyCard";
import MyActiveDeputy from "./_components/MyActiveDeputy";
import MyFormerDeputy from "./_components/MyFormerDeputy";
// services
import expertData from "@/src/services/deputy_kg_local/expertData";

function Page() {
  const [dataExpertData, setDataExpertData] = useState("");

  useEffect(() => {
    expertData()
      .then((res) => {
        console.log(res.data.data);
        setDataExpertData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex w-full flex-col mb-10 xl:mb-0">
      <div className="flex w-full h-[calc(100vh-190px)] rounded-lg flex-col items-center justify-start py-10 px-5 overflow-y-scroll hideScroll">
        <div className="w-full h-auto flex flex-col items-center justify-start">
          <MyActiveDeputy
            activeData={dataExpertData.activeData}
            newData={dataExpertData.newData}
          />
          <MyFormerDeputy dataExpertData={dataExpertData.deActiveData} />
        </div>
      </div>
    </div>
  );
}

export default Page;
