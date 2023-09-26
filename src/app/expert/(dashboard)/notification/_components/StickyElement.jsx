import React from 'react';
//react icons
import { HiOutlineNewspaper } from 'react-icons/hi'

function StickyElement() {

    return (
        <div className='sticky top-0 flex w-full items-center justify-between bg-[#F8F9F9] font-bold px-5 border-b border-gray-400 shadow-lg m-auto z-20'>
            <div className='h-[71px] flex items-center text-lg text-cf-300'>
                <HiOutlineNewspaper size={24} />
                <div className='mr-2'>
                    خوانده شده ها
                </div>
            </div>
        </div>
    );
}

export default StickyElement;