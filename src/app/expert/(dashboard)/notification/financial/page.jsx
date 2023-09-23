import React from 'react'
//components
import StickyElement from '../_components/StickyElement'
//react icons
import { HiOutlineNewspaper } from 'react-icons/hi'

function page() {
  return (
    <div>
      <div className='flex items-center justify-between bg-white font-bold px-5 border-y border-gray-400 shadow-lg'>
        <div className='h-[71px] flex items-center text-lg text-cf-300'>
          <HiOutlineNewspaper size={24} />
          <div className='mr-2'>
            تازه ها
          </div>
        </div>
        <div className='flex text-blue-500 text-sm cursor-pointer'>دیدن همه</div>
      </div>

      {/* <div className='h-full bg-red-500'>
        <div>sdfs</div>
        <div>sdfs</div>
        <div>sdfs</div>
        <div>sdfs</div>
        <div>sdfs</div>
        <div>sdfs</div>
        <div>sdfs</div>
        <div>sdfs</div>
        <StickyElement />
        <div>sdfs</div>
        <div>sdfs</div>
        <div>sdfs</div>
        <div>sdfs</div>
        <div>sdfs</div>
        <div>sdfs</div>
        <div>sdfs</div>
        <div>sdfs</div>
      </div> */}
    </div>
  )
}

export default page