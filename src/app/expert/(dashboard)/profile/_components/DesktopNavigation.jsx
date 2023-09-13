"use client"

import Link from 'next/link';
import React, { useState } from 'react'
//react icons
import {
  HiOutlineUser,
  HiExclamationCircle,
  HiBadgeCheck,
  HiOutlineCreditCard,
  HiOutlineOfficeBuilding,
  HiOutlineLockOpen
} from "react-icons/hi";

function DesktopNavigation() {
  const [activeId, setActiveId] = useState(0)
  const navigation_data = [
    {
      id: 0,
      icon: <HiOutlineUser size={24} />,
      title: 'اطلاعات کاربری',
      description: 'اطلاعات شخصی شما',
      warning: false,
      link: '/expert/profile/Personal-Information'
    },
    {
      id: 1,
      icon: <HiOutlineCreditCard size={24} />,
      title: 'اطلاعات بانکی',
      description: 'اطلاعات مربوط به احراز بانکی',
      warning: false,
      link: '/expert/profile/Bank-Information'
    },
    {
      id: 2,
      icon: <HiOutlineOfficeBuilding size={24} />,
      title: 'اطلاعات سکونتی',
      description: 'اطلاعات مربوط به محل زندگی',
      warning: false,
      link: '/expert/profile/Residential-Information'
    },
    {
      id: 3,
      icon: <HiOutlineLockOpen size={24} />,
      title: 'امنیت',
      description: 'رمز عبور و تنظیمات',
      warning: true,
      link: '/expert/profile/Password-Information'
    }
  ]

  return (
    <div className='hidden lg:block ml-5 xl:w-[350px] py-5 xl:py-0'>
      <nav>
        <ul className='font-medium text-lg flex flex-wrap justify-between'>
          {navigation_data.map((item, index) => (
            <li onClick={() => {setActiveId(item.id)}} key={item.id} className={`w-[49%] justify-between xl:w-[340px] flex items-center h-[85px] rounded-lg ${item.id === activeId ? 'bg-white' : ''}`}>
              <Link className='w-full flex justify-between items-center py-2 my-2 px-2 h-full' href={item.link} >
                <div className='flex items-center'>
                  <div className={`w-16 h-16 ml-5 ${item.id === activeId ? 'bg-[#F8F9F9] text-primary-500' : 'bg-white text-cf-400'} rounded-lg fcc`}>
                    {item.icon}
                  </div>
                  <div className={`${item.id === activeId ? 'text-primary-500' : 'text-cf-400'}`}>
                    <div>{item.title}</div>
                    <div className='font-normal text-sm'>{item.description}</div>
                  </div>
                </div>
                <div className='flex items-center'>
                  <div className='ml-2'>
                    {
                      item.warning ? <HiExclamationCircle size={20} className='text-warning' /> :
                        index === 2 ? <HiBadgeCheck size={20} className='text-primary-500' /> : ''
                    }
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