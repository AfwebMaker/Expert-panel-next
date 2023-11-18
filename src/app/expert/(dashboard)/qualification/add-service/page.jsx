'use client'

import React, { useState } from 'react'
//components
import Header from './_components/Header'
import Step1 from './_components/Step1'
import Step2 from './_components/Step2'
import Step3 from './_components/Step3'
//react icon 
import { HiOutlineChevronRight } from "react-icons/hi";
import Link from 'next/link'

function Page() {
  const [currentStep, setCurrentStep] = useState(0)
  const stepInformation = [
    {
      number: 1,
      title: 'قدم اول',
      description: 'انتخاب سرویس'
    }, {
      number: 2,
      title: 'قدم دوم',
      description: 'انتخاب مناطق کاری'
    }
  ]

  return (
    <div className="flex w-full h-[calc(100vh-138px)] md:h-auto md:pb-[80px] lg:pb-0 lg:h-auto xl:h-[calc(100vh-152px)] rounded-lg bg-[#F8F9F9] flex-col items-center justify-start relative">
      <div className="overflow-y-scroll hideScroll w-full h-full flex flex-col scroll-smooth px-5 lg:px-0">
        <div className='py-5 md:px-5 md:bg-white rounded-lg flex flex-col w-full pb-5 md:mb-5'>
          <Link href='/expert/qualification/general' className='font-medium md:hidden text-base text-cf-400 fcc justify-start mb-8'>
            <HiOutlineChevronRight size={18} className='ml-1' />
            احراز صلاحیت
          </Link>
          <Header currentStep={currentStep} setCurrentStep={setCurrentStep} stepInformation={stepInformation} />

          {currentStep === 0 &&
            <Step1 currentStep={currentStep} setCurrentStep={setCurrentStep} stepInformation={stepInformation} />
          }

          {currentStep === 1 &&
            <Step2 currentStep={currentStep} setCurrentStep={setCurrentStep} stepInformation={stepInformation} />
          }

          {currentStep === 2 &&
            <Step3 currentStep={currentStep} setCurrentStep={setCurrentStep} stepInformation={stepInformation} />
          }

        </div>
      </div>
    </div>
  )
}

export default Page