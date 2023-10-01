import React from "react";
// components
import DeputyCard from "../_components/DeputyCard";
// react icons
import { HiOutlineBadgeCheck } from "react-icons/hi";

function MyFormerDeputy({ dataExpertData }) {
  return (
    <div className="flex flex-col w-full">
      <div className="text-primary-500 flex gap-x-2 items-center justify-start my-10">
        <HiOutlineBadgeCheck />
        <span>نماینده های پیشین من</span>
      </div>
      <div className="flex w-full gap-x-5">
        {dataExpertData &&
          dataExpertData.map((item) => (
            <DeputyCard
              key={item.id}
              status={"deactive"}
              phone={item.mobile}
              name={item.nameFamily}
            />
          ))}
      </div>
    </div>
  );
}

export default MyFormerDeputy;
