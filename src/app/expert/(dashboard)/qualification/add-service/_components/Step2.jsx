import React, { useState } from 'react'
//formik
import { useFormik } from "formik";
import * as Yup from "yup";
//components
import DynamicInputs from '@/app/_components/inputs/DynamicInputs'
import StepController from '../../_components/StepController'
// import { loadingHandler } from '@/src/redux/features/layout/layoutConfigSlice';

function Step2({ currentStep, setCurrentStep, stepInformation }) {
  const [list] = useState([{ id: 1, text: 'تهران' }])

  //input handler
  const formik = useFormik({
    initialValues: {
      city: '1'
    },
    onSubmit: (values) => {
      setCurrentStep(currentStep + 1)
    },
  });


  return (
    <div className='text-sm font-medium pt-5'>
      <div className='mb-5'>
        در این مرحله شرایط و ضوابط ای سرویس را مطالعه می کنید در صورتی که آنها را تایید می کنید به مرحله بعد بروید.
      </div>

      <DynamicInputs
        inputType='dropDown'
        list={list}
        title='شهر'
        state="1"
        required={true}
        className="my-2 w-full mb-5"
        placeholder='به طور مثال : تهران'
        id='city'
        name='city'
        formik={formik}
      />

      <StepController
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        onsubmit={formik.submitForm}
        allSteps={stepInformation.length}
        lastStepTitle={'اضافه کردن سرویس'}
      />
    </div>
  )
}

export default Step2