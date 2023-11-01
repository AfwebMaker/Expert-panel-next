import Link from 'next/link'
import React from 'react'
//react icon
import { HiOutlineBadgeCheck, HiBadgeCheck } from 'react-icons/hi'

function Page() {
  return (
    <div className="flex w-full h-[calc(100vh-138px)] md:h-auto md:pb-[80px] lg:pb-0 lg:h-auto xl:h-[calc(100vh-152px)] rounded-lg bg-[#F8F9F9] flex-col items-center justify-start relative">
      <div className="overflow-y-scroll hideScroll w-full h-full flex flex-col scroll-smooth px-5 lg:px-0">
        <div className='py-5 md:px-5 md:bg-white rounded-lg flex flex-col w-full pb-5 md:mb-5'>
          <div className='w-full fcc mb-10 flex-col'>
            <div className='bg-green-100 h-[80px] w-[80px] rounded-full fcc'>
              <HiOutlineBadgeCheck size={50} className='text-primary-500' />
            </div>
            <div className='text-primary-500 mt-4 text-lg font-bold'>احراز صلاحیت</div>
          </div>
          <div className='mb-10 font-bold text-sm'>
            برای احراز صلاحیت شما باید ابتدا به یک سری سوالات اولیه و عمومی پاسخ دهید برای احراز صلاحیت و پاسخ سوالات اولیه بر روی دکمه (شروع احراز صلاحیت) کلیک کنید.
          </div>
          <div className='mb-10 font-medium text-sm text-cf-300'>
            صورتی که شما برای اولین بار وارد سیستم شده اید باید برای دریافت سفارشات پس از احراز هویت، در سرویس های مدنظرتان احراز صلاحیت شوید.
          </div>
          <div className='mb-10 font-medium text-sm text-cf-300'>
            احراز صلاحیت شامل تعدادی سوال برای سنجش صلاحیت شما برای سرویس های دریافتی است.
          </div>

          <div className='w-full fcc'>
            <Link href='/expert/qualification/general/steps/' className='w-[167px] h-[38px] bg-green-100 text-primary-500 rounded-md font-medium text-sm fcc'>
              شروع احراز صلاحیت
              <HiBadgeCheck size={20} className='mr-2' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page