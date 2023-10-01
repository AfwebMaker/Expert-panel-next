import React from "react";
// components
import DeputyCard from "../_components/DeputyCard";
// react icons
import {
  HiOutlineBadgeCheck,
  HiOutlinePlus,
  HiOutlineUserAdd,
} from "react-icons/hi";
import Link from "next/link";

function MyActiveDeputy({ activeData, newData }) {
  return (
    <div className="flex flex-col w-full">
      <div className="text-primary-500 flex gap-x-2 items-center justify-start mb-10">
        <HiOutlineBadgeCheck />
        <span>نماینده های فعال من</span>
      </div>
      <div className="flex w-full gap-x-5">
        {activeData && <DeputyCard status={"active"} phone={activeData.mobile} name={activeData.nameFamily} />}
        {newData && <DeputyCard status={"pending"} phone={newData.mobile} name={newData.nameFamily} />}
        <div className="bg-white max-w-[350px] h-[290px] w-full rounded-lg p-5 flex flex-col items-center uploadBorder_active">
          <section className="w-full fcc mt-5 mb-5">
            <div className="bg-primary-100 h-20 w-h-20 md:h-24 md:w-24 rounded-full fcc">
              <HiOutlineUserAdd className="text-primary-500 text-3xl"/>
            </div>
          </section>
          <span className="w-full fcc mb-12 text-primary-500">
            نماینده جدید
          </span>
          <Link
            href={"#"}
            className="rounded-lg bg-primary-500 fcc w-full h-10 gap-x-1 text-white"
          >
            <HiOutlinePlus className="text-xl" />
            <span className="text-sm">اضافه کردن نماینده جدید</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MyActiveDeputy;
