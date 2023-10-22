import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'
// components
import DynamicInputs from "@/app/_components/inputs/DynamicInputs";
import InformationForm from "./InformationForm"
import LegalForm from "./LegalForm"
import Button from "@/app/_components/Button"
//formik
import { useFormik } from "formik";
import * as Yup from "yup";
// redux
import { useSelector } from "react-redux";
//react Icons
import { HiOutlineFingerPrint } from "react-icons/hi";

function NotPreferEdit() {

  const [validation, setValidation] = useState(false);
  const { idUser } = useSelector(state => state.profileBase.user)
  const router = useRouter()
  console.log(idUser)

  const baseValidation = {
    nameFamily: Yup.string()
      .required('لطفا نام‌و‌نام‌خانوادگی خود را وارد کنید.')
      .matches(/^[\u0600-\u06FF\s]+$/, 'نام‌و‌نام‌خانوادگی باید با حروف فارسی نوشته شود.')
      .min(3, 'لطفا نام‌و‌نام‌خانوادگی خود را به درستی وارد کنید.'),
    mobile: Yup.string()
      .required('لطفا شماره تلفن خود را وارد کنید.')
      .min(11, 'شماره تلفن باید شامل 11 رقم باشد.')
      .max(11, 'شماره تلفن باید شامل 11 رقم باشد.'),
    nationalCode: Yup.string()
      .required('لطفا کد ملی خود را وارد کنید.')
      .min(10, 'کد ملی باید شامل 10 رقم باشد.')
      .max(10, 'کد ملی باید شامل 10 رقم باشد.'),
    zipCode: Yup.string()
      .required('لطفا کد پستی خود را وارد کنید.')
      .min(10, 'کد ملی باید شامل 10 رقم باشد.')
      .max(10, 'کد ملی باید شامل 10 رقم باشد.'),
    description: Yup.string()
      .required("لطفا  فیلد توضیحات را پر کنید")
      .min(5, "توضیحات باید حداقل 5 کاراکتر باشد")
      .max(500, "توضیحات نمی‌تواند بیش از 500 کاراکتر باشد"),
    avatarURL: Yup.mixed()
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

  }
  const legalValidation = {
    company_OrganizationLevel: Yup.string()
      .required('لطفا سمت سازمانی خود را وارد کنید.')
      .matches(/^[\u0600-\u06FF\s]+$/, 'سمت سازمانی باید با حروف فارسی نوشته شود.')
      .min(3, 'لطفا سمت سازمانی خود را به درستی وارد کنید.'),
    company_LastEducationalCertificate: Yup.string()
      .required('لطفا آخرین مدرک تحصیلی خود را انتخاب کنید.'),
    company_Resume: Yup.string()
      .required("لطفا  فیلد سوابق کاری را پر کنید")
      .min(5, "توضیحات باید حداقل 5 کاراکتر باشد")
      .max(500, "توضیحات نمی‌تواند بیش از 500 کاراکتر باشد"),
    company_ResumeURL: Yup.mixed()
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
  }

  const validationSchema = Yup.object().shape(validation);

  useEffect(() => {
    !idUser ?
      setValidation(baseValidation) :
      setValidation({ ...baseValidation, ...legalValidation })
  }, [idUser])

  console.log("validation", validation)
  console.log("idUser", idUser)

  const formik = useFormik({
    initialValues: {
      nameFamily: "",
      mobile: "",
      nationalCode: "",
      zipCode: "",
      description: "",
      avatarURL: [],
      company_OrganizationLevel: "",
      company_LastEducationalCertificate: "",
      company_Resume: "",
      company_ResumeURL: [],
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      router.replace("deputy")
    },
  });

  return (
    <div className="w-full flex flex-col">
      <span className="text-xs leading-5 w-full text-cf-300 mb-5">
        مشخصات نماینده شما
      </span>
      <form onSubmit={formik.handleSubmit}>
        <InformationForm formik={formik} />
        {
          <LegalForm formik={formik} />
        }
        <div className="w-full flex items-start justify-center flex-col gap-y-3 mb-5">
          <h2 className="text-cf-300 text-sm">عکس نماینده</h2>
          <p className="text-cf-300 text-xs">مدارک شامل اسناد تصویری می باشد که شما باید آنها را به صورت یکی از فرمت های JPG , JPEG , PNG آپلود کنید.</p>
          <DynamicInputs
            inputType={"uploadFile"}
            title={"آپلود فایل"}
            state="Low"
            required={true}
            className="my-2 w-full"
            placeholder={"به طور مثال : سلام روز بخیر .."}
            id={"avatarURL"}
            name={"avatarURL"}
            formik={formik}
          />
        </div>
        <div className="w-full flex items-start justify-center flex-col gap-y-3 mb-5">
          <h2 className="text-cf-300 text-sm">عکس آخرین مدرک تحصیلی نماینده تان</h2>
          <p className="text-cf-300 text-xs">
            مدارک شامل اسناد تصویری می باشد که شما باید آنها را به صورت یکی از فرمت های JPG , JPEG , PNG آپلود کنید.
          </p>
          <DynamicInputs
            inputType={"uploadFile"}
            title={"آپلود فایل"}
            state="Low"
            required={true}
            className="my-2 w-full"
            placeholder={"به طور مثال : سلام روز بخیر .."}
            id={"company_ResumeURL"}
            name={"company_ResumeURL"}
            formik={formik}
          />
        </div>
        <Button type='submit' disable={true} icon={<HiOutlineFingerPrint size={20} />} title='ثبت تغییرات' />
      </form>
    </div>
  );
}

export default NotPreferEdit;
