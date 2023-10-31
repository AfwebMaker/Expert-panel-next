import React from 'react'
import { useRouter } from 'next/navigation';
// components
import DynamicInputs from "@/app/_components/inputs/DynamicInputs";
import Button from "@/app/_components/Button"
//formik
import { useFormik } from "formik";
import * as Yup from "yup";
// react icons
import { HiOutlineFingerPrint } from 'react-icons/hi';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { loadingHandler } from '@/src/redux/features/layout/layoutConfigSlice';

function Prefer() {
  const router = useRouter()
  const dispatch = useDispatch()

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
      const data = {
        "mobile": values.mobile,
      }

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
    <div className="w-full mt-5 flex flex-col">
      <form className='gap-y-10' onSubmit={formik.handleSubmit}>
        <DynamicInputs
          key={"mobile"}
          inputType={"text"}
          title={"شماره تلفن نماینده"}
          state={1}
          required={true}
          className={"my-2 w-full"}
          placeholder={"به طور مثال : 09102186156"}
          id={"mobile"}
          name={"mobile"}
          formik={formik}
        />
        <br />
        <Button type='submit' icon={<HiOutlineFingerPrint size={20} />} title='ثبت و احراز هویت' />
      </form>
    </div>
  )
}

export default Prefer