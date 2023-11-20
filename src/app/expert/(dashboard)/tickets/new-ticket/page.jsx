"use client";
import React from "react";
import Link from "next/link";
// react icons
import { HiOutlinePlusCircle, HiTicket, HiOutlineChevronRight } from "react-icons/hi";
//formik
import { useFormik } from "formik";
import * as Yup from "yup";
// components
import InfoCard from "/src/app/_components/InfoCard";
import DynamicInputs from "/src/app/_components/inputs/DynamicInputs";
import Button from "/src/app/_components/Button"
// redux
import { loadingHandler } from '/src/redux/features/layout/layoutConfigSlice';
import { useDispatch } from "react-redux";
// services
import sendMessage from "/src/services/ticket_kg_local/sendMessage"
import { useRouter } from "next/navigation";

function Page() {
  const dispatch = useDispatch();
  const router = useRouter()

  const validationSchema = Yup.object().shape({
    departmentId: Yup.string().required(
      "لطفا نام خانوادگی خود را به درستی وارد کنید."
    ),
    subjectId: Yup.string().required(
      "لطفا نام خانوادگی خود را به درستی وارد کنید."
    ),
    content: Yup.string()
      .required("لطفا این فیلد را پر کنید")
      .min(5, "توضیحات باید حداقل 5 کاراکتر باشد")
      .max(500, "توضیحات نمی‌تواند بیش از 500 کاراکتر باشد"),
    media: Yup.mixed()
      .test(
        "required",
        "لطفا یک فایل را انتخاب کنید",
        (value) => value && value.length
      )
      .test(
        "fileSize",
        "حجم فایل بیش از حد مجاز است (1MB)",
        (value) => value && (!value.size ? true : value.size <= 1024 * 1024)
      )
      .test(
        "fileFormat",

        "فرمت فایل پشتیبانی نمی‌شود",
        (value) =>
          value &&
          (!value.type
            ? true
            : ["image/jpg", "image/jpeg", "image/png"].includes(value.type))
      ),
  });

  const formik = useFormik({
    initialValues: {
      departmentId: "",
      subjectId: "",
      content: "",
      media: [],
    },
    validationSchema,
    onSubmit: (values) => {
      const data = {
        "departmentId": values.departmentId,
        "subjectId": values.subjectId,
        "content": values.content,
        "media": values.media,
      }

      dispatch(loadingHandler(true))
      sendMessage(data)
        .then(res => {
          router.replace("/expert/tickets/")
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          dispatch(loadingHandler(false))
        })
    },
  });

  return (
    <div className="w-[100%] h-[calc(100vh-135px)] md:h-[calc(100vh-190px)] rounded-lg bg-white flex flex-col items-center justify-start py-10 px-5 overflow-y-scroll hideScroll">
      <div className="w-full h-auto flex flex-col items-center justify-start">
        <Link href={"#"} className="flex md:hidden items-center justify-start text-cf-300 text-sm font-bold w-full pb-5">
          <HiOutlineChevronRight className="ml-1 text-base" />
          <h1>تیکت های من</h1>
        </Link>
        <div className="flex items-center justify-center text-primary-500 font-bold w-full pb-10">
          <h1>تیکت جدید</h1>
          <HiOutlinePlusCircle className="mr-1 text-lg" />
        </div>
        <InfoCard styleCustom="text-blue-600 w-full">
          متخصص گرامی چنانچه سوالی دارید می‌توانید با جستجو در قسمت سوالات
          متداول پاسخ اکثر سوالات خود را بیابید ، در صورتیکه به پاسخ مورد نظر
          خود دست نیافتید می‌توانید از طریق ارسال تیکت به دپارتمان مربوطه با
          کارشناسان کارگشا در ارتباط باشید.
        </InfoCard>
        <form onSubmit={formik.handleSubmit} className="mt-10 w-full">
          <div>
            <h2 className="text-xs leading-6 sm:text-sm sm:leading-6 text-cf-300">
              در این قسمت میتوانید موضوع مشکل خود را از بین یکی از دسته بندی های
              زیر اتخاب کنید و سپس از زیر دسته آن به راحتی به دپارتمان مورد
              نطرتان وصل شوید.
            </h2>
            <div className="flex flex-col md:flex-row w-full items-start justify-around gap-x-3 mt-3">
              <DynamicInputs
                inputType={"dropDown"}
                title={"دسته بندی (دپارتمان مورد نظر)"}
                state="Low"
                required={true}
                className="my-2 w-full lg:w-[49%]"
                placeholder={"به طور مثال : جواد زاده"}
                id={"departmentId"}
                name={"departmentId"}
                formik={formik}
              />
              <DynamicInputs
                inputType={"dropDown"}
                title={"مشکل در ثبت سفارشات"}
                state="Low"
                required={true}
                className="my-2 w-full lg:w-[49%]"
                placeholder={"به طور مثال : جواد زاده"}
                id={"subjectId"}
                name={"subjectId"}
                formik={formik}
              />
            </div>
          </div>
          <div className="w-full items-center justify-around gap-x-3 mt-3">
            <h2 className="text-xs leading-6 sm:text-sm sm:leading-6 text-cf-300 mb-5">
              در این قسمت با توضیحات بیشتر در مورد مشکلات همکاران مارا در
              راهنمایی بهتر و رفع سریع تر مشکل شما یاری کنید.
            </h2>
            <DynamicInputs
              inputType={"inputTextarea"}
              title={"مشکل خود را در این قسمت بنویسید"}
              state="Low"
              required={true}
              className="my-2 w-full"
              placeholder={"به طور مثال : جواد زاده"}
              id={"content"}
              name={"content"}
              formik={formik}
            />
          </div>
          <div className="w-full items-center justify-around gap-x-3 mt-10 mb-5">
            <h2 className="text-sm text-cf-400 leading-6">
              اسناد و فایل‌ها
            </h2>
            <p className="text-xs leading-6  sm:leading-6 text-cf-300 my-3">
              مدارک شامل اسناد تصویری می باشد که شما باید آنها را به صورت یکی از
              فرمت های JPG , JPEG , PNG آپلود کنید.
            </p>
            <DynamicInputs
              inputType={"uploadFile_multiple"}
              title={"آپلود فایل"}
              state="Low"
              required={true}
              className="my-2 w-full"
              id={"media"}
              name={"media"}
              formik={formik}
            />
          </div>
          <Button type='submit' icon={<HiTicket size={20} />} title='ارسال تیکت' />
        </form>
      </div>
    </div>
  );
}

export default Page;
