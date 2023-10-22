import React from 'react'
// components
import DynamicInputs from "@/app/_components/inputs/DynamicInputs";
import Button from "@/app/_components/Button"
//formik
import { useFormik } from "formik";
import * as Yup from "yup";
// react icons
import { HiOutlineFingerPrint } from 'react-icons/hi';

function PreferEdit() {

  const baseValidation = {
    mobile: Yup.string()
      .required('لطفا شماره تلفن خود را وارد کنید.')
      .min(11, 'شماره تلفن باید شامل 11 رقم باشد.')
      .max(11, 'شماره تلفن باید شامل 11 رقم باشد.'),
  }

  const validationSchema = Yup.object().shape(baseValidation);

  const formik = useFormik({
    initialValues: {
      mobile: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      router.replace("deputy")
    },
  });

  return (
    <div className="w-full mt-5 flex flex-col">
      <span className="text-xs leading-5 w-full text-cf-300 mb-5">
        شما شماره تلفن دیگرتان را برای فعالیت های خود انتخاب کردید و شماره دیگر شما به عنوان نماینده شما فعال شده است.
      </span>
      <form className='gap-y-10' onSubmit={formik.handleSubmit}>
        <DynamicInputs
          key={"mobile"}
          inputType={"text"}
          title={"شماره تلفن نماینده"}
          state="Low"
          required={true}
          className={"my-2 w-full"}
          placeholder={"به طور مثال : 09102186156"}
          id={"mobile"}
          name={"mobile"}
          formik={formik}
        />
        <br />
        <Button disable={true} type='submit' icon={<HiOutlineFingerPrint size={20} />} title='ثبت تغییرات' />
      </form>
    </div>
  )
}

export default PreferEdit;