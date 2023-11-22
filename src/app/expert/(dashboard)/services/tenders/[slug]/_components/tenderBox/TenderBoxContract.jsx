import React, { useState } from 'react'
import Link from 'next/link'
// components
import Modal from "@/app/_components/Modal"
import TenderBoxModule from "./Module/TenderBoxEditModule"
import InfoCard from "@/app/_components/InfoCard"
import TimerDown from "@/app/_components/TimerDown"
// function
import formatPrice from "@/src/functions/formatPrice"
// react icons
import { HiUser, HiOutlineTicket, HiOutlineMinusSm } from 'react-icons/hi'

function TenderBoxContract({ state, time, minPrice, maxPrice, link }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='hidden lg:shadow-lg lg:flex bg-white w-full h-full p-5 rounded-xl flex-col items-start justify-center gap-y-2'>
            <div className='flex w-full items-center gap-x-2 mb-7'>
                <HiUser className='text-primary-500 text-xl' />
                <span className='text-cf-300 text-base'>مناقصه محدود و هزینه برآورد پروژه</span>
            </div>
            <div className='w-full h-full flex flex-col fcc mb-5'>
                <div className='w-full fcc h-12 text-primary-500 text-2xl font-bold rounded-full fcc gap-x-1'>
                    <TimerDown time={time} />
                    {/* 2 * 24 * 60 * 60 * 1000 */}
                </div>
                <span className='text-sm text-cf-300'>
                    زمان تا پایان مناقصه
                </span>
            </div>
            <div className='w-full text-cf-300 mb-5'>
                <h2 className='text-sm mb-5'>محدوده مجاز برای شرکت در مناقصه</h2>
                <ul className='w-full gap-y-3 text-sm flex flex-col'>
                    <li className='flex items-center justify-start w-full gap-x-1'>
                        <HiOutlineMinusSm className='text-cf-500 font-bold' size={8} />
                        <span className='text-cf-500'>کمینه قیمت</span>
                        <span>:</span>
                        <span>{formatPrice(minPrice)} ریال</span>
                    </li>
                    <li className='flex items-center justify-start w-full gap-x-1'>
                        <HiOutlineMinusSm className='text-cf-500 font-bold' size={8} />
                        <span className='text-cf-500'>بیشینه قیمت</span>
                        <span>:</span>
                        <span>{formatPrice(maxPrice)} ریال</span>
                    </li>
                </ul>
            </div>
            <InfoCard bgColor={"#FFEDD5"} styleCustom="text-orange-500 w-full">
                توجه شود که این قیمت توسط متری چند تعیین شده و تمامی فاکتور عم از نیاز به مصالح و ... در آن دیده شده است.
                <Link href={link} className='font-bold w-full fcc mt-5 cursor-pointer'>مشاهده برآورد هزینه در متری چند</Link>
            </InfoCard>
            <div onClick={() => setIsOpen(true)} className='min-h-[40px] bg-primary-500 hover:bg-primary-600 transition-all duration-300 w-full h-10 text-white text-sm cursor-pointer fcc gap-x-1 rounded-lg mt-5'>
                <span>شرکت در مناقصه و اعلام قیمت پیشنهادی</span>
                <HiOutlineTicket size={18} className='-rotate-45' />
            </div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} h={"auto"} w={"500px"} >
                <TenderBoxModule setIsOpen={setIsOpen} />
            </Modal>
        </div>
    )
}

export default TenderBoxContract;