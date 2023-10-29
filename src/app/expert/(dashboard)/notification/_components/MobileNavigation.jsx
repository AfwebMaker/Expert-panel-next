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
      title: 'سفارشات',
      notification: notificationNumber.orders,
      link: '/expert/notification/orders'
    },
    {
      id: 1,
      title: 'سیستمی',
      notification: notificationNumber.messages,
      link: '/expert/notification/systemic'
    },
    {
      id: 2,
      title: 'مالی',
      notification: notificationNumber.finance,
      link: '/expert/notification/financial'
    },
    {
      id: 3,
      title: 'تیکت ها',
      notification: notificationNumber.tickets,
      link: '/expert/notification/tickets'
    }
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