'use client'

import React from 'react'
import Image from 'next/image';
//assets
import label from '@/public/images/notFound/Label.png'
import notFoundIcon from '@/public/images/notFound/404.png'
import background from '@/public/images/notFound/background.png'
import { useRouter } from 'next/navigation';

function NotFoundPage() {
  const route = useRouter()

  return (
    <div className='w-screen h-screen fcc relative'>
      <Image fill={true} src={background} className='absolute left-0 bottom- object-cover' />

      <div className='absolute fcc flex-col'>
        <div className='font-bold text-2xl text-white'>متاسفانه این صفحه پیدا نشد.</div>
        <Image height={500} src={notFoundIcon} />
        <button onClick={() => { route.back() }} className='fcc bg-primary-600 text-white py-2 px-4 rounded-md font-bold'>بازگشت به صفحه اصلی</button>
      </div>

      <Image height={40} src={label} className='absolute left-0 bottom-10' />
    </div>
  )
}

export default NotFoundPage;