import React from 'react'
// react icons
import { HiLocationMarker, HiArrowsExpand } from "react-icons/hi";
// function
import shortText from "/src/functions/shortText"

function DetailsCardNew({ address, meterage, description }) {
  return (
    <div className='w-full mt-3'>
      <div className='flex items-center gap-x-2 mb-3'>
        <HiLocationMarker className='text-primary-500' size={20} />
        <span className='text-cf-300 text-xs'>{address}</span>
      </div>
      {
        !!meterage && (
          <div className='flex flex-col justify-center gap-y-3'>
            <span className='text-sm'>متراژ پروژه</span>
            <div className='flex items-center gap-x-2'>
              <HiArrowsExpand className='text-primary-500' size={20} />
              <span className='text-cf-300 text-xs'>{meterage} متر مکعب</span>
            </div>
          </div>
        )
      }
      {
        !meterage && description && (
          <div className='flex flex-col justify-center gap-y-3'>
            <span className='text-sm'>توضیحات:</span>
            <div className='flex items-center gap-x-2'>
              <span className='text-cf-300 text-xs'>{shortText(description, 40)}</span>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default DetailsCardNew;