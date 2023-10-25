"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
//react icon
import { HiOutlineChevronRight } from 'react-icons/hi'
//components
import BankForm from './_components/BankForm'
//services
import profileBase from '@/src/services/person_kg_local/profileBase'

function page() {
  const [formState, setFormState] = useState(1)

  //get form state
  useEffect(() => {
    //get form state
    profileBase()
      .then(res => {
        setFormState(res.data.data.bank)
      })
      .catch(() => {
      })
  }, [])

  return (
    <div className="w-full h-[calc(100vh-138px)] lg:h-auto xl:h-[calc(100vh-110px)] rounded-lg bg-[#F8F9F9] flex flex-col items-center justify-start relative">
      <div className="overflow-y-scroll hideScroll w-full h-full flex flex-col scroll-smooth px-5 lg:px-0">
        <div className='py-5 lg:px-5 lg:bg-white rounded-lg flex flex-col w-full pb-5 lg:mb-5'>
          <div className='flex items-center justify-between mb-10 lg:hidden'>
            <Link href='/expert/profile/' className='fcc'>
              <HiOutlineChevronRight className='text-cf-400' />
              <div className='mr-1 text-cf-300 font-medium'>اطلاعات بانکی</div>
            </Link>
          </div>
          <div>
            <div className='mb-5 font-medium text-sm text-cf-500 flex items-center justify-between'>
              <div>
                اطلاعات حساب
              </div>
              <div
                onClick={() => { (formState === 0 || formState === 3) && setFormState(1) }}
                className={`${(formState === 0 || formState === 3) ? 'text-primary-500 cursor-pointer' : 'text-cf-300'} text-base font-bold`}
              >
                ویرایش
              </div>
            </div>
            <div className='font-normal text-xs text-cf-300'>
              شبا یک کد 24 رقمی است که به هر حساب بانکی شما به صورت اختصاص تعلق دارد. هر حساب دارای یک شماره منحصر به فرد است و طبق استانداردهای بین المللی در شماره حساب بانکی درج می شود.
            </div>
          </div>

          <BankForm formState={formState} setFormState={setFormState} />
        </div>
      </div>
    </div>
  )
}

export default page