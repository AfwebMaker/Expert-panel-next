import Link from 'next/link';
import React from 'react'
//react icons
import {
  HiOutlineUser,
  HiOutlineChevronLeft,
  HiExclamationCircle,
  HiBadgeCheck,
  HiCheckCircle,
  HiXCircle,
  HiOutlineCreditCard,
  HiOutlineOfficeBuilding,
  HiOutlineLockOpen
} from "react-icons/hi";

function DesktopNavigation() {
  const active = true
  const navigation_data = [
    {
      icon: <HiOutlineUser size={24} className='text-primary-500' />,
      title: 'اطلاعات کاربری',
      warning: false,
      link: '/expert/profile/Personal-Information'
    },
    {
      icon: <HiOutlineCreditCard size={24} className='text-primary-500' />,
      title: 'اطلاعات بانکی',
      warning: false,
      link: '/expert/profile/Bank-Information'
    },
    {
      icon: <HiOutlineOfficeBuilding size={24} className='text-primary-500' />,
      title: 'اطلاعات سکونتی',
      warning: false,
      link: '/expert/profile/Residential-Information'
    },
    {
      icon: <HiOutlineLockOpen size={24} className='text-primary-500' />,
      title: 'امنیت',
      warning: true,
      link: '/expert/profile/Password-Information'
    }
  ]

  return (
    <div className='hidden md:block'>
      <nav>
        <ul className='font-medium text-lg'>
          {navigation_data.map((item, index) => (
            <li className='w-full'>
              <Link className='flex justify-between items-center py-2 my-2 px-2' href={item.link} >
                <div className='flex items-center'>
                  <div className='ml-2'>
                    {item.icon}
                  </div>
                  <div className='text-cf-300'>
                    {item.title}
                  </div>
                </div>
                <div className='flex items-center'>
                  <div className='ml-2'>
                    {
                      item.warning ? <HiExclamationCircle size={20} className='text-warning' /> :
                        index === 2 ? <HiBadgeCheck size={20} className='text-primary-500' /> : ''
                    }
                  </div>
                  <div>
                    <HiOutlineChevronLeft size={24} className='text-slate-600' />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default DesktopNavigation