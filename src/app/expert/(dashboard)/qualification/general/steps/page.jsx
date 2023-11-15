'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
//components
import Header from './_components/Header'
import StepController from '../../_components/StepController'
//react icons
import { HiOutlineBadgeCheck } from 'react-icons/hi'

function Page() {
  const [currentStep, setCurrentStep] = useState(0)
  const router = useRouter()
  const stepInformation = [
    {
      number: 1,
      title: 'قدم اول',
      description: 'اطلاعات اولیه'
    }, {
      number: 2,
      title: 'قدم دوم',
      description: 'تعیین حوزه فعالیت'
    }, {
      number: 3,
      title: 'قدم سوم',
      description: 'تعیین مناطق و شهر ها فعالیت'
    },
    {
      number: 4,
      title: 'قدم چهارم',
      description: 'تایید و ثبت نام'
    },
    {
      number: 5,
      title: 'قدم پنجم',
      description: 'تایید و ثبت نام'
    }
  ]

  const onsubmit = () => {
    if (currentStep < stepInformation.length) {
      setCurrentStep(currentStep + 1)
    } else {
      router.push('/expert/qualification/general/')
    }
  }

  return (
    <div className="flex w-full h-[calc(100vh-138px)] md:h-auto md:pb-[80px] lg:pb-0 lg:h-auto xl:h-[calc(100vh-152px)] rounded-lg bg-[#F8F9F9] flex-col items-center justify-start relative">
      <div className="overflow-y-scroll hideScroll w-full h-full flex flex-col scroll-smooth px-5 lg:px-0">
        <div className='py-5 md:px-5 md:bg-white rounded-lg flex flex-col w-full pb-5 md:mb-5'>
          <Header currentStep={currentStep} setCurrentStep={setCurrentStep} stepInformation={stepInformation} />
          {currentStep < stepInformation.length ?
            <div className='w-full fcc my-8'>from server</div>
            :
            <div className='fcc flex-col font-bold text-sm text-cf-300'>
              <div className='w-[80px] h-[80px] rounded-full bg-primary-100 fcc mt-5'>
                <HiOutlineBadgeCheck size={50} className='text-primary-500' />
              </div>
              <div className='mt-8 text-center'>
                احراز صلاحیت عمومی شما با موفقیت انجام شد و در انتظار برسی و تایید ادمین های ما قرار گرفت در صورت تایید سوالات شما از طرف ادمین های ما می توانید با اضافه کردن سرویس جدید و پاسخ به سوالات احراز صلاحیت مربوط به آن سرویس را برای خود فعال و سفارش های کاری مربوطه را بپذیرید.
              </div>
              <div className='mt-8 text-center'>
                برای ثبت نهایی بر روی دکمه زیر کلیک کنید.
              </div>
            </div>
          }
          <StepController
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            onsubmit={onsubmit}
            allSteps={stepInformation.length}
            lastStepTitle={'اتمام احراز صلاحیت عمومی'}
          />
        </div>
      </div>
    </div>
  )
}

export default Page