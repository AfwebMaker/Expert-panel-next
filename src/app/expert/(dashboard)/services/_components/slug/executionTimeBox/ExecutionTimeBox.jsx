import React from 'react'
// components
import Calendar from "./Calendar"
// function
import convertToJalali from "@/src/functions/convertToJalali"
// react icons
import { HiClock } from 'react-icons/hi'

function ExecutionTimeBox() {
    return (
        <div className='bg-white lg:shadow-lg w-full p-5 border-b border-gray-300 lg:border-none lg:rounded-xl flex flex-col items-start justify-center gap-y-2 lg:mt-5'>
            <div className='flex w-full items-center gap-x-2 mb-7'>
                <HiClock className='text-primary-500 text-xl' />
                <span className='text-cf-300 text-base'>زمان انجام و اجرای پروژه</span>
            </div>
            <div className='w-full text-cf-300 font-bold fcc mb-4 gap-x-1'>
                <span>
                    {convertToJalali("2023-12-14T14:41:00").only.month}
                </span>
                <span>
                    {convertToJalali("2023-12-14T14:41:00").only.year}
                </span>
            </div>
            <Calendar date={"2023-12-14T14:41:00"} />
            <div className='w-full text-primary-500 font-bold fcc flex-col mb-4 gap-x-1'>
                <span>
                    {convertToJalali("2023-12-14T14:41:00").date}
                </span>
                <span className='text-xs'>
                    <span className='ml-1'>ساعت</span>
                    {convertToJalali("2023-12-14T14:41:00").watch}
                </span>
            </div>
        </div>
    )
}

export default ExecutionTimeBox