"use client"

import Image from 'next/image'
import React, { useState } from 'react'
//assets
import X_circle from '@/../public/icons/X_circle.svg'
import Link from 'next/link'

function CheckNumber({ setPageState }) {
    const [phoneNumber, setPhoneNumber] = useState('')

    const checkNumberHandler = () => {
        setPageState('checkOtp')
    }

    return (
        <div className='w-full p-6 text-sm font-medium'>
            <span className='flex my-4 font-medium text-base'>ورود | ثبت نام متخصصین</span>
            <form onSubmit={(event) => event.preventDefault()} className='flex flex-col my-2'>
                <label className='my-2 text-gray-500' htmlFor="phoneNumber">برای ورود یا ثبت نام شماره تلفن خود را وارد کنید.</label>
                <div className='relative fcc my-2 px-4 w-full h-11 border border-black rounded-md'>
                    <input
                        id='phoneNumber'
                        dir='ltr'
                        className='w-full h-full focus:outline-0 text-right'
                        type='number'
                        value={phoneNumber}
                        onChange={(e) => { setPhoneNumber(e.target.value) }}
                        placeholder='به طور مثال : ۰۹۱۲۸٤٦۳٥۱۲'
                    />
                    <Image
                        src={X_circle}
                        alt='X_circle'
                        onClick={() => { setPhoneNumber('') }}
                        className='absolute left-4 cursor-pointer'
                    />
                </div>
                <button onClick={checkNumberHandler} className='my-2 w-full h-10 bg-secondary-500 rounded-md text-white'>
                    ورود و ثبت نام
                </button>
            </form>
            <div className='flex flex-wrap text-xs text-gray-500'>
                ورود و ثبت نام شما به منزله پذیرفتن
                <Link href='/' className='text-secondary-500 mx-1'>شرایط و ضوابط</Link>
                ما می باشد.
            </div>
        </div>
    )
}

export default CheckNumber