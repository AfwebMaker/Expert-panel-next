import Link from 'next/link';
import { usePathname } from "next/navigation";
import React from 'react'
//scroll
import ScrollContainer from 'react-indiana-drag-scroll'
//react icon
import { HiOutlinePlusCircle, HiOutlineBriefcase, HiOutlineBadgeCheck } from 'react-icons/hi'

function MobileNavigation() {
  const pathName = usePathname();
  const navigation_data = [
    {
      id: 0,
      title: 'در انتظار تایید',
      link: '/expert/qualification/waiting'
    },
    {
      id: 1,
      title: 'تایید شده ها',
      link: '/expert/qualification/verified'
    },
    {
      id: 2,
      title: 'سوالات عمومی',
      link: '/expert/qualification/general'
    }
  ]

  return (
    <div className='block md:hidden bg-white w-full'>
      <div className='w-full py-6 fcc font-medium text- text-primary-500'>
        <div className='ml-2'>احراز صلاحیت</div>
        <HiOutlineBadgeCheck size={24} />
      </div>
      <div className='w-full flex justify-between font-bold text-xs px-5 mb-5'>
        <div className='fcc text-cf-300'>
          <HiOutlineBriefcase size={20} className='ml-1' />
          <span>سرویس های من</span>
        </div>
        <div className='fcc text-primary-500'>
          <span>اضافه کردن سرویس جدید</span>
          <HiOutlinePlusCircle size={20} className='mr-1' />
        </div>
      </div>
      <ScrollContainer className='scroll-container whitespace-nowrap' >
        <ul className='fcc font-bold text-sm border-b border-gray-400 w-full min-w-[370px]'>
          {navigation_data.map((item) => (
            <li key={item.id} className={`w-full h-full pb-[10px] fcc ${pathName === item.link ? 'border-b-[3px] border-primary-500' : ''}`}>
              <Link className='fcc px-2' href={item.link} >
                <div className='fcc align-middle'>
                  <div className={`text-cf-200 text-center fcc ${pathName === item.link ? 'text-primary-500' : ''}`}>
                    {item.title}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </ScrollContainer >
    </div>
  )
}

export default MobileNavigation