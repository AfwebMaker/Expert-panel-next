import React, { useState } from 'react'
import Link from 'next/link'
// components
import Modal from "@/app/_components/Modal"
import TenderBoxModule from "./TenderBoxModule"
import InfoCard from "@/app/_components/InfoCard"
import TimerDown from "@/app/_components/TimerDown"
// function
import formatPrice from "@/src/functions/formatPrice"
// react icons
import { HiUser, HiOutlineTicket, HiOutlineMinusSm, HiOutlineExclamationCircle } from 'react-icons/hi'

function TenderBoxPhone({ time, minPrice, maxPrice, link }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ boxShadow: "0px -3px 15px rgba(38, 38, 38, 0.1)" }} className='fixed bottom-[80px] z-[60] border-t border-gray-100 right-0 flex bg-white lg:hidden w-full px-3 sm:px-5 py-2 sm:py-5 flex-col items-start justify-center'>
            <div className='flex w-full items-center justify-between mb-2'>
                <span className='text-cf-300 text-xs'>
                    محدوده مجاز برای شرکت در مناقصه
                </span>
                <HiOutlineExclamationCircle className='text-orange-500 text-xl' />
            </div>
            <ul className='w-full gap-y-3 text-sm flex gap-x-1'>
                <li className='flex items-center justify-start gap-x-1'>
                    <span className='text-cf-500 font-bold'>از</span>
                    <span className='text-cf-300'>{formatPrice(minPrice)} ریال</span>
                </li>
                <li className='flex items-center justify-start gap-x-1'>
                    <span className='text-cf-500 font-bold'>تا</span>
                    <span className='text-cf-300'>{formatPrice(maxPrice)} ریال</span>
                </li>
            </ul>
            <div className='flex items-center justify-between w-full mt-4'>
                <div onClick={() => setIsOpen(true)} className='bg-primary-500 hover:bg-primary-600 transition-all duration-300 h-9 px-2 text-white text-sm cursor-pointer fcc gap-x-1 rounded-md'>
                    <span className='text-xs md:hidden'>شرکت در مناقصه</span>
                    <span className='text-xs hidden md:block'>شرکت در مناقصه و اعلام قیمت</span>
                    <HiOutlineTicket size={15} className='-rotate-45' />
                </div>
                <div className='flex flex-col fcc'>
                    <div className='w-full fcc text-primary-500 text-sm font-bold rounded-full fcc gap-x-1'>
                        <TimerDown time={time} />
                    </div>
                    <span className='text-xs text-cf-300'>
                        زمان تا پایان مناقصه
                    </span>
                </div>
            </div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} h={"auto"} w={"500px"} >
                <TenderBoxModule setIsOpen={setIsOpen} />
            </Modal>
        </div>
    )
}

export default TenderBoxPhone;