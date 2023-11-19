import React, { useState } from 'react'
//components
import TimerDown from "../../../../../_components/TimerDown"
// react icons
import { HiLocationMarker, HiSpeakerphone, HiClock } from "react-icons/hi";

function DetailsCardTenders({ address, price, time, totalTime }) {
  const [endTime, setEndTime] = useState(false)
  return (
    <div className='w-full mt-3'>
      <div className='flex items-center gap-x-2 mb-3'>
        <HiLocationMarker className='text-primary-500' size={20} />
        <span className='text-cf-300 text-xs'>{address}</span>
      </div>
      <div className='flex items-center gap-x-2 mb-5'>
        <HiSpeakerphone className='text-primary-500' size={20} />
        <div className='text-xs'>
          <span className='text-cf-300'>قیمت پیشنهادی شما: </span>
          <span className='text-cf-900'>{price} ریال</span>
        </div>
      </div>
      <div className='flex flex-wrap items-center gap-x-2 gap-y-2 sm:gap-y-0 mb-3'>
        <HiClock className='text-primary-500' size={20} />
        <div className='text-xs sm:text-sm font-bold flex items-center gap-x-2'>
          <TimerDown setEndTime={setEndTime} time={time} />
          {!endTime && (<span>تا پایان مناقصه</span>)}
        </div>
        {
          !endTime && (
            <div className='bg-primary-100 text-primary-500 text-xs rounded-full p-2 sm:px-3 sm:py-1 fcc'>
              درحال برگزاری
            </div>
          )
        }
      </div>
    </div>
  )
}

export default DetailsCardTenders;