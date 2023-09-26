"use client";
import React from "react";
// react icons
import { HiOutlinePlusCircle } from "react-icons/hi";
//formik
import { useFormik } from "formik";
import * as Yup from "yup";
// components
import InfoCard from "@/app/_components/InfoCard";
import Input from "@/app/_components/Input";
import UploadContain from "@/app/_components/UploadContain";

function newTicket() {
  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string().required("لطفا رمز عبور قدیمی خود را وارد کنید"),
    newPassword: Yup.string()
      .required("لطفا رمز عبور جدید خود را وارد کنید")
      .min(8, "رمز عبور باید حداقل شامل ۸ کاراکتر باشد")
      .matches(/[A-Z]/, "رمز عبور باید شامل حداقل یک حرف بزرگ باشد")
      .matches(/[a-z]/, "رمز عبور باید شامل حداقل یک حرف کوچک باشد")
      .matches(/[0-9]/, "رمز عبور باید شامل حداقل یک عدد باشد")
      .matches(
        /[@$!%*?&]/,
        "رمز عبور باید شامل کاراکترهای خاص (!@#$%...) باشد"
      ),
    confirmNewPassword: Yup.string()
      .required("لطفا تکرار رمز عبور خود را وارد کنید")
      .oneOf(
        [Yup.ref("newPassword"), null],
        "رمز عبور با تکرار آن مطابقت ندارد"
      ),
  });

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="w-[100%] h-[calc(100vh-190px)] rounded-lg bg-white flex flex-col items-center justify-start py-10 px-5 overflow-y-scroll hideScroll">
      <div className="flex items-center justify-center text-primary-500 font-bold w-full pb-10">
        <h1>ارسال تیکت جدید</h1>
        <HiOutlinePlusCircle className="mr-1 text-lg" />
      </div>
      <InfoCard styleCustom="text-blue-600 w-full">
        متخصص گرامی چنانچه سوالی دارید می‌توانید با جستجو در قسمت سوالات متداول
        پاسخ اکثر سوالات خود را بیابید ، در صورتیکه به پاسخ مورد نظر خود دست
        نیافتید می‌توانید از طریق ارسال تیکت به دپارتمان مربوطه با کارشناسان
        کارگشا در ارتباط باشید.
      </InfoCard>
      <form className="mt-10 w-full">
        <div>
          <h2 className="text-sm text-cf-300 leading-6">
            در این قسمت میتوانید موضوع مشکل خود را از بین یکی از دسته بندی های
            زیر اتخاب کنید و سپس از زیر دسته آن به راحتی به دپارتمان مورد نطرتان
            وصل شوید.
          </h2>
          <div className="flex w-full items-center justify-around gap-x-3 mt-3">
            <Input
              active={true}
              title="تکرار رمز عبور جدید"
              state="required"
              type="text"
              placeholder="••••••••••••"
              className="my-2 w-full"
              id="confirmNewPassword"
              name="confirmNewPassword"
              value={formik.values.confirmNewPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.confirmNewPassword}
              touched={formik.touched.confirmNewPassword}
            />
            <Input
              active={true}
              title="تکرار رمز عبور جدید"
              state="required"
              type="text"
              placeholder="••••••••••••"
              className="my-2 w-full"
              id="confirmNewPassword"
              name="confirmNewPassword"
              value={formik.values.confirmNewPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.confirmNewPassword}
              touched={formik.touched.confirmNewPassword}
            />
          </div>
        </div>
        <div className="w-full items-center justify-around gap-x-3 mt-3">
          <h2 className="text-sm text-cf-300 leading-6">
            در این قسمت با توضیحات بیشتر در مورد مشکلات همکاران مارا در راهنمایی
            بهتر و رفع سریع تر مشکل شما یاری کنید.
          </h2>
          <Input
            active={true}
            title="مشکل خود را در این قسمت بنویسید"
            state="required"
            type="text"
            placeholder="مشکل خود را در این قسمت بنویسید"
            className="my-2 w-full"
            id="confirmNewPassword"
            name="confirmNewPassword"
            value={formik.values.confirmNewPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.confirmNewPassword}
            touched={formik.touched.confirmNewPassword}
          />
        </div>
        <div className="w-full items-center justify-around gap-x-3 mt-10">
          <h2 className="text-sm text-cf-400 leading-6 mb-4">اسناد و فایل‌ها</h2>
          <p className="text-sm text-cf-300 leading-6 mb-3">
            مدارک شامل اسناد تصویری می باشد که شما باید آنها را به صورت یکی از
            فرمت های JPG , JPEG , PNG آپلود کنید.
          </p>
          <UploadContain/>
        </div>
      </form>
    </div>
  );
}

export default newTicket;
