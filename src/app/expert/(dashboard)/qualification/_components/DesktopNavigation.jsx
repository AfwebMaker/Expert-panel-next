"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
//react icons
import {
  HiOutlineUser,
  HiOutlineCreditCard,
  HiOutlineOfficeBuilding,
  HiPlus
} from "react-icons/hi";

function DesktopNavigation() {
  const [linkParts, setLinkParts] = useState([])
  const pathName = usePathname()

  useEffect(() => {
    setLinkParts(pathName.split('/'))
  }, [pathName])

  const navigation_data = [
    {
      id: 0,
      icon: <HiOutlineUser size={24} />,
      title: 'سوالات عمومی',
      description: 'سوالات مربوط به نظام وظیفه ، تحصیلات ، سلامت و روان و ...',
      link: '/expert/qualification/general/',
      slug: 'general'
    },
    {
      id: 1,
      icon: <HiOutlineCreditCard size={24} />,
      title: 'تایید شده ها',
      description: 'سرویس هایی که تعیین صلاحیت شما از طرف ادمین قبول شده.',
      link: '/expert/qualification/verified/',
      slug: 'verified'
    },
    {
      id: 2,
      icon: <HiOutlineOfficeBuilding size={24} />,
      title: 'در انتطار تایید',
      description: 'سرویس های در انتظار تایید از سمت ادمین می باشند.',
      link: '/expert/qualification/waiting/',
      slug: 'waiting'
    },
    {
      id: 3,
      icon: <HiOutlineOfficeBuilding size={24} />,
      title: 'اضافه کردن سرویس جدید',
      link: '/expert/qualification/add-service/',
      slug: 'add-service'
    }
  ]

  return (
    <div className="hidden md:block xl:ml-5 xl:w-[350px] px-5 lg:px-0 py-5 xl:py-0">
      <nav>
        <ul className="font-medium text-lg flex flex-wrap justify-between">
          {navigation_data.map((item, i) => (
            (navigation_data.length - 1 > i) ?
              <li
                key={item.id}
                className={`w-[49%] justify-between xl:w-[340px] flex items-center mb-2 h-[85px] rounded-lg ${linkParts.includes(item.slug) ? "bg-white" : ""
                  }`}
              >
                <Link
                  className={`w-full flex justify-between items-center py-2 px-2 h-full ${!(linkParts.includes('first-time') || linkParts.includes('steps')) ? '' : 'cursor-default'}`}
                  href={!(linkParts.includes('first-time') || linkParts.includes('steps')) ? item.link : '#'}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-16 h-16 ml-5 flex flex-shrink-0 ${linkParts.includes(item.slug)
                        ? "bg-[#F8F9F9] text-primary-500"
                        : (linkParts.includes('first-time') || linkParts.includes('steps'))
                          ? "bg-gray-100 text-cf-200"
                          : "bg-white"
                        } rounded-lg fcc`}
                    >
                      {item.icon}
                    </div>
                    <div
                      className={`${linkParts.includes(item.slug)
                        ? "text-primary-500"
                        : (linkParts.includes('first-time') || linkParts.includes('steps'))
                          ? "text-cf-300"
                          : "text-cf-400"
                        }`}
                    >
                      <div className='text-sm'>{item.title}</div>
                      <div className={`text-xs font-normal mt-1 ${linkParts.includes(item.slug) ? '' : 'text-cf-300'}`}>{item.description}</div>
                    </div>
                  </div>
                </Link>
              </li> :
              <li
                key={item.id}
                className={`w-[49%] fcc xl:w-[340px] flex items-center mb-2 h-[85px] rounded-lg ${!(linkParts.includes('first-time') || linkParts.includes('steps')) ? '' : 'hidden'}`}
              >
                <Link
                  className={`w-[65%] rounded-full fcc py-2 px-2 h-[40%] ${linkParts.includes(item.slug) ? "bg-gray-200" : "bg-primary-100"
                    }`}
                  href={!(linkParts.includes(item.slug)) ? item.link : '#'}
                >
                  <div className="flex items-center">
                    <div className={`fcc ${linkParts.includes(item.slug) ? "text-gray-500" : "text-primary-500"}`} >
                      <div className='text-sm'>{item.title}</div>
                      <HiPlus size={20} className='mr-2' />
                    </div>
                  </div>
                </Link>
              </li>
          ))}
        </ul>
      </nav>
    </div >
  )
}

export default DesktopNavigation