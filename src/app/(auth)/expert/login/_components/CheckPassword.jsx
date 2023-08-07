"use client"

import React, { useState } from 'react'
import Image from 'next/image'
//assets
import Eye from '@/public/icons/Eye.svg'
import check from '@/public/icons/check.svg'

function CheckPassword({ setPageState, setForgetPassword }) {
    const [password, setPassword] = useState('')
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [rememberMe, setRememberMe] = useState(false)

    const checkOtpHandler = () => {
        setForgetPassword(true)
        setPageState('checkOtp')
    }

    return (
        <div className='w-full p-5 text-sm font-medium'>
            <span className='flex justify-center text-cf-400 my-4 font-medium text-sm sm:text-base sm:justify-start'>ورود کاربران</span>
            <form onSubmit={(event) => event.preventDefault()} className='flex flex-col'>
                <label className='flex justify-center sm:justify-start text-xs sm:text-sm my-2 text-gray-500' htmlFor="password">برای ورود رمز خود را وارد کنید.</label>
                <div className='relative fcc my-2 px-4 w-full h-9 sm:h-11 border border-black rounded-md'>
                    <input
                        id='password'
                        dir='ltr'
                        className='w-full h-full focus:outline-0 text-right text-xs sm:text-sm'
                        type={isPasswordVisible ? 'number' : 'password'}
                        value={password}
                        autoComplete="off"
                        onChange={(e) => { setPassword(e.target.value) }}
                        placeholder='••••••••••'
                    />
                    <Image
                        src={Eye}
                        alt='Eye'
                        onClick={() => {setIsPasswordVisible(isPasswordVisible => !isPasswordVisible)}}
                        className='absolute left-4 cursor-pointer w-4 sm:w-5'
                    />
                </div>
                <div className='w-full flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between my-4'>
                    <div className='flex items-center mt-3 sm:mt-0'>
                        <div
                            onClick={() => { setRememberMe(!rememberMe) }}
                            className={`fcc w-4 h-4 rounded-[4px] ml-2 cursor-pointer ${rememberMe ? 'bg-secondary-500' : 'bg-white border border-black'}`}>
                            <Image
                                src={check}
                                alt='check'
                            />
                        </div>
                        <span className='text-gray-500 text-xs sm:sm'>مرا به خاطر بسپار</span>
                    </div>
                    <button onClick={checkOtpHandler} className='text-secondary-500 text-xs sm:sm' href='/'>رمز عبور خود را فراموش کردید؟
                    </button>
                </div>
                <button className='mt-2 w-full h-9 sm:h-10 bg-secondary-500 rounded-md text-white'>ورود</button>
            </form>
        </div>
    )
}

export default CheckPassword