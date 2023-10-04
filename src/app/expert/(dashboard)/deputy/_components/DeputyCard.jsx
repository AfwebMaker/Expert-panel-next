import Image from "next/image";
import Link from "next/link";
import React from "react";
// react icons
import {
  HiOutlineXCircle,
  HiOutlineCheckCircle,
  HiOutlineDotsCircleHorizontal,
  HiOutlineX,
  HiOutlineRefresh,
  HiTrash,
  HiPencil,
} from "react-icons/hi";

function DeputyCard({ status, phone, name, src }) {
  return (
    <div className="bg-white md:col-span-6 xl:col-span-4 w-full rounded-lg p-3 sm:p-5 flex flex-col border border-gray-200">
      <div className="w-full flex md:flex-col">
        <section className="md:w-full fcc">
          <div className="bg-black h-14 w-14 md:h-24 md:w-24 rounded-full fcc">
            {/* <Image src={src} width={100} height={100} alt=""/> */}
          </div>
        </section>
        <section className="md:w-full flex-col mt-5 mr-3 md:mr-0 truncate">
          <div className="w-full md:fcc text-xs sm:text-sm gap-x-1 leading-5">
            <span className=" text-cf-500 font-bold">نام و نام خانوادگی :</span>
            <span className="text-cf-300 text-xs mr-[2px]">
              {name}
            </span>
          </div>
          <div className="md:text-sm md:fcc flex items-center text-xs sm:text-sm text-cf-500 font-bold">
            وضعیت نماینده :
            {status === "pending" ? (
              <div className="flex text-warning fcc px-1 h-8">
                <span>در انتظار تایید</span>
                <HiOutlineDotsCircleHorizontal className="mr-1" />
              </div>
            ) : status === "active" ? (
              <div className="flex text-success fcc px-1 h-8">
                <span>فعال</span>
                <HiOutlineCheckCircle className="mr-1" />
              </div>
            ) : (
              <div className="flex text-error fcc px-1 h-8">
                <span>غیر‌فعال</span>
                <HiOutlineXCircle className="mr-1" />
              </div>
            )}
          </div>
          <div className="w-full md:fcc text-xs sm:text-sm gap-x-1">
            <span className="text-cf-500 font-bold">شماره تماس :</span>
            <span className="text-cf-300 mr-1">{phone}</span>
          </div>
        </section>
      </div>

      <section className="w-full h-[36px] fcc flex-col mt-5 text-white">
        {status === "pending" ? (
          <Link
            href={"#"}
            role="button"
            className="flex cursor-pointer w-full bg-orange-500 fcc px-2 gap-x-1 rounded-lg h-full"
          >
            <HiOutlineX className="text-xl" />
            <span className="text-xs sm:text-sm">لغو احراز حویت و حذف نماینده</span>
          </Link>
        ) : status === "active" ? (
          <div
            role="button"
            className="flex cursor-pointer w-full fcc h-full gap-x-3"
          >
            <Link
              href={"#"}
              className="rounded-lg bg-blue-500 fcc w-full h-full gap-x-1"
            >
              <HiPencil className="text-xl" />
              <span className="text-xs sm:text-sm">ویرایش نماینده</span>
            </Link>
            <Link
              href={"#"}
              className="rounded-lg bg-red-500 fcc w-full h-full gap-x-1"
            >
              <HiTrash className="text-xl" />
              <span className="text-xs sm:text-sm">حذف نماینده</span>
            </Link>
          </div>
        ) : (
          <Link
            href={"#"}
            role="button"
            className="flex fcc cursor-pointer w-full bg-secondary-500 px-2 rounded-lg gap-x-2 h-full"
          >
            <HiOutlineRefresh className="text-xl" />
            <span className="text-xs sm:text-sm">فعال سازی مجدد نماینده</span>
          </Link>
        )}
      </section>
    </div>
  );
}

export default DeputyCard;
