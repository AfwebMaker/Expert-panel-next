"use client"

import React from 'react'

function RootLayout({ children }) {
    return (
        <div className='w-full fcc'>
            <div className='flex flex-col xl:flex-row xl:justify-center max-w-[1605px] w-full lg:px-5 xl:items-start pt-5'>
                {children}
            </div>
        </div>
    )
}

export default RootLayout