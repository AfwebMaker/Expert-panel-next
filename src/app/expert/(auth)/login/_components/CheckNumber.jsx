"use client"

import Image from 'next/image'
import React, { useState } from 'react'
//assets
import X_circle from '@/public/icons/X_circle.svg'
import Link from 'next/link'

function CheckNumber({ setPageState }) {
    const [phoneNumber, setPhoneNumber] = useState('')

    const checkNumberHandler = () => {
        setPageState('checkPassword')
    }

    return (
        <div className='w-full p-5 text-sm font-medium'>
            <span className='flex my-4 font-medium text-sm text-cf-400 sm:text-base justify-center sm:justify-start'>ورود | ثبت نام کاربران</span>
            <form onSubmit={(event) => event.preventDefault()} className='flex flex-col my-2'>
                <label className='flex text-center text-xs sm:text-sm my-2 text-gray-500 justify-center sm:justify-start' htmlFor="phoneNumber">
                    برای ورود یا ثبت نام شماره تلفن خود را وارد کنید.
                </label>
                <div className='relative fcc my-2 w-full text-xs sm:text-sm h-9 sm:h-11'>
                    <input
                        id='phoneNumber'
                        dir='ltr'
                        className='w-full h-full focus:outline-0 text-right px-4 border border-black rounded-md'
                        type='number'
                        value={phoneNumber}
                        onChange={(e) => { setPhoneNumber(e.target.value) }}
                        placeholder='به طور مثال : ۰۹۱۲۸٤٦۳٥۱۲'
                    />
                    <Image
                        src={X_circle}
                        alt='X_circle'
                        onClick={() => { setPhoneNumber('') }}
                        className='absolute left-4 cursor-pointer w-4 sm:w-5'
                    />
                </div>
                <button onClick={checkNumberHandler} className='my-2 w-full text-xs sm:text-sm h-9 sm:h-10 bg-secondary-500 rounded-md text-white'>
                    ورود و ثبت نام
                </button>
            </form>
            <div className='flex justify-center sm:justify-start flex-wrap text-center text-xs text-gray-500'>
                ورود و ثبت نام شما به منزله پذیرفتن <Link href='/' className='text-secondary-500 mx-1'>شرایط و ضوابط</Link> ما می باشد.
            </div>
        </div>
    )
}

export default CheckNumber