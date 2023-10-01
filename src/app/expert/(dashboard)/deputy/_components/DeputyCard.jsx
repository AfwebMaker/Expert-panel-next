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
    <div className="bg-white max-w-[350px] h-[290px] w-full rounded-lg p-5 flex flex-col border border-gray-200">
      <section className="w-full fcc">
        <div className="bg-black h-16 w-16 md:h-24 md:w-24 rounded-full fcc">
            {/* <Image src={src} width={100} height={100} alt=""/> */}
        </div>
      </section>
      <section className="w-full fcc flex-col mt-5">
        <div className="w-full fcc text-sm gap-x-1">
          <span className="text-sm text-cf-500 font-bold">
            نام و نام خانوادگی :
          </span>
          <span className="text-sm text-cf-300">{name}</span>
        </div>
        <div className="md:text-sm flex items-center text-sm text-cf-500 font-bold">
          وضعیت نماینده :
          {status === "pending" ? (
            <div className="flex text-warning fcc px-2 h-8 text-sm">
              <span>در انتظار تایید ادمین</span>
              <HiOutlineDotsCircleHorizontal className="mr-1" />
            </div>
          ) : status === "active" ? (
            <div className="flex text-success fcc px-2 h-8">
              <span>فعال</span>
              <HiOutlineCheckCircle className="mr-1" />
            </div>
          ) : (
            <div className="flex text-error fcc px-2 h-8">
              <span>غیر‌فعال</span>
              <HiOutlineXCircle className="mr-1" />
            </div>
          )}
        </div>
        <div className="w-full fcc text-sm gap-x-1">
          <span className="text-sm text-cf-500 font-bold">شماره تماس :</span>
          <span className="text-sm text-cf-300">{phone}</span>
        </div>
      </section>
      <section className="w-full h-[40px] fcc flex-col mt-5 text-white">
        {status === "pending" ? (
          <Link
            href={"#"}
            role="button"
            className="flex cursor-pointer w-full bg-orange-500 fcc px-2 text-sm gap-x-1 rounded-lg h-full"
          >
            <HiOutlineX className="text-xl" />
            <span className="text-sm">لغو احراز حویت و حذف نماینده</span>
          </Link>
        ) : status === "active" ? (
          <div
            role="button"
            className="flex cursor-pointer w-full fcc h-full gap-x-3"
          >
            <Link
              href={"#"}
              className="rounded-lg bg-blue-500 fcc w-[150px] h-full gap-x-1"
            >
              <HiPencil className="text-xl" />
              <span className="text-sm">ویرایش نماینده</span>
            </Link>
            <Link
              href={"#"}
              className="rounded-lg bg-red-500 fcc w-[150px] h-full gap-x-1"
            >
              <HiTrash className="text-xl" />
              <span className="text-sm">حذف نماینده</span>
            </Link>
          </div>
        ) : (
          <Link
            href={"#"}
            role="button"
            className="flex fcc cursor-pointer w-full bg-secondary-500 px-2 rounded-lg gap-x-2 h-full"
          >
            <HiOutlineRefresh className="text-xl" />
            <span className="text-sm">فعال سازی مجدد نماینده</span>
          </Link>
        )}
      </section>
    </div>
  );
}

export default DeputyCard;
