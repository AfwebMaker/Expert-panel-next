import React from 'react'
// components
import Calendar from "./Calendar"
// react icons
import { HiClock } from 'react-icons/hi'

function ExecutionTimeBox() {
    return (
        <div className='bg-white w-full p-5 rounded-xl flex flex-col items-start justify-center gap-y-2 mt-5'>
            <div className='flex w-full items-center gap-x-2 mb-7'>
                <HiClock className='text-primary-500 text-xl' />
                <span className='text-cf-300 text-xs'>زمان انجام و اجرای پروژه</span>
            </div>
            <Calendar date={"2023-09-14T14:41:00"} />
        </div>
    )
}

export default ExecutionTimeBox