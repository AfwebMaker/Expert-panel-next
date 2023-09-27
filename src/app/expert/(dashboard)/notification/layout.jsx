import React from 'react'
//react icons
import { HiOutlineBell } from 'react-icons/hi'
import { HiHome } from 'react-icons/hi'
import { HiOutlineChevronLeft } from 'react-icons/hi'
//components
import DesktopNavigation from './_components/DesktopNavigation'
import MobileNavigation from './_components/MobileNavigation'

function RootLayout({ children }) {
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
                <MobileNavigation />

                <DesktopNavigation />
                {children}
            </div>
        </div>

    )
}

export default RootLayout