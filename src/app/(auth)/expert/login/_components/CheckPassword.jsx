"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
//assets
import Eye from '@/../public/icons/Eye.svg'
import check from '@/../public/icons/check.svg'

function CheckPassword() {
    const [password, setPassword] = useState('')
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [rememberMe, setRememberMe] = useState(false)

    return (
        <div className='w-full p-6 pb-0 text-sm font-medium'>
            <span className='flex my-4 font-medium text-base'>ورود 
            متخصصین</span>
            <form onSubmit={(event) => event.preventDefault()} className='flex flex-col my-2'>
                <label className='my-2 text-gray-500' htmlFor="password">برای ورود رمز خود را وارد کنید.</label>
                <div className='relative fcc my-2 px-4 w-full h-11 border border-black rounded-md'>
                    <input
                        id='password'
                        dir='ltr'
                        className='w-full h-full focus:outline-0 text-right'
                        type={isPasswordVisible ? 'number' : 'password'}
                        value={password}
                        autoComplete="off"
                        onChange={(e) => { setPassword(e.target.value) }}
                        placeholder='••••••••••'
                    />
                    <Image
                        src={Eye}
                        alt='Eye'
                        onClick={() => { setIsPasswordVisible(!isPasswordVisible) }}
                        className='absolute left-4 cursor-pointer'
                    />
                </div>
                <div className='w-full flex items-center justify-between my-4'>
                    <div className='flex items-center'>
                        <div
                            onClick={() => { setRememberMe(!rememberMe) }}
                            className={`fcc w-4 h-4 rounded-[4px] ml-2 cursor-pointer ${rememberMe ? 'bg-secondary-500' : 'bg-white border border-black'}`}>
                            <Image
                                src={check}
                                alt='check'
                            />
                        </div>
                        <span className='text-gray-500'>مرا به خاطر بسپار</span>
                    </div>
                    <Link className='text-secondary-500' href='/'>رمز عبور خود را فراموش کردید؟</Link>
                </div>
                <button className='my-2 w-full h-10 bg-secondary-500 rounded-md text-white'>ورود</button>
            </form>
        </div>
    )
}

export default CheckPassword