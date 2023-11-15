'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
//components
import Header from './_components/Header'
import Step1 from './_components/Step1'
import Step2 from './_components/Step2'

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
          <Header currentStep={currentStep} setCurrentStep={setCurrentStep} stepInformation={stepInformation} />

          {currentStep === 0 &&
            <Step1 currentStep={currentStep} setCurrentStep={setCurrentStep} stepInformation={stepInformation} />
          }

          {currentStep === 1 &&
            <Step2 currentStep={currentStep} setCurrentStep={setCurrentStep} stepInformation={stepInformation} />
          }

          {currentStep === 2 &&
            <Step1 currentStep={currentStep} setCurrentStep={setCurrentStep} stepInformation={stepInformation} />
          }

        </div>
      </div>
    </div>
  )
}

export default Page