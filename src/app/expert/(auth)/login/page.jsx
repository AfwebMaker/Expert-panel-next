"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
//components
import CheckNumber from './_components/CheckNumber'
import CheckOtp from './_components/CheckOtp'
import CheckPassword from './_components/CheckPassword'
import ForgetPassword from './_components/ForgetPassword'
//assets
import Kargosha_Logo from '@/public/images/public/Kargosha_Logo.png'
import Arrow_right from '@/public/icons/Arrow_right.svg'
import backGround from '@/public/images/login/backGround.png'

function Login() {
  const [pageState, setPageState] = useState('checkNumber')
  const [forgetPassword, setForgetPassword] = useState(false)

  return (
    <main className='w-full h-full min-h-screen fcc flex-col bg-black py-8'>
      <Image
        src={backGround}
        alt='backGround'
        className='fixed top-0 w-full h-full object-cover'
      />
      <div className='z-10 w-[85%] sm:w-[80%] max-w-[480px] bg-white rounded-lg'>
        <div className='pt-6 fcc'>
          <Image
            src={Kargosha_Logo}
            alt='kargosha logo'
            // width='auto'
            className='w-28 sm:w-36'
          />
        </div>

        {pageState === 'checkNumber' &&
          <CheckNumber setPageState={setPageState} />
        }

        {pageState === 'checkOtp' &&
          <CheckOtp forgetPassword={forgetPassword} setPageState={setPageState} />
        }

        {pageState === 'checkPassword' &&
          <CheckPassword setForgetPassword={setForgetPassword} setPageState={setPageState} />
        }

        {pageState === 'forgetPassword' &&
          <ForgetPassword setForgetPassword={setForgetPassword} setPageState={setPageState} />
        }

      </div>

      <Link className='z-10 fcc text-white text-base font-bold mt-8' href='/'>
        <Image
          src={Arrow_right}
          alt='Arrow_right'
          className='ml-2 hidden sm:flex'
        />
        بازگشت به صفحه اصلی
      </Link>
    </main>
  )
}

export default Login