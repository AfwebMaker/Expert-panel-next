"use client";

import React from "react";
//formik
import { useFormik } from "formik";
import * as Yup from "yup";
//components
import DynamicInputs from "../../../_components/inputs/DynamicInputs";

function Page() {
  const validationSchema = Yup.object({
    textInput: Yup.string()
      .required("لطفا نام خود را وارد کنید.")
      .matches(/^[\u0600-\u06FF\s]+$/, "نام باید با حروف فارسی نوشته شود.")
      .min(3, "لطفا نام خود را به درستی وارد کنید."),
    dropDown: Yup.string().required(
      "لطفا نام خانوادگی خود را به درستی وارد کنید."
    ),
    dropDown_Icon: Yup.string()
      .required(
        "لطفا نام خانوادگی خود را به درستی وارد کنید."
      ),
    checkBoxMultipleInput: Yup.array().min(
      1,
      "لطفا حداقل یک گزینه را انتخاب کنید."
    ),
    inputTextarea: Yup.string()
      .required("لطفا این فیلد را پر کنید")
      .min(5, "توضیحات باید حداقل 5 کاراکتر باشد")
      .max(500, "توضیحات نمی‌تواند بیش از 500 کاراکتر باشد"),
    uploadFile: Yup.mixed()
      .test(
        "required",
        "لطفا یک فایل را انتخاب کنید",
        (value) => value && Object.keys(value).length
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
    uploadFile_multiple: Yup.array()
      .test(
        "required",
        "لطفا یک فایل را انتخاب کنید",
        (value) => value && value.length
      )
      .test(
        "errorFile",
        "حجم فایل بیش از حد مجاز است یا فرمت فایل پشتیبانی نمی‌شود",
        (value) => value && value[0] !== undefined
      ),
  });

  const inputObjects = [
    {
      id: "datePicker",
      name: "datePicker",
      inputType: "datePicker",
      title: "زمان",
      required: true,
      type: "text",
      placeholder: "به طور مثال : 1401/2/2",
    },
    {
      id: "textInput",
      name: "textInput",
      inputType: "text",
      title: "تکست",
      required: true,
      type: "text",
      placeholder: "به طور مثال : محمد",
    },
    {
      id: "test",
      name: "test",
      inputType: "text",
      title: "تکست(اختیاری)",
      required: false,
      type: "text",
      placeholder: "به طور مثال : محمد",
    },
    {
      id: "dropDown",
      name: "dropDown",
      inputType: "dropDown",
      title: "دراپ دان",
      required: true,
      type: "text",
      placeholder: "به طور مثال : جواد زاده",
    },
    {
      id: "dropDown_Icon",
      name: "dropDown_Icon",
      inputType: "dropDown_Icon",
      title: "دراپ دان(ایکون)",
      required: true,
      type: "text",
      placeholder: "به طور مثال : جواد زاده",
    },
    {
      id: "checkBoxMultipleInput",
      name: "checkBoxMultipleInput",
      inputType: "checkBoxMultiple",
      title: "چک باکس",
      required: true,
      type: "text",
      placeholder: "به طور مثال : جواد زاده",
    },
    {
      id: "inputTextarea",
      name: "inputTextarea",
      inputType: "inputTextarea",
      title: "تکس تریا",
      required: true,
      type: "text",
      placeholder: "به طور مثال : سلام روز بخیر ..",
    },
    {
      id: "uploadFile",
      name: "uploadFile",
      inputType: "uploadFile",
      title: "آپلود فایل",
      required: true,
      type: "file",
      placeholder: "به طور مثال : سلام روز بخیر ..",
    },
    {
      id: "uploadFile_multiple",
      name: "uploadFile_multiple",
      inputType: "uploadFile_multiple",
      title: "آپلود فایل",
      required: true,
      type: "file",
      placeholder: "به طور مثال : سلام روز بخیر ..",
    },
  ];

  const formik = useFormik({
    initialValues: {
      datePicker: "",
      textInput: "",
      dropDown: "",
      dropDown_Icon: "",
      test: "",
      checkBoxMultipleInput: [],
      inputTextarea: "",
      uploadFile: '',
      uploadFile_multiple: [
        // {
        //   id: 3,
        //   name: "Theme=Lighttttttttttttttttt",
        //   size: 23801,
        //   type: "image/jpg",
        //   url: "https://cdn.kargosha.com/kg-category/image/png_20231018060225687_abacus.png",
        // },
        // {
        //   id: 4,
        //   name: "abacus",
        //   size: 32801,
        //   type: "image/jpg",
        //   url: "https://cdn.kargosha.com/kg-category/image/png_20231018062543277_aboutImage_2.png",
        // },
      ],
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="fcc flex-col pt-6">
        {inputObjects.map((item) => (
          <DynamicInputs
            key={item.id}
            inputType={item.inputType}
            title={item.title}
            state="Low"
            required={item.required}
            className="my-2 w-full lg:w-[49%]"
            placeholder={item.placeholder}
            id={item.id}
            name={item.name}
            formik={formik}
          />
        ))}
      </div>

      <button type="submit">submit</button>
    </form>
  );
}

export default Page;
