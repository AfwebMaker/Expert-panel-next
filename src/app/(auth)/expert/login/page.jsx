"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
//components
import CheckNumber from './_components/CheckNumber'
import CheckOtp from './_components/CheckOtp'
import CheckPassword from './_components/CheckPassword'
//assets
import Kargosha_Logo from '@/../public/images/public/Kargosha_Logo.png'
import Arrow_right from '@/../public/icons/Arrow_right.svg'

function Login() {
  const [pageState, setPageState] = useState('checkNumber')
  return (
    <main className='w-full h-full min-h-screen fcc flex-col bg-black py-8'>
      <div className='w-[80%] max-w-[480px] bg-white rounded-lg'>
        <div className='pt-6 fcc'>
          <Image
            src={Kargosha_Logo}
            alt='kargosha logo'
            width={130}
          />
        </div>

        {pageState === 'checkNumber' &&
          <CheckNumber setPageState={setPageState} />
        }

        {pageState === 'checkOtp' &&
          <CheckOtp setPageState={setPageState} />
        }

        {pageState === 'checkPassword' &&
          <CheckPassword setPageState={setPageState} />
        }

      </div>

      <Link className='fcc text-white text-base font-bold mt-8' href='/'>
        <Image
          src={Arrow_right}
          alt='Arrow_right'
          className='ml-2'
        />
        بازگشت به صفحه اصلی
      </Link>
    </main>
  )
}

export default Login