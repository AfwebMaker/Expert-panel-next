import Image from 'next/image'
import React, { useState } from 'react'
// react icons
import { HiUser, HiPhone } from 'react-icons/hi'
// assets
import ladder_icon from "@/public/images/dashboard/services/ladder.svg"
// components
import LoadingBox from "@/app/_components/LoadingBox"


function ContractorBox({ serviceType }) {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <div className='bg-white lg:shadow-lg w-full lg:mt-5 p-5 border-b border-gray-300 lg:border-none lg:rounded-xl flex flex-col items-start justify-center gap-y-2'>
            {
                isLoading ?
                    (
                        <LoadingBox />
                    )
                    :
                    (
                        <>
                            <div className='flex w-full items-center gap-x-2'>
                                <HiUser className='text-primary-500 text-xl' />
                                <span className='text-cf-300 text-base'>مشخصات پیمانکار</span>
                            </div>
                            <div className='w-full flex items-start justify-center flex-col gap-y-3 mt-3'>
                                <div className='w-full flex items-center justify-start gap-x-5'>
                                    <div className='h-20 w-20 fcc rounded-lg fcc overflow-hidden bg-slate-200'>
                                        <Image alt='' src={ladder_icon} width={50} height={50} />
                                    </div>
                                    <div className='flex flex-col gap-y-2 text-sm'>
                                        <div className='flex flex-wrap items-center justify-start w-full gap-1'>
                                            <span className='text-cf-500 font-bold'>نام و نام خانوادگی :</span>
                                            <span className='text-cf-300'>سید میثاق حمزه زاده موسوی</span>
                                        </div>
                                        <div className='flex flex-wrap items-center justify-start w-full gap-x-1'>
                                            <span className='text-cf-500 font-bold'>شماره تماس :</span>
                                            <span className='text-cf-300'>۰۹۱۰۱۲۱٤۸٦۳</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-11 fcc mt-3'>
                                <div className='transition-all duration-300 h-full bg-primary-500 hover:bg-primary-600 cursor-pointer text-white rounded-lg fcc w-full fcc gap-x-2 text-sm'>
                                    <span>تماس با پیمانکار</span>
                                    <HiPhone size={20} />
                                </div>
                            </div>
                        </>
                    )
            }

        </div>
    )
}

export default ContractorBox