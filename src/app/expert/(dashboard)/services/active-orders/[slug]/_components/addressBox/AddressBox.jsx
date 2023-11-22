import React, { useState } from 'react'
import Link from 'next/link'
// components
import dynamic from "next/dynamic";
const CustomMap = dynamic(() => import("./CustomMap"), { loading: () => <p>درحال بارگذاری نقشه...</p>, ssr: false, },);
// react icons
import { HiMap, HiLink, HiLocationMarker } from 'react-icons/hi'

function AddressBox({ address, mapLocation }) {

    return (
        <div className='bg-white w-full h-full p-5 lg:rounded-xl flex flex-col items-start justify-center gap-y-2 lg:shadow-lg'>
            <div className='flex w-full items-center gap-x-2 mb-5'>
                <HiMap className='text-primary-500 text-xl' />
                <span className='text-cf-300 text-xs'>آدرس و محل پروژه</span>
            </div>
            <div className='flex items-center justify-start w-full gap-x-2'>
                <HiLink size={20} className='text-primary-500 font-bold' />
                <span className='text-cf-500 font-bold'>آدرس</span>
                <span>:</span>
                <Link href={"#"} className='text-sm text-cf-300 hover:text-primary-500 transition-all duration-300 cursor-pointer'>
                    {address}
                </Link>
            </div>
            <div className='mt-5 w-full'>
                <div className='flex items-center justify-start w-full gap-x-2 mr-2'>
                    <HiLocationMarker size={20} className='text-primary-500 font-bold' />
                    <span className='text-sm font-bold text-cf-300'>لوکیشن :</span>
                </div>
                <CustomMap mapLocation={mapLocation} />
            </div>
        </div>
    )
}

export default AddressBox