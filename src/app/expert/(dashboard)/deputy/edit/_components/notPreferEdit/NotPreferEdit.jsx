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
import { useDispatch, useSelector } from "react-redux";
import { loadingHandler } from '@/src/redux/features/layout/layoutConfigSlice';
//react Icons
import { HiOutlineFingerPrint } from "react-icons/hi";
// services
import add from "@/services/deputy_kg_local/add"

function NotPreferEdit({ stateForm, setStateForm }) {

  const [validation, setValidation] = useState(false);
  const { mainDataCompany } = useSelector(state => state.getExpertInfo.user)
  const activeDataLocal = useSelector(state => state.getExpertInfo.activeData)
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
  }, [mainDataCompany])

  useEffect(() => {
    console.log(activeDataLocal)
    if (activeDataLocal === null) {
      router.replace('/expert/deputy')
    }
  }, [])


  const formik = useFormik({
    initialValues: {
      nameFamily: activeDataLocal ? activeDataLocal.nameFamily : "",
      mobile: activeDataLocal ? "0" + activeDataLocal.mobile : "",
      nationalCode: activeDataLocal ? activeDataLocal.nationalCode : "",
      zipCode: activeDataLocal ? activeDataLocal.zipCode : "",
      description: activeDataLocal && activeDataLocal.description ? activeDataLocal.description : "",
      avatarURL: activeDataLocal ? activeDataLocal.avatarURL : {},
      company_OrganizationLevel: activeDataLocal && activeDataLocal.company_OrganizationLevel ? activeDataLocal.company_OrganizationLevel : null,
      company_LastEducationalCertificate: activeDataLocal && activeDataLocal.company_LastEducationalCertificate ? activeDataLocal.company_LastEducationalCertificate : null,
      company_Resume: activeDataLocal && activeDataLocal.company_Resume ? activeDataLocal.company_Resume : "",
      company_ResumeURL: activeDataLocal && activeDataLocal.company_ResumeURL ? activeDataLocal.company_ResumeURL : {},
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      const dataUser = {
        "id": activeDataLocal.id,
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
          console.log(res)
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
    <div className="w-full flex flex-col">
      <span className="text-xs leading-5 w-full text-cf-300 mb-5">
        مشخصات نماینده شما
      </span>
      <form onSubmit={formik.handleSubmit}>
        <InformationForm formik={formik} />
        {mainDataCompany !== null && <LegalForm formik={formik} />}
        <div className="w-full flex items-start justify-center flex-col gap-y-3 mb-5">
          <h2 className="text-cf-300 text-sm">عکس نماینده</h2>
          <p className="text-cf-300 text-xs">مدارک شامل اسناد تصویری می باشد که شما باید آنها را به صورت یکی از فرمت های JPG , JPEG , PNG آپلود کنید.</p>
          <DynamicInputs
            inputType={"uploadFile"}
            title={"آپلود فایل"}
            state={0}
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
                state={0}
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
        <Button type='submit' disable={!stateForm} icon={<HiOutlineFingerPrint size={20} />} title='ثبت تغییرات' />
      </form>
    </div>
  );
}

export default NotPreferEdit;
