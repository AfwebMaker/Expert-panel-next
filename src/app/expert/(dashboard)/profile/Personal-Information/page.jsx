import React from 'react'
import Link from 'next/link'
//react icon
import { HiPencilAlt, HiOutlineChevronRight } from 'react-icons/hi'
//components
import Forms from './_components/Forms'

function page() {
  return (
    <div className='py-5 lg:px-5 lg:bg-white rounded-lg flex flex-col w-full'>
      <div className='flex items-center justify-between mb-10 lg:hidden'>
        <Link href='/expert/profile/' className='fcc'>
          <HiOutlineChevronRight className='text-cf-400' />
          <div className='mr-1 text-cf-300 font-medium'>تنظیمات</div>
        </Link>
      </div>
      <div className='w-full fcc flex-col mb-10'>
        <div className='bg-black w-[150px] h-[150px] rounded-full mb-5'>

        </div>
        <div className='fcc text-primary-500'>
          <div className='ml-1'>
            <HiPencilAlt />
          </div>
          <div className='font-medium text-sm'>ویرایش عکس پروفایل</div>
        </div>
      </div>

      <Forms />

    </div>
  )
}

export default page