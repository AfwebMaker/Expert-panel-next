import React, { useEffect, useState } from 'react'
//formik
import { useFormik } from "formik";
import * as Yup from "yup";
//components
import DynamicInputs from '/src/app/_components/inputs/DynamicInputs'
import StepController from '../../_components/StepController'
//redux
import { useDispatch } from 'react-redux';
// import { loadingHandler } from '/src/redux/features/layout/layoutConfigSlice';

function Step2({ currentStep, setCurrentStep, stepInformation }) {
  const [jobList, setJobList] = useState(true);
  const dispatch = useDispatch();

  //input handler
  const formik = useFormik({
    initialValues: {
      city: "1"
    },
    onSubmit: (values) => {
      setCurrentStep(currentStep + 1)
    },
  });

  return (
    <div className='text-sm font-medium pt-5'>
      <div className='mb-5'>
        در این مرحله شهر و مناطقی که می خواهید در این ضمینه به شما کار ارجاع شود را انتخاب کنید.
      </div>
      {[{ id: 1, text: 'تهران' }].length &&
        <DynamicInputs
          inputType={'dropDown'}
          list={[{ id: 1, text: 'تهران' }]}
          title='شهر'
          state="1"
          required={true}
          className="my-2 w-full mb-5"
          placeholder='به طور مثال : تهران'
          id={'city'}
          name={'city'}
          formik={formik}
        />
      }

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