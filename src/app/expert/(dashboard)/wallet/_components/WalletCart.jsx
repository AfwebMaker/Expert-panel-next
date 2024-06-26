'use client'

import React, { useEffect, useState } from 'react'
//react icons
import { HiOutlineDownload, HiOutlineUpload } from "react-icons/hi";
//function 
import convertToJalali from '@/src/functions/convertToJalali'

function WalletCart({ title, style, date }) {
    const [styleTailwind, setStyleTailwind] = useState('')

    useEffect(() => {
        switch (style) {
            case 0:
                setStyleTailwind('red')
                break;
            case 1:
                setStyleTailwind('primary')
                break;
            default:
        }
    }, [style])

    return (
        <div className='border-b border-gray-200 px-5 pl-0 flex justify-between'>
            <div className='flex py-5'>
                <div>
                    <div className={`w-[44px] h-[44px] fcc rounded-full relative bg-${styleTailwind}-100`}>
                        {style === 0 ?
                            <HiOutlineUpload size={20} className={`text-${styleTailwind}-500`} /> :
                            <HiOutlineDownload size={20} className={`text-${styleTailwind}-500`} />
                        }
                    </div>
                </div>
                <div className='py-1 flex flex-col px-5'>
                    <div className='font-medium text-base'>{title}</div>
                    <div className='font-normal flex justify-start text-xs text-cf-300 mt-2'>
                        <span>{convertToJalali(date).date}</span>
                        <span className='mr-2 flex'>ساعت {convertToJalali(date).watch} </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WalletCart