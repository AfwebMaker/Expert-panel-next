import React from "react";
// components
import DeputyCard from "../_components/DeputyCard";
// react icons
import { HiOutlineUserGroup } from "react-icons/hi";

function MyFormerDeputy({ dataExpertData }) {
  return (
    <div className="flex flex-col w-full">
      <div className="text-cf-300 md:text-primary-500 flex gap-x-1 items-center justify-start mt-10 mb-5">
        <HiOutlineUserGroup className="text-lg" />
        <span className="text-xs md:text-sm">نماینده های پیشین من</span>
      </div>
      <div className="flex flex-wrap md:grid md:grid-cols-12 w-full gap-5">
        {dataExpertData &&
          dataExpertData.map((item) => (
            <DeputyCard
              key={item.id}
              status={"deactivate"}
              phone={item.mobile}
              name={item.nameFamily}
            />
          ))}
      </div>
    </div>
  );
}

export default MyFormerDeputy;
