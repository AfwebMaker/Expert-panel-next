"use client"

import React from 'react'
//components
import DesktopNavigation from './_components/DesktopNavigation'

function RootLayout({ children }) {
    return (
        <div className='w-full fcc'>
            <div className='flex flex-col xl:flex-row xl:justify-center max-w-[1605px] w-full lg:px-5 xl:items-start xl:pt-5'>
                <DesktopNavigation />
                {children}
            </div>
        </div>
    )
}

export default RootLayout