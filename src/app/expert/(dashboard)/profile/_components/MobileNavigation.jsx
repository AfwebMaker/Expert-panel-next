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
//components
import Stars from '@/app/_components/Stars'

function mobileNavigation() {
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
    <div className='block lg:hidden'>
      <div className='w-full fcc flex-col'>
        <div className='w-[150px] h-[150px] bg-black rounded-full mb-5'>

        </div>
        <div className='font-bold flex-col fcc'>
          <div className='text-lg mb-2'>محمد جوادی</div>
          <div className='fcc mb-2'>
            <div className='text-sm text-primary-500'>وضعیت : </div>
            <div className='text-cf-300 font-medium text-sm fcc'>
              <div className='mx-1'>فعال</div>
              <div>
                {active ?
                  <HiCheckCircle size={16} className='text-primary-500' /> :
                  <HiXCircle size={16} className='text-warning' />
                }
              </div>
            </div>
          </div>
          <div className='fcc mb-2'>
            <div className='text-sm text-secondary-500'>امتیاز متخصص : </div>
            <div className='text-cf-300 font-medium text-sm fcc'>
              <Stars point={3} />
              {/* (متوسط) */}
            </div>
          </div>
        </div>

        <div className='w-full h-[2px] bg-cf-200 my-8'></div>
      </div>

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

export default mobileNavigation