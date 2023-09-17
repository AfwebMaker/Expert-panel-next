import React from 'react'
import Link from 'next/link'
//react icon
import { HiOutlineChevronRight } from 'react-icons/hi'
//components
import BankForm from './_components/BankForm'

function page() {
  return (
    <div className='py-5 lg:px-5 lg:bg-white rounded-lg flex flex-col w-full xl:max-w-[1000px]'>
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
          <div className='text-primary-500 cursor-pointer text-base font-bold'>
            ویرایش
          </div>
        </div>
        <div className='font-normal text-xs text-cf-300'>
          شبا یک کد ۲٦ رقمی است که به هر حساب بانکی شما به صورت اختصاص تعلق دارد. هر حساب دارای یک شماره منحصر به فرد است و طبق استانداردهای بین المللی در شماره حساب بانکی درج می شود.
        </div>
      </div>

      <BankForm />
    </div>
  )
}

export default page