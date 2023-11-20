import Image from 'next/image'
import React from 'react'
// react icons
import { HiDocumentText } from 'react-icons/hi'
// assets
import ladder_icon from "/public/images/dashboard/services/ladder.svg"
import meterage_icon from "/public/images/dashboard/services/meterage.svg"
import expert_icon from "/public/images/dashboard/services/expert.svg"

function BasicDescriptionBox({ serviceType, meterage, expertLevel }) {
    return (
        <div className='bg-white w-full p-5 rounded-xl flex flex-col items-start justify-center gap-y-2 mt-5'>
            <div className='flex w-full items-center gap-x-2'>
                <HiDocumentText className='text-primary-500 text-xl' />
                <span className='text-cf-300 text-xs'>توضیحات اولیه پروژه</span>
            </div>
            <div className='w-full flex flex-col gap-y-3 mt-7'>
                <div className='w-full h-[53px] flex items-center justify-start'>
                    <div className='h-full w-[53px] fcc'>
                        <Image alt='' src={ladder_icon} width={50} height={50} />
                    </div>
                    <span className='h-[30px] w-[2px] bg-cf-200 rounded-full flex mx-5'></span>
                    <div className='flex-col flex items-start justify-around text-sm h-full'>
                        <span>نوع سرویس</span>
                        <span className='text-cf-300'>{serviceType}</span>
                    </div>
                </div>
                <div className='w-full h-[53px] flex items-center justify-start'>
                    <div className='h-full w-[53px] fcc'>
                        <Image alt='' src={meterage_icon} width={50} height={50} />
                    </div>
                    <span className='h-[30px] w-[2px] bg-cf-200 rounded-full flex mx-5'></span>
                    <div className='flex-col flex items-start justify-around text-sm h-full'>
                        <span>متراژ پروژه</span>
                        <span className='text-cf-300'>{meterage}</span>
                    </div>
                </div>
                <div className='w-full h-[53px] flex items-center justify-start'>
                    <div className='h-full w-[53px] fcc'>
                        <Image alt='' src={expert_icon} width={50} height={50} />
                    </div>
                    <span className='h-[30px] w-[2px] bg-cf-200 rounded-full flex mx-5'></span>
                    <div className='flex-col flex items-start justify-around text-sm h-full'>
                        <span>سطح متخصص</span>
                        <span className='text-cf-300'>{expertLevel}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasicDescriptionBox