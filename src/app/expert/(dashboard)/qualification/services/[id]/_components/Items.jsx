import React from 'react'
//icons
import { Icon } from "@/app/_components/Icon"
//react icons
import { HiCheckCircle, HiExclamationCircle, HiXCircle, HiChevronLeft } from 'react-icons/hi'

function Items({ state }) {
    return (
        <div className='flex justify-between my-4 px-8 md:px-20 cursor-pointer'>
            <div className='fcc'>
                <Icon nameIcon='HiOutlineArchive' propsIcon={{ className: `text-cf-300 ml-3`, size:23 }} />
                <div className='font-medium text-cf-300'>مناطق کاری شما</div>
            </div>
            <div className='fcc'>
                {state === 0 ?
                    <div className='flex items-center'>
                        <HiCheckCircle size={20} className='mr-1 text-primary-500' />
                    </div> :
                    state === 1 ?
                        <div className='flex items-center'>
                            <HiExclamationCircle size={20} className='mr-1 text-warning' />
                        </div> :
                        state === 2 ?
                            <div className='flex items-center'>
                                <HiXCircle size={20} className='mr-1 text-red-500' />
                            </div> : ''
                }
                <HiChevronLeft size={20} className='mr-2 text-cf-300' />
            </div>
        </div>
    )
}

export default Items