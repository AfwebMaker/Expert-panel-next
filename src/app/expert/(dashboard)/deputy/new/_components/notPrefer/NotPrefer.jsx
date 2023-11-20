import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'
// components
import DynamicInputs from "/src/app/_components/inputs/DynamicInputs";
import InformationForm from "./InformationForm"
import LegalForm from "./LegalForm"
import Button from "/src/app/_components/Button"
//formik
import { useFormik } from "formik";
import * as Yup from "yup";
// redux
import { useDispatch, useSelector } from "react-redux";
import { loadingHandler } from '/src/redux/features/layout/layoutConfigSlice';
//react Icons
import { HiOutlineFingerPrint } from "react-icons/hi";
// services
import add from "/src/services/deputy_kg_local/add"


function NotPrefer() {

  const [validation, setValidation] = useState(false);
  // const { mainDataCompany } = useSelector(state => state.profileBase.user)
  const { mainDataCompany } = useSelector(state => state.getExpertInfo.user)
  const router = useRouter()
  const dispatch = useDispatch()

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
  }

  const validationSchema = Yup.object().shape(validation);

  useEffect(() => {
    mainDataCompany !== null ?
      setValidation({ ...baseValidation, ...legalValidation }) :
      setValidation(baseValidation)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainDataCompany])

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
      const dataUser = {
        "id": 0,
        "nameFamily": values.nameFamily,
        "avatarURL": values.avatarURL,
        "isMyself": false,
        "mobile": values.mobile,
        "nationalCode": values.nationalCode,
        "zipCode": values.zipCode,
        "description": values.description,
      }

      const dataExpert = {
        "company_OrganizationLevel": values.company_OrganizationLevel,
        "company_LastEducationalCertificate": values.company_LastEducationalCertificate,
        "company_Resume": values.company_Resume,
        "companyResumeURL": values.company_ResumeURL
      }

      const data = mainDataCompany !== null ? Object.assign(dataUser, dataExpert) : Object.assign(dataUser);

      dispatch(loadingHandler(true))
      add(data)
        .then(res => {
          router.replace("/expert/deputy/")
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
    <div className="w-full mt-5 flex flex-col">
      <p className="text-xs leading-5 w-full text-cf-300 mb-5">
        در اصورتی که شخص دیگری را برای نماینده خودتان در نظر دارید پس از وارد
        کردن مشخصات نماینده تان منتظر احراز هویت از سمت ادمین بمانید.
      </p>
      <form onSubmit={formik.handleSubmit}>
        <InformationForm formik={formik} />
        {mainDataCompany !== null && <LegalForm formik={formik} />}
        <div className="w-full flex items-start justify-center flex-col gap-y-3 mb-5">
          <h2 className="text-cf-300 text-sm">عکس نماینده</h2>
          <p className="text-cf-300 text-xs">مدارک شامل اسناد تصویری می باشد که شما باید آنها را به صورت یکی از فرمت های JPG , JPEG , PNG آپلود کنید.</p>
          <DynamicInputs
            inputType={"uploadFile"}
            title={"آپلود فایل"}
            state={1}
            required={true}
            className="my-2 w-full"
            placeholder={"به طور مثال : سلام روز بخیر .."}
            id={"avatarURL"}
            name={"avatarURL"}
            formik={formik}
          />
        </div>
        {
          mainDataCompany !== null && (
            <div className="w-full flex items-start justify-center flex-col gap-y-3 mb-5">
              <h2 className="text-cf-300 text-sm">عکس آخرین مدرک تحصیلی نماینده تان</h2>
              <p className="text-cf-300 text-xs">
                مدارک شامل اسناد تصویری می باشد که شما باید آنها را به صورت یکی از فرمت های JPG , JPEG , PNG آپلود کنید.
              </p>
              <DynamicInputs
                inputType={"uploadFile"}
                title={"آپلود فایل"}
                state={1}
                required={true}
                className="my-2 w-full"
                placeholder={"به طور مثال : سلام روز بخیر .."}
                id={"company_ResumeURL"}
                name={"company_ResumeURL"}
                formik={formik}
              />
            </div>
          )
        }
        <Button type='submit' icon={<HiOutlineFingerPrint size={20} />} title='ثبت و احراز هویت' />
      </form>
    </div>
  );
}

export default NotPrefer;
