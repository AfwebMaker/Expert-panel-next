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
    dropDown_Icon: Yup.string().required(
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
    datePicker: Yup.date()
      .required("لطفا این فیلد را پر کنید"),
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
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values.checkBoxMultipleInput);
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
            state="None"
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
