import React from "react";
import Link from "next/link";
// components
import DeputyCard from "../_components/DeputyCard";
// react icons
import {
  HiOutlineBadgeCheck,
  HiOutlinePlus,
  HiOutlineUserAdd,
} from "react-icons/hi";

function MyActiveDeputy({ activeData, newData }) {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex items-center justify-between md:justify-start mb-5">
        <div className="text-cf-300 md:text-primary-500 flex gap-x-1 items-center justify-start">
          <HiOutlineBadgeCheck className="text-lg" />
          <span className="text-xs md:text-sm">نماینده های فعال من</span>
        </div>
        <Link href={"#"} className="text-primary-500 flex md:hidden gap-x-1 items-center justify-start">
          <span className="text-xs md:text-sm">اضافه کردن نماینده جدید</span>
          <HiOutlineUserAdd className="text-lg" />
        </Link>
      </div>
      <div className="flex flex-wrap md:grid md:grid-cols-12 w-full gap-5">
        {activeData && (
          <DeputyCard
            status={"active"}
            phone={activeData.mobile}
            name={activeData.nameFamily}
          />
        )}
        <DeputyCard
          status={"active"}
          phone={"09106686121"}
          name={"سید میثاق حمزه زاده موسوی"}
        />
        {newData && (
          <DeputyCard
            status={"pending"}
            phone={newData.mobile}
            name={newData.nameFamily}
          />
        )}
        <DeputyCard
          status={"pending"}
          phone={"newData.mobile"}
          name={"newData.nameFamily"}
        />
        <div className="hidden md:flex bg-white md:col-span-6 xl:col-span-4 w-full rounded-lg p-5 flex-col items-center uploadBorder_active">
          <section className="w-full fcc mt-5 mb-5">
            <div className="bg-primary-100 h-20 w-20 md:h-24 md:w-24 rounded-full fcc">
              <HiOutlineUserAdd className="text-primary-500 text-3xl" />
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
