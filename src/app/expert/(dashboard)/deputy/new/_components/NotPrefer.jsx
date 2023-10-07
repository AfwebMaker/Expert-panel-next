import React, { useState } from "react";
// components
import Input from "@/app/_components/Input";
//formik
import { useFormik } from "formik";
import * as Yup from "yup";

function NotPrefer() {
  const [validation, setValidation] = useState(false);

  const inputData = [
    {
      id: "nationalCode",
      name: "nationalCode",
      title: "کد‌ملی نماینده",
      required: true,
      type: "text",
      placeholder: "به طور مثال : ۰۰٥٦۲۷۹۸٤٥",
    },
    {
      id: "zipCode",
      name: "zipCode",
      title: "کدپستی نماینده",
      required: true,
      type: "text",
      placeholder: "به طور مثال : ۲۷۹۰٤۰۲۷۸٤٥",
    },
    {
      id: "familyName",
      name: "familyName",
      title: "نام و نام‌خانوادگی",
      required: true,
      type: "text",
      placeholder: "به طور مثال : احمد سلوکی",
    },
    {
      id: "mobile",
      name: "mobile",
      title: "شماره تلفن نماینده",
      required: true,
      type: "text",
      placeholder: "به طور مثال : ۰۹۱۲۸٤٦۹۷۸۷",
    },
    {
      id: "description",
      name: "description",
      title: "علت تغییر یا اضافه‌کردن نماینده تان ",
      required: true,
      type: "text",
      placeholder:
        "با سلام خدمت شما من در قسمت ثبت سفارش های جدید هرچه تلاش میکنم که قیمتم را برای مناقصه ثبت کنم موفق نمی شوم و زمانی که دکمه ثبت را میزنم صفحه برای من رفرش نمی شود و قیمت نیز ثبت نمی شود. لطفا من را راهنمایی بفرمایید. ممنون",
    },
  ];

  const baseValidation = {
    nationalCode: Yup.string()
      .required("لطفا نام خود را وارد کنید.")
      .matches(/^[\u0600-\u06FF\s]+$/, "نام باید با حروف فارسی نوشته شود.")
      .min(3, "لطفا نام خود را به درستی وارد کنید."),
    zipCode: Yup.string()
      .required("لطفا نام خانوادگی خود را وارد کنید.")
      .matches(
        /^[\u0600-\u06FF\s]+$/,
        "نام خانوادگی باید با حروف فارسی نوشته شود."
      )
      .min(3, "لطفا نام خانوادگی خود را به درستی وارد کنید."),
    familyName: Yup.string()
      .required("لطفا نام پدر خود را وارد کنید.")
      .matches(/^[\u0600-\u06FF\s]+$/, "نام پدر باید با حروف فارسی نوشته شود.")
      .min(3, "لطفا نام پدر خود را به درستی وارد کنید."),
    mobile: Yup.string()
      .required("لطفا کد ملی خود را وارد کنید.")
      .min(10, "کد ملی باید شامل 10 رقم باشد.")
      .max(10, "کد ملی باید شامل 10 رقم باشد."),
    description: Yup.string()
      .required("لطفا شماره تلفن خود را وارد کنید.")
      .min(11, "شماره تلفن باید شامل 11 رقم باشد.")
      .max(11, "شماره تلفن باید شامل 11 رقم باشد."),
  };
  const validationSchema = Yup.object().shape(validation);

  const formik = useFormik({
    initialValues: {
      nationalCode: "",
      zipCode: "",
      familyName: "",
      mobile: "",
      description: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="w-full mt-5 flex flex-col">
      <p className="text-xs leading-5 w-full text-cf-300">
        در اصورتی که شخص دیگری را برای نماینده خودتان در نظر دارید پس از وارد
        کردن مشخصات نماینده تان منتظر احراز هویت از سمت ادمین بمانید.
      </p>
      <form>
        {inputData.map((item) => (
          <Input
            key={item.id}
            title={item.title}
            state="Low"
            required={item.required}
            type={item.type}
            className="my-2 w-full lg:w-[49%]"
            placeholder={item.placeholder}
            id={item.id}
            name={item.name}
            value={formik.values[item.name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors[item.name]}
            touched={formik.touched[item.name]}
            formik={formik}
          />
        ))}
      </form>
    </div>
  );
}

export default NotPrefer;
