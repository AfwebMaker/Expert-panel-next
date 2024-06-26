"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
//react icon
import { HiOutlineChevronRight } from 'react-icons/hi'
//components
import ResidentialForm from './_components/ResidentialForm'
//services
import profileBase from '@/src/services/person_kg_local/profileBase'

function Page() {
  const [formState, setFormState] = useState(1)

  //get data
  useEffect(() => {
    profileBase()
      .then(res => {
        setFormState(res.data.data.livingLocation)
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
              <div className='mr-1 text-cf-300 font-medium'>اطلاعات سکونتی</div>
            </Link>
          </div>
          <div>
            <div className='mb-5 font-medium text-sm text-cf-500 flex items-center justify-between'>
              <div>
                اطلاعات پایه سکونتی
              </div>
              <div
                onClick={() => { (formState === 0 || formState === 3) && setFormState(1) }}
                className={`${(formState === 0 || formState === 3) ? 'text-primary-500 cursor-pointer' : 'text-cf-300'} text-base font-bold`}
              >
                ویرایش
              </div>
            </div>
            <div className='font-normal text-xs text-cf-300'>
              اطلاعات سکونتی صرفا برای احراز هویت می باشد.
            </div>
          </div>
          <ResidentialForm formState={formState} setFormState={setFormState} />
        </div>
      </div>
    </div>
  )
}

export default Page