import React from 'react'
import Image from 'next/image'
// react icons
import { HiLocationMarker, HiCalendar } from "react-icons/hi";

function DetailsCardActive({ avatar, name, address, startDate, startTime }) {

  return (
    <div className='w-full mt-3'>
      <div className='flex items-center gap-x-2 mb-3'>
        <div className='rounded-full h-6 w-6 overflow-hidden bg-white'>
          <Image alt='' src={avatar} />
        </div>
        <span className='text-cf-300 text-xs'>{name}</span>
      </div>
      <div className='flex items-center gap-x-2 mb-3'>
        <HiLocationMarker className='text-primary-500' size={20} />
        <span className='text-cf-300 text-xs'>{address}</span>
      </div>
      <div className='flex items-center gap-x-2 mb-3 text-xs'>
        <HiCalendar className='text-primary-500' size={20} />
        <span className='text-cf-300'>تاریخ شروع پروژه:</span>
        <div>
          <span>{startDate}</span>
          <span className='px-2'>-</span>
          <span>ساعت {startTime}</span>
        </div>
      </div>
    </div>
  )
}

export default DetailsCardActive;