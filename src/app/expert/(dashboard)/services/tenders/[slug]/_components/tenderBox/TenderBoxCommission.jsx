import React, { useState } from 'react'
import Link from 'next/link'
// components
import Modal from "@/app/_components/Modal"
import TenderBoxCommissionModule from "./Module/TenderBoxCommissionModule"
import InfoCard from "@/app/_components/InfoCard"
import TimerDown from "@/app/_components/TimerDown"
// function
import formatPrice from "@/src/functions/formatPrice"
// react icons
import { HiUser, HiCreditCard, HiOutlineMinusSm } from 'react-icons/hi'

function TenderBoxCommission({ time, projectCommission, payableStart }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='hidden lg:shadow-lg lg:flex bg-white w-full h-full p-5 rounded-xl flex-col items-start justify-center gap-y-2'>
            <div className='flex w-full items-center gap-x-2 mb-7'>
                <HiUser className='text-primary-500 text-xl' />
                <span className='text-cf-300 text-base'>مناقصه محدود و هزینه برآورد پروژه</span>
            </div>
            <div className='w-full h-full flex flex-col fcc mb-5'>
                <span className='text-sm text-primary-500'>
                    مناقصه به پایان رسیده و شما برنده مناقصه شدید
                </span>
                <div className='w-full fcc h-12 text-primary-500 text-2xl font-bold rounded-full fcc gap-x-1'>
                    <TimerDown time={time} />
                    {/* 2 * 24 * 60 * 60 * 1000 */}
                </div>
                <span className='text-sm text-cf-300'>
                    زمان تا پرداخت کمیسیون پروژه
                </span>
            </div>
            <InfoCard styleCustom="text-blue-500 w-full">
                پس از پرداخت یک سوم کمیسیون پروژه و مطالعه شروط قرارداد و امضای آن که به منزله تایید نهایی شما به عنوان متخصص این پروژه می باشد اطلاعات تکمیلی پروژه از جمله آدرس و مشخصات کارفرما برای شما به نمایش در می آید. توجه داشته باشید در صورت پرداخت نکردن کمیسیون در مدت زمان مقرر شده این مناقصه برای شما حذف و یک متخصص دیگر جایگزین شما می شود.
            </InfoCard>
            <div className='w-full text-cf-300 mt-5'>
                <ul className='w-full gap-y-3 text-sm flex flex-col'>
                    <li className='flex items-center justify-start w-full gap-x-1'>
                        <HiOutlineMinusSm className='text-cf-500 font-bold' size={8} />
                        <span className='text-cf-500'>کمیسیون پروژه :</span>
                        <span>{formatPrice(projectCommission)} ریال</span>
                    </li>
                    <li className='flex flex-wrap items-center justify-start w-full gap-x-1 gap-y-2'>
                        <HiOutlineMinusSm className='text-cf-500 font-bold' size={8} />
                        <span className='text-cf-500'>میزان قابل پرداخت برای شروع پروژه :</span>
                        <span>{formatPrice(payableStart)} ریال</span>
                    </li>
                </ul>
            </div>
            <div onClick={() => setIsOpen(true)} className='min-h-[40px] bg-primary-500 hover:bg-primary-600 transition-all duration-300 w-full h-10 text-white text-sm cursor-pointer fcc gap-x-1 rounded-lg mt-5'>
                <span>پرداخت کمیسیون پروژه</span>
                <HiCreditCard size={18} />
            </div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} h={"h-screen md:h-auto"} w={"w-screen md:w-[500px]"} >
                <TenderBoxCommissionModule setIsOpen={setIsOpen} />
            </Modal>
        </div>
    )
}

export default TenderBoxCommission;