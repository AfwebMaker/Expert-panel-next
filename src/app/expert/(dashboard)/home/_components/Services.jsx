import React from 'react'
//react icons
import { HiOutlineBriefcase, HiOutlineIdentification } from "react-icons/hi";
import { HiOutlineWallet } from "react-icons/hi2";

function Services() {
    return (
        <div>
            <div className='flex justify-between'>
                <div className='text-lg font-bold text-primary-500'>خدمات</div>
                <div className='font-bold text-xl text-blue-500'>...</div>
            </div>
            <div className='flex py-5'>

                <div className='fcc flex-col mx-5'>
                    <div className='w-11 h-11 bg-green-500/20 text-green-500 rounded-full fcc'>
                        <HiOutlineIdentification size={24} />
                    </div>
                    <span className='mt-2 font-medium text-xs'>نماینده من</span>
                </div>

                <div className='fcc flex-col mx-5'>
                    <div className='w-11 h-11 bg-yellow-500/20 text-yellow-500 rounded-full fcc'>
                        <HiOutlineBriefcase size={24} />

                    </div>
                    <span className='mt-2 font-medium text-xs'>شغل های من</span>
                </div>

                <div className='fcc flex-col mx-5'>
                    <div className='w-11 h-11 bg-purple-500/20 text-purple-500 rounded-full fcc'>
                        <HiOutlineWallet size={24} />
                    </div>
                    <span className='mt-2 font-medium text-xs'>کیف پول</span>
                </div>

            </div>
        </div>
    )
}

export default Services