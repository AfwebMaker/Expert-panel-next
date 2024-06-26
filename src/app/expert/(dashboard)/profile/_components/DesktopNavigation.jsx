"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
//react icons
import {
  HiOutlineUser,
  HiExclamationCircle,
  HiBadgeCheck,
  HiOutlineCreditCard,
  HiOutlineOfficeBuilding,
  HiOutlineLockOpen
} from "react-icons/hi";
//services
import profileBase from '@/src/services/person_kg_local/profileBase'
import Loading from '@/src/app/_components/Loading';

function DesktopNavigation() {
  const [loadingPage, setLoadingPage] = useState(true)
  const [data, setData] = useState({})
  const pathName = usePathname()

  //get data
  useEffect(() => {
    profileBase()
      .then(res => {
        setData(res.data.data)
      })
      .catch(() => {
      })
      .finally(() => {
        setLoadingPage(false)
      })
  }, [])

  const navigation_data = [
    {
      id: 0,
      icon: <HiOutlineUser size={24} />,
      title: 'اطلاعات کاربری',
      description: 'اطلاعات شخصی شما',
      warning: data.background,
      link: '/expert/profile/Personal-Information'
    },
    {
      id: 1,
      icon: <HiOutlineCreditCard size={24} />,
      title: 'اطلاعات بانکی',
      description: 'اطلاعات مربوط به احراز بانکی',
      warning: data.bank,
      link: '/expert/profile/Bank-Information'
    },
    {
      id: 2,
      icon: <HiOutlineOfficeBuilding size={24} />,
      title: 'اطلاعات سکونتی',
      description: 'اطلاعات مربوط به محل زندگی',
      warning: data.livingLocation,
      link: '/expert/profile/Residential-Information'
    },
    {
      id: 3,
      icon: <HiOutlineLockOpen size={24} />,
      title: 'امنیت',
      description: 'رمز عبور و تنظیمات',
      warning: data.security,
      link: '/expert/profile/Password-Information'
    }
  ]

  return (
    <div className='hidden lg:block ml-5 xl:w-[350px] py-5 xl:py-0'>
      {loadingPage && <Loading />}
      <nav>
        <ul className='font-medium text-lg flex flex-wrap justify-between'>
          {navigation_data.map((item, index) => (
            <li key={item.id} className={`w-[49%] justify-between xl:w-[340px] flex items-center h-[85px] rounded-lg ${pathName === item.link ? 'bg-white' : ''}`}>
              <Link className='w-full flex justify-between items-center py-2 my-2 px-2 h-full' href={item.link} >
                <div className='flex items-center'>
                  <div className={`w-16 h-16 ml-5 ${pathName === item.link ? 'bg-[#F8F9F9] text-primary-500' : 'bg-white text-cf-400'} rounded-lg fcc`}>
                    {item.icon}
                  </div>
                  <div className={`${pathName === item.link ? 'text-primary-500' : 'text-cf-400'}`}>
                    <div>{item.title}</div>
                    <div className='font-normal text-sm'>{item.description}</div>
                  </div>
                </div>
                <div className='flex items-center'>
                  <div className='ml-2'>
                    {
                      item.warning ?
                        <HiExclamationCircle size={20} className='text-warning' /> :
                        <HiBadgeCheck size={20} className='text-primary-500' />
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