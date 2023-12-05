import React, { useEffect, useState } from 'react'
// import * as Yup from "yup";
//components
import StepController from '../../_components/StepController'
import Loading from '@/src/app/_components/Loading';
//services
import getJob from '@/services/category_kg_local/getJob'
//redux
import { useSelector } from 'react-redux';

function Step4({ currentStep, setCurrentStep, stepInformation }) {
  const [loadingPage, setLoadingPage] = useState(true)
  const [selectedJob, setSelectedJob] = useState('')
  const [selectedTypeJob, setSelectedTypeJob] = useState('')
  const jobType = useSelector(state => state.staticVariable.type_job);

  const submitHandler = () => {
    localStorage.removeItem('services')
  }

  useEffect(() => {
    const services = JSON.parse(localStorage.getItem('services'))

    getJob()
      .then(res => {
        let selectedMyJob;
        res.data.data.forEach((item) => {
          item.id === services.job && (selectedMyJob = item)
        })

        let selectedType;
        jobType.forEach((item) => {
          item.id === services.requestType && (selectedType = item)
        })

        setSelectedTypeJob(selectedType.text)
        setSelectedJob(selectedMyJob.name)
      })
      .catch(() => {
      })
      .finally(() => {
        setLoadingPage(false)
      })
  }, [])

  return (
    <div className='text-sm font-medium pt-5'>
      {loadingPage && <Loading />}
      <div className='mb-5 w-full fcc font-medium text-base'>
        اطلاعات سرویس
      </div>
      <div className='fcc'>
        <div className='text-sm font-medium'>سرویس :</div>
        {selectedJob && <div className='text-primary-500 mr-2 font-bold text-sm'>{selectedJob}</div>}
      </div>
      <div className='fcc my-4'>
        <div className='text-sm font-medium'>نوع سرویس :</div>
        {selectedTypeJob && <div className='text-primary-500 mr-2 font-bold text-sm'>{selectedTypeJob}</div>}
      </div>
      {/* <div className='fcc'>
        <div className='text-sm font-medium'>مناطق کاری :</div>
        <div className='text-primary-500 mr-2 font-bold text-sm'>نقاشی</div>
      </div> */}

      <div className='w-full fcc mt-8 text-cf-300'>در صورت تایید اطلاعات بر روی دکمه زیر کلیک کنید.</div>

      <StepController
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        onsubmit={submitHandler}
        allSteps={stepInformation.length}
        lastStepTitle={'اضافه کردن سرویس'}
      />
    </div>
  )
}

export default Step4