'use client'

import React, { useEffect, useState } from 'react'
//redux
import { useSelector } from 'react-redux';
//components
import Loading from '@/src/app/_components/Loading';
import Header from './_components/Header';
//react icons
import { HiSearch, HiOutlineAdjustments } from "react-icons/hi";

function page() {
  const [loadingPage, setLoadingPage] = useState(true)
  const profileData = useSelector(state => state.getExpertInfo.user.mainDataInfo)

  useEffect(() => {
    profileData && setLoadingPage(false)
  }, [profileData])

  return (
    <>
      {loadingPage && <Loading />}
      {profileData &&
        <div className="flex w-full h-[calc(100vh-155px)] lg:h-auto xl:h-[calc(100vh-110px)] rounded-lg bg-[#F8F9F9] flex-col items-center justify-start relative">
          <div className="overflow-y-scroll hideScroll w-full h-full flex flex-col scroll-smooth px-5 lg:px-0">
            <Header profileData={profileData} />

            <div className='my-5 w-full h-[48px] relative flex items-center flex-shrink-0'>
              <input placeholder='جستوجو ...' className='w-full h-full bg-gray-200 rounded-lg pr-12' type="text" />
              <HiSearch size={24} className='absolute mr-3 text-cf-300' />
              <HiOutlineAdjustments size={24} className='absolute left-3 -rotate-90 text-primary-500' />
            </div>

            <div className='mb-5'>
              <div className='flex justify-between'>
                <div className='text-lg font-bold text-primary-500'>پیشنهادات ویژه</div>
                <div className='font-bold text-xl text-blue-500'>...</div>
              </div>
              <div className='w-full h-[200px] bg-green-300 mt-2 rounded-xl'>
              </div>
            </div>

            <div>
              <div className='flex justify-between'>
                <div className='text-lg font-bold text-primary-500'>خدمات</div>
                <div className='font-bold text-xl text-blue-500'>...</div>
              </div>
              <div className='flex py-5'>

                <div className='fcc flex-col mx-5'>
                  <div className='w-11 h-11 bg-green-200 rounded-full'></div>
                  <span className='mt-2 font-medium text-xs'>کیف پول</span>
                </div>

                <div className='fcc flex-col mx-5'>
                  <div className='w-11 h-11 bg-green-200 rounded-full'></div>
                  <span className='mt-2 font-medium text-xs'>نماینده من</span>
                </div>

                <div className='fcc flex-col mx-5'>
                  <div className='w-11 h-11 bg-green-200 rounded-full'></div>
                  <span className='mt-2 font-medium text-xs'>شغل های من</span>
                </div>

              </div>
            </div>

            <div className='mb-10'>
              <div className='flex justify-between'>
                <div className='text-lg font-bold text-primary-500'>گزارش کاری شما</div>
                <div className='font-bold text-xl text-blue-500'>...</div>
              </div>
              <div className='w-full h-[200px] bg-green-300 mt-2 rounded-xl'>
              </div>
            </div>

          </div>
        </div>
      }
    </>
  )
}

export default page