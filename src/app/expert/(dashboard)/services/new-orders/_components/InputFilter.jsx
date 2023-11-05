import React, { useState } from 'react'
//react icons
import { HiAdjustments, HiOutlineSearch } from "react-icons/hi";

function InputFilter({ ...res }) {
    const [value, setValue] = useState("")

    console.log(res)
    return (
        <div className='w-full h-12 rounded-lg bg-gray-200 flex items-center mt-3 px-10 py-2 relative'>
            <div className='absolute top-3.5 right-3 text-xl text-cf-300 font-extrabold'>
                <HiOutlineSearch />
            </div>
            <input
                type="text"
                value={value}
                className='h-full w-full bg-transparent caret-primary-500 text-sm'
                placeholder='خدمت ساختمانی که به دنبال آن هستید را وارد کنید .'
                onChange={(e) => setValue(e.target.value) }
            />
            <div className='absolute top-3.5 left-3 text-xl text-cf-300 font-extrabold cursor-pointer'>
                <HiAdjustments />
            </div>
        </div>
    )
}

export default InputFilter