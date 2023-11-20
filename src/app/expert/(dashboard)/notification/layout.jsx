"use client"

import React, { useEffect, useState } from 'react'
//react icons
import { HiOutlineBell } from 'react-icons/hi'
import { HiHome } from 'react-icons/hi'
import { HiOutlineChevronLeft } from 'react-icons/hi'
//components
import DesktopNavigation from './_components/DesktopNavigation'
import MobileNavigation from './_components/MobileNavigation'
//services
import newNotification from '/src/services/notification_kg_local/newNotification'

function RootLayout({ children }) {
    const [notificationNumber, setNotificationNumber] = useState({
        orders: 0,
        tickets: 0,
        finance: 0,
        messages: 0,
    })

    //get notifications number
    useEffect(() => {
        newNotification()
            .then((res) => {
                res.data.data.results.forEach((item) => {
                    switch (item.tab) {
                        case 0:
                            setNotificationNumber(notificationNumber => {
                                return { ...notificationNumber, orders: notificationNumber.orders + 1 }
                            })
                            break;
                        case 1:
                            setNotificationNumber(notificationNumber => {
                                return { ...notificationNumber, tickets: notificationNumber.tickets + 1 }
                            })
                            break;
                        case 2:
                            setNotificationNumber(notificationNumber => {
                                return { ...notificationNumber, finance: notificationNumber.finance + 1 }
                            })
                            break;
                        case 3:
                            setNotificationNumber(notificationNumber => {
                                return { ...notificationNumber, messages: notificationNumber.messages + 1 }
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
                <HiHome size={20} />
                <HiOutlineChevronLeft className='mx-2' size={15} />
                <div className='ml-2'>اعلان ها </div>
            </div>

            <div className='flex flex-col xl:flex-row xl:justify-center max-w-[1605px] w-full lg:px-5 xl:items-start'>
                <div className='bg-white py-10 lg:hidden fcc text-primary-500 font-medium text-lg'>
                    <div className='ml-2'>اعلان ها</div>
                    <HiOutlineBell size={24} />
                </div>

                <MobileNavigation notificationNumber={notificationNumber} />
                <DesktopNavigation notificationNumber={notificationNumber} />
                {children}
            </div>
        </div>

    )
}

export default RootLayout