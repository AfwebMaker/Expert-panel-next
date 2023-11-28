"use client"

import React from 'react'
//components
import DesktopNavigation from './_components/DesktopNavigation'
//react icons
import { HiHome, HiOutlineChevronLeft } from 'react-icons/hi'

function RootLayout({ children }) {
    return (
        <div className='w-full fcc flex-col'>
            <div className='hidden w-full max-w-[1605px] pr-5 pt-5 xl:pb-5 lg:flex justify-start items-center font-medium text-base'>
                <HiHome size={20} />
                <HiOutlineChevronLeft className='mx-2' size={15} />
                <div className='ml-2'>احراز صلاحیت</div>
            </div>

            <div className='flex flex-col xl:flex-row xl:justify-center max-w-[1605px] w-full lg:px-5 xl:items-start'>
                <DesktopNavigation />
                {children}
            </div>
        </div>
    )
}

export default RootLayout