'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
//react icons
import { HiCheckCircle, HiXCircle } from "react-icons/hi";
//components
import MobileNavigation from './_components/MobileNavigation'
import Loading from '@/src/app/_components/Loading'
import Stars from '@/src/app/_components/Stars';
//services
import profileBase from '@/src/services/person_kg_local/profileBase'

function Page() {
  const [loadingPage, setLoadingPage] = useState(true)
  const [data, setData] = useState({})

  //get data
  useEffect(() => {
    profileBase()
      .then(res => {
        setData(res.data.data)
      })
      .catch(() => {
      })
      .finally(() => {
        setLoadingPage(false)
      })
  }, [])

  return (
    <>
      {loadingPage && <Loading />}
      <MobileNavigation data={data} />
      <div className="hidden w-full h-[calc(100vh-138px)] lg:h-auto xl:h-[calc(100vh-110px)] rounded-lg bg-[#F8F9F9] lg:flex flex-col items-center justify-start relative">
        <div className="overflow-y-scroll hideScroll w-full h-full flex flex-col scroll-smooth px-5 lg:px-0">
          <div className='py-5 lg:px-5 lg:bg-white rounded-lg flex flex-col w-full pb-5 lg:mb-5'>
            <div className='w-full fcc flex-col mb-12'>
              <div className='w-[150px] h-[150px] rounded-full mb-5 overflow-hidden relative'>
                {data.avatarURL &&
                  <Image
                    src={data.avatarURL.url}
                    alt="avatar"
                    fill={true}
                    className='object-cover'
                  />}
              </div>
              <div className='font-bold flex-col fcc'>
                <div className='text-lg mb-2'>{data.name} {data.family}</div>
                <div className='fcc mb-2'>
                  <div className='text-sm text-primary-500'>وضعیت : </div>
                  <div className='text-cf-300 font-medium text-sm fcc'>
                    <div className='mx-1'>{data.isActive ? 'فعال' : 'غیر فعال'}</div>
                    <div>
                      {data.isActive ?
                        <HiCheckCircle size={16} className='text-primary-500' /> :
                        <HiXCircle size={16} className='text-warning' />
                      }
                    </div>
                  </div>
                </div>
                <div className='fcc mb-2'>
                  <div className='text-sm text-secondary-500'>امتیاز متخصص : </div>
                  <div className='text-cf-300 font-medium text-sm fcc'>
                    <Stars point={data.score ? data.score : 0} />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className='font-bold text-sm my-5 text-cf-400'>
                احراز هویت در گارگشا قدم اول شما برای مشغول شدن به کار می باشد شما ابتدا باید به احراز اطلاعات کاربریتان سپس یک شماره شبا برای احراز بانکی و در نهایت احراز محل سکونتتان بپردازید.
              </div>
              <ul className='font-medium text-sm text-cf-300 list-disc px-6'>
                <li className='mb-5'>
                  توجه داشته باشید این پرسه در سیستم کارپشا محفوظ می باشد و برای احراز هویت شما از ارکان ها و سازمان های دولتی استفاده می کند این امر برای راحت شدن کار شما می باشد.
                </li>
                <li className='mb-5'>
                  برای گرفتن مدرک سوء پیشینه خود باید به دفاتر پلیس +۱۰ مراجعه بفرماید و سپس عکس آنرا با کیفیت خوب در قسمت احراز هویت &gt; اطلاعات کاربری &gt; مدارک &gt; گواهی عدم سوء پیشینه بارگزاری کنید و منتظر بمانید که از سمت ادمین تایدد بشود و احراز هویت شما انجام شود.
                </li>
                <li className='mb-5'>
                  توجه داشته باشید که اطلاعات کاربری شما چون غیر قابل تغییر می باشد بعد از احراز هویت امکان تغییر ندارند و شما فقط امکان ویرایش اطلاعات بانکی و سکونتی را دارید زیرا ممکن است با گذشت زمان تغییر کنند.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page