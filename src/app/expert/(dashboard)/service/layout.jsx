"use client"

import React, { useEffect, useState } from 'react'
//react icons
import { HiOutlineClipboardList, HiHome, HiOutlineChevronLeft } from 'react-icons/hi'


function RootLayout({ children }) {

    return (
        <div className="lg:px-5 lg:pt-5">
            <div className="w-full h-[30px] hidden md:fcc mb-5">
                <div className="w-full h-full max-w-[1605px] flex items-center">نماینده من</div>
            </div>
            <div className="fcc">
                <div className="flex w-full max-w-[1605px] flex-col xl:flex-row xl:justify-center md:px-4 lg:px-0 xl:items-start">
                    {children}
                    {/* {React.cloneElement(children, { data })} */}
                </div>
            </div>
        </div>

    )
}

export default RootLayout