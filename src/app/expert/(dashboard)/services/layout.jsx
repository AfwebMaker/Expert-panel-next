"use client"

import React, { useEffect, useState } from 'react'
//react icons
import { HiOutlineClipboardList, HiHome, HiOutlineChevronLeft } from 'react-icons/hi'
//components
import DesktopNavigation from './_components/DesktopNavigation'
import MobileNavigation from './_components/MobileNavigation'
//services
import newNotification from '@/src/services/notification_kg_local/newNotification'

function RootLayout({ children }) {
    const [notificationNumber, setNotificationNumber] = useState({
        newOrders: 0,
        tenders: 0,
        activeOrders: 0,
    })

    //get notifications number
    useEffect(() => {
        newNotification()
            .then((res) => {
                res.data.data.results.forEach((item) => {
                    switch (item.tab) {
                        case 0:
                            setNotificationNumber(notificationNumber => {
                                return { ...notificationNumber, newOrders: notificationNumber.newOrders + 1 }
                            })
                            break;
                        case 1:
                            setNotificationNumber(notificationNumber => {
                                return { ...notificationNumber, tenders: notificationNumber.tenders + 1 }
                            })
                            break;
                        case 2:
                            setNotificationNumber(notificationNumber => {
                                return { ...notificationNumber, activeOrders: notificationNumber.activeOrders + 1 }
                            })
                            break;
                        default:
                    }

                })
            })
            .catch(() => {

            })
            .finally(() => {

            })
    }, [])

    return (
        <div className='w-full fcc flex-col'>
            <div className='hidden w-full max-w-[1605px] pr-5 pt-5 xl:pb-5 lg:flex justify-start items-center font-medium text-base'>
                <HiHome size={18} className='h-full' />
                <HiOutlineChevronLeft className='mx-2 h-full' size={15} />
                <div className='ml-2 h-full'>سفارشات</div>
            </div>

            <div className='flex flex-col xl:flex-row xl:justify-center max-w-[1605px] w-full lg:px-5 xl:items-start'>
                <div className='bg-white py-10 lg:hidden fcc text-primary-500 font-medium text-lg'>
                    <div className='ml-2'>سفارشات</div>
                    <HiOutlineClipboardList size={24} />
                </div>
                
                <MobileNavigation notificationNumber={notificationNumber} />
                <DesktopNavigation notificationNumber={notificationNumber} />
                {children}
            </div>
        </div>

    )
}

export default RootLayout