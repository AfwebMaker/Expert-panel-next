import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
//react icons 
import { HiTicket, HiBell, HiUserCircle, HiClipboardList, HiLogin } from 'react-icons/hi'
//functions
import Cookies from 'js-cookie'

function ProfileMobile({ profileMobileActive, data }) {
  const router = useRouter()

  return (
    <div className={`top-[138px] right-0 w-full h-[calc(100vh-138px)] absolute z-40 flex lg:hidden ${profileMobileActive ? 'flex' : 'hidden'}`}>
      <div className={`customScrollbar bg-white overflow-y-auto absolute h-full z-40 transition-all py-4 top-0 w-full ${profileMobileActive ? 'right-0' : 'right-[-100%]'} text-color-font-2`}>
        <div className='w-full fcc flex-col text-cf-300'>
          <div className='w-[100px] h-[100px] bg-black rounded-full overflow-hidden'></div>
          <div className='my-3'>{data.firstName} {data.lastName}</div>
          {data.personUser_Child && <div>{"0" + data.personUser_Child.mobile}</div>}
        </div>

        <ul className='w-full flex items-start justify-center flex-col bg-white text-sm py-2 my-5 text-gray-700'>
          <li className='flex'>
            <Link href='/expert/tickets' className='px-4 py-4 font-medium text-sm flex'>
              <HiTicket className='ml-2' size={20} />
              پشتیبانی (تیکت ها)
            </Link>
          </li>
          <li>
            <Link href='/expert/notification/orders' className='px-4 py-4 font-medium text-sm flex'>
              <HiBell className='ml-2' size={20} />
              اعلان ها
            </Link>
          </li>
        </ul>
        <span className='w-[90%] h-px bg-gray-300 flex m-auto my-4 font-medium text-sm'></span>
        <ul className='w-full flex items-start justify-center flex-col bg-white text-sm py-2 my-5 text-gray-700'>
          <li className='flex'>
            <Link href='/expert/profile' className='px-4 py-4 font-medium text-sm flex'>
              <HiUserCircle className='ml-2' size={20} />
              پروفایل کاربری
            </Link>
          </li>
          <li>
            <Link href='' className='px-4 py-3 font-medium text-sm flex'>
              <HiBell className='ml-2' size={20} />
              مدیریت سفارشات
            </Link>
          </li>
          <li>
            <Link href='' className='px-4 py-3 font-medium text-sm flex'>
              <HiClipboardList className='ml-2' size={20} />
              گزارش سفارشات
            </Link>
          </li>
          <li>
            <button onClick={() => { Cookies.remove('TOKEN'); router.push('/expert/login') }} href='' className='px-4 py-3 font-medium text-sm flex'>
              <HiLogin className='ml-2 text-red-500' size={20} />
              خروج از حساب کاربری
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProfileMobile