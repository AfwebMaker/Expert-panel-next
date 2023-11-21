import React from 'react'
// react icons
import { HiLocationMarker } from 'react-icons/hi'

function TitleBox({ title, address }) {
    return (
        <div className='bg-white lg:shadow-lg w-full h-[100px] p-5 border-b border-gray-300 lg:border-none lg:rounded-xl flex flex-col items-start justify-center gap-y-2'>
            <span className='font-bold w-full'>{title}</span>
            <div className='flex w-full items-center gap-x-2'>
                <HiLocationMarker className='text-primary-500 text-xl' />
                <span className='text-cf-300 text-xs'>{address}</span>
            </div>
        </div>
    )
}

export default TitleBox