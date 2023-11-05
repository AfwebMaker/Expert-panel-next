import Link from 'next/link';
import { usePathname } from "next/navigation";
import React from 'react'
//scroll
import ScrollContainer from 'react-indiana-drag-scroll'

function MobileNavigation({ notificationNumber }) {
  const pathName = usePathname();
  const navigation_data = [
    {
      id: 0,
      title: "سفارشات جدید",
      notification: notificationNumber.newOrders,
      link: "/expert/services/new-orders",
    },
    {
      id: 1,
      title: "مناقصات",
      notification: notificationNumber.tenders,
      link: "/expert/services/tenders",
    },
    {
      id: 2,
      title: "سفارشات فعال",
      notification: notificationNumber.activeOrders,
      link: "/expert/services/active-orders",
    },
  ]

  return (
    <div className='block md:hidden bg-white'>
      <ScrollContainer className='scroll-container whitespace-nowrap' >
        <ul className='fcc font-bold text-sm border-b border-gray-400 w-full min-w-[370px]'>
          {navigation_data.map((item) => (
            <li key={item.id} className={`w-full h-full pb-[10px] fcc ${pathName === item.link ? 'border-b-[3px] border-primary-500' : ''}`}>
              <Link className='fcc px-2' href={item.link} >
                <div className='fcc align-middle'>
                  <div className={`text-cf-200 text-center fcc ${pathName === item.link ? 'text-primary-500' : ''}`}>
                    {item.title}
                  </div>
                  {!!item.notification &&
                    <div className='fcc mr-2 rounded-full bg-[#45b6492b] px-[6px] pb-[0.5px] pt-[2px] fcc text-primary-500 text-xs font-medium'>
                      {item.notification < 10 ? item.notification : 9 + '+'}
                    </div>
                  }
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