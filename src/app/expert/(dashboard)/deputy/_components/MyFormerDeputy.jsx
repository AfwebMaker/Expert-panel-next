import React from "react";
// components
import DeputyCard from "../_components/DeputyCard";
// react icons
import { HiOutlineUserGroup } from "react-icons/hi";

function MyFormerDeputy({ dataExpertData }) {
  return (
    <div className="flex flex-col w-full">
      <div className="text-cf-300 md:text-primary-500 flex gap-x-1 items-center justify-start mt-10">
        <HiOutlineUserGroup className="text-lg" />
        <span className="text-xs md:text-sm">نماینده های پیشین من</span>
      </div>
      {dataExpertData && dataExpertData.length ?
        (
          <div className="flex flex-wrap md:grid md:grid-cols-12 w-full gap-5 my-5">
            {
              dataExpertData.map((item) => (
                <DeputyCard
                  key={item.id}
                  status={"deactivate"}
                  phone={item.mobile}
                  name={item.nameFamily}
                  nationalCode={item.nationalCode}
                  avatarURL={dataExpertData && item.avatarURL.url}
                  deActiveData={dataExpertData}
                />
              ))
            }
          </div>
        )
        :
        (<p className="text-cf-300 text-xs my-5">شما در حال حاضر هیچ نماینده پیشنی ندارید</p>)
      }


    </div>
  );
}

export default MyFormerDeputy;
