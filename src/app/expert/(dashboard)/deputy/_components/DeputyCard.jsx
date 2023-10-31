import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
//services
import reActive from "@/src/services/deputy_kg_local/reActive"
import deActive from "@/src/services/deputy_kg_local/deActive"
import cancel from "@/src/services/deputy_kg_local/cancel"
// redux
import { useDispatch, useSelector } from "react-redux";
import { loadingHandler } from '@/src/redux/features/layout/layoutConfigSlice';
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

function DeputyCard({ status, phone, name, activeData, avatarURL, nationalCode }) {

  const router = useRouter();
  const dispatch = useDispatch();

  const cancellationHandler = () => {
    console.log("first")
    const data = {
      "nationalCode": activeData ? activeData.nationalCode : "",
    }
    dispatch(loadingHandler(true))
    deActive(data)
      .then(res => {
        router.replace("/expert/deputy/")
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        dispatch(loadingHandler(false))
      })
  }

  const activationHandler = (e) => {
    console.log(e.target.id)
    const data = {
      "nationalCode": e.target.id,
    }
    dispatch(loadingHandler(true))
    reActive(data)
      .then(res => {
        router.replace("/expert/deputy/")
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        dispatch(loadingHandler(false))
      })
  }

  const cancelHandler = (e) => {
    console.log(e.target.id)
    const data = {
      "nationalCode": e.target.id,
    }
    dispatch(loadingHandler(true))
    cancel(data)
      .then(res => {
        router.replace("/expert/deputy/")
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        dispatch(loadingHandler(false))
      })
  }

  return (
    <div className="bg-white md:col-span-6 xl:col-span-4 w-full rounded-lg p-3 sm:p-5 flex flex-col border border-gray-200">
      <div className="w-full flex md:flex-col">
        <section className="md:w-full fcc">
          <div className="h-14 w-14 md:h-24 md:w-24 rounded-full fcc overflow-hidden border border-gray-300">
            <Image src={avatarURL} width={60} height={60} alt="" />
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
            <span className="text-cf-300 mr-1">{"0" + phone}</span>
          </div>
        </section>
      </div>

      <section className="w-full h-[36px] fcc flex-col mt-5 text-white">
        {status === "pending" ? (
          <div
            onClick={cancelHandler}
            role="button"
            id={nationalCode}
            className="flex cursor-pointer w-full bg-orange-500 fcc px-2 gap-x-1 rounded-lg h-full"
          >
            <HiOutlineX id={nationalCode} className="text-xl" />
            <span id={nationalCode} className="text-xs sm:text-sm">لغو احراز حویت و حذف نماینده</span>
          </div>
        ) : status === "active" ? (
          <div
            role="button"
            className="flex cursor-pointer w-full fcc h-full gap-x-3"
          >
            <Link
              href={'deputy/edit'}
              className="rounded-lg bg-blue-500 fcc w-full h-full gap-x-1"
            >
              <HiPencil className="text-xl" />
              <span className="text-xs sm:text-sm">ویرایش نماینده</span>
            </Link>
            <div
              onClick={cancellationHandler}
              href={"#"}
              className="rounded-lg bg-red-500 fcc w-full h-full gap-x-1"
            >
              <HiTrash className="text-xl" />
              <span className="text-xs sm:text-sm">حذف نماینده</span>
            </div>
          </div>
        ) : (
          <div
            onClick={activationHandler}
            role="button"
            id={nationalCode}
            className="flex fcc cursor-pointer w-full bg-secondary-500 px-2 rounded-lg gap-x-2 h-full"
          >
            <HiOutlineRefresh id={nationalCode} className="text-xl" />
            <span id={nationalCode} className="text-xs sm:text-sm">فعال سازی مجدد نماینده</span>
          </div>
        )}
      </section>
    </div>
  );
}

export default DeputyCard;
