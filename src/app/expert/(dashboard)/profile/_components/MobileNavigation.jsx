import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
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
//components
import Stars from '@/app/_components/Stars'
//services
import profileBase from '@/src/services/person_kg_local/profileBase'

function mobileNavigation() {
  const [data, setData] = useState({})

  //get data
  useEffect(() => {
    profileBase()
      .then(res => {
        setData(res.data.data)
      })
      .catch(error => {
        // console.log(error)
      })
  }, [])

  const navigation_data = [
    {
      id: 0,
      icon: <HiOutlineUser size={24} className='text-primary-500' />,
      title: 'اطلاعات کاربری',
      warning: data.background,
      link: '/expert/profile/Personal-Information'
    },
    {
      id: 1,
      icon: <HiOutlineCreditCard size={24} className='text-primary-500' />,
      title: 'اطلاعات بانکی',
      warning: data.bank,
      link: '/expert/profile/Bank-Information'
    },
    {
      id: 2,
      icon: <HiOutlineOfficeBuilding size={24} className='text-primary-500' />,
      title: 'اطلاعات سکونتی',
      warning: data.livingLocation,
      link: '/expert/profile/Residential-Information'
    },
    {
      id: 3,
      icon: <HiOutlineLockOpen size={24} className='text-primary-500' />,
      title: 'امنیت',
      warning: data.security,
      link: '/expert/profile/Password-Information'
    }
  ]

  return (
    <div className='block lg:hidden pb-[80px]'>
      <div className='w-full fcc flex-col'>
        <div className='w-[150px] h-[150px] rounded-full mb-5 overflow-hidden relative'>
          <Image
            src={data.avatar ? data.avatar : "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"}
            alt="sample image"
            fill={true}
            className='object-cover'
          />
        </div>
        <div className='font-bold flex-col fcc'>
          <div className='text-lg mb-2'>{data.name} {data.family}</div>
          <div className='fcc mb-2'>
            <div className='text-sm text-primary-500'>وضعیت : </div>
            <div className='text-cf-300 font-medium text-sm fcc'>
              <div className='mx-1'>{data.isActive ? 'فعال' : 'غیر فعال'}</div>
              <div>
                {data.isActive ?
                  <HiCheckCircle size={16} className='text-primary-500' /> :
                  <HiXCircle size={16} className='text-warning' />
                }
              </div>
            </div>
          </div>
          <div className='fcc mb-2'>
            <div className='text-sm text-secondary-500'>امتیاز متخصص : </div>
            <div className='text-cf-300 font-medium text-sm fcc'>
              <Stars point={data.score ? data.score : 0} />
              {/* (متوسط) */}
            </div>
          </div>
        </div>

        <div className='w-full h-[2px] bg-cf-200 my-8'></div>
      </div>

      <nav>
        <ul className='font-medium text-lg'>
          {navigation_data.map((item, index) => (
            <li key={item.id} className='w-full'>
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
                        item.warning === 0 ? <HiBadgeCheck size={20} className='text-primary-500' /> : ''
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

export default mobileNavigation