"use client"

import React, { useEffect } from 'react'
//components
import DesktopNavigation from './_components/DesktopNavigation'
//services
import profileBase from '@/src/services/person_kg_local/profileBase'

function RootLayout({ children }) {

    useEffect(() => {
        profileBase()
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                // console.log(error)
            })
    }, [])

    return (
        <div className='w-full fcc'>
            <div className='flex w-full max-w-[1605px] flex-col xl:flex-row xl:justify-center py-5 px-5 md:px-28 lg:px-5 xl:items-start'>
                <DesktopNavigation />
                {children}
            </div>
        </div>
    )
}

export default RootLayout