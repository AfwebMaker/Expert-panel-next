import React from 'react'
import { useRouter } from 'next/navigation';
// components
import DynamicInputs from "/src/app/_components/inputs/DynamicInputs";
import Button from "/src/app/_components/Button"
//formik
import { useFormik } from "formik";
import * as Yup from "yup";
// react icons
import { HiOutlineFingerPrint } from 'react-icons/hi';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { loadingHandler } from '/src/redux/features/layout/layoutConfigSlice';

function PreferEdit({ stateForm }) {
  const { mainDataCompany } = useSelector(state => state.getExpertInfo.user)
  const activeDataLocal = useSelector(state => state.getExpertInfo.activeData)
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
      mobile: activeDataLocal ? "0" + activeDataLocal.mobile : "",
    },
    validationSchema,
    onSubmit: (values) => {
      const data = {
        "id": activeDataLocal.id,
        "nameFamily": values.nameFamily,
        "avatarURL": values.avatarURL,
        "isMyself": true,
        "mobile": values.mobile,
        "nationalCode": values.nationalCode,
        "zipCode": values.zipCode,
        "description": values.description,
      }

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
      <span className="text-xs leading-5 w-full text-cf-300 mb-5">
        شما شماره تلفن دیگرتان را برای فعالیت های خود انتخاب کردید و شماره دیگر شما به عنوان نماینده شما فعال شده است.
      </span>
      <form className='gap-y-10' onSubmit={formik.handleSubmit}>
        <DynamicInputs
          key={"mobile"}
          inputType={"text"}
          title={"شماره تلفن نماینده"}
          state={stateForm ? 1 : 0}
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