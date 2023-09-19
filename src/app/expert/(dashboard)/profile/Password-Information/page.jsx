import React from 'react'
import Link from 'next/link'
//react icon
import { HiOutlineChevronRight } from 'react-icons/hi'
//components
import PasswordForm from './_components/PasswordForm'

function page() {
  return (
    <div className='py-5 lg:px-5 lg:bg-white rounded-lg flex flex-col w-full xl:max-w-[1000px]'>
      <div className='flex items-center justify-between mb-10 lg:hidden'>
        <Link href='/expert/profile/' className='fcc'>
          <HiOutlineChevronRight className='text-cf-400' />
          <div className='mr-1 text-cf-300 font-medium'>امنیت</div>
        </Link>
      </div>
      <div>
        <div className='mb-5 font-medium text-sm text-cf-500 flex items-center justify-between'>
          <div>
            تغییر رمز عبور
          </div>
        </div>
        <div className='font-normal text-xs text-cf-300'>
          <ul className='list-disc flex flex-col mr-5'>
            <li className='mb-2'>
              کلمه عبور باید حداقل از ۸ کاراکتر تشکیل شده باشد.
            </li>
            <li>
              رمز عبور میبایست ترکیبی از حروف، اعداد و کاراکترهای خاص (نمادها) باشد. (به طور مثال : !@#$%...)
            </li>
          </ul>
        </div>
      </div>

      <PasswordForm />
    </div>
  )
}

export default page