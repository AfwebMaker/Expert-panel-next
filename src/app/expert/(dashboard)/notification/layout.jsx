import React from 'react'
//react icons
import { HiOutlineBell } from 'react-icons/hi'
//components
import DesktopNavigation from './_components/DesktopNavigation'
import MobileNavigation from './_components/MobileNavigation'

function RootLayout({ children }) {
    return (
        <div className='flex flex-col xl:flex-row xl:justify-center md:px-28 lg:px-5 xl:items-start'>
            <div className='bg-white'>
                <div className='lg:hidden my-10 fcc text-primary-500 font-medium text-lg'>
                    <div className='ml-2'>اعلان ها</div>
                    <HiOutlineBell size={24} />
                </div>
                <MobileNavigation />
            </div>

            <DesktopNavigation />
            {children}
        </div>
    )
}

export default RootLayout