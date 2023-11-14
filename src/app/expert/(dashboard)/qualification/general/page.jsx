'use client'

import React from 'react'
//components
import Cart from '../_components/forms'
import MainMobileNavigation from '../_components/MainMobileNavigation'
//react icons
import { HiOutlineCollection } from 'react-icons/hi'

function Page() {
  return (
    <div className="flex w-full h-[calc(100vh-138px)] md:h-auto md:pb-[80px] lg:pb-0 lg:h-auto xl:h-[calc(100vh-152px)] rounded-lg bg-[#F8F9F9] flex-col items-center justify-start relative">
      <MainMobileNavigation />
      <div className="overflow-y-scroll hideScroll w-full h-full flex flex-col scroll-smooth px-5 lg:px-0">
        <div className='py-5 md:px-5 md:bg-white rounded-lg flex flex-col w-full pb-5 md:mb-5'>
          <div className='w-full text-primary-500 mb-8 hidden md:fcc'>
            سوالات عمومی احراز صلاحیت
            <HiOutlineCollection size={24} className='mr-2 font-bold text-lg' />
          </div>
          <div className='text-sm font-bold'>سوالات عمومی تایید صلاحیت شده</div>
          <div className='text-cf-300 font-medium text-xs my-3'>
            در صورتی که شما در این بخش به تمامی فرم ها پاسخ داده باشید و مورد تایید ما باشد  ادمین های ما آنرا تایید کرده باشند می توانید سرویس جدید اضافه کنید و به سوالات تخصصی صلاحیت هر کدام پاسخ دهید.
          </div>
          <Cart />
        </div>
      </div>
    </div>
  )
}

export default Page