'use client'

import React, { useEffect, useState } from 'react'
//components
import Loading from '/src/app/_components/Loading';
import Header from './_components/Header';
import Services from './_components/Services';
import Banner from './_components/Banner';
import Reports from './_components/Reports';
//react icons
import { HiSearch, HiOutlineAdjustments } from "react-icons/hi";
//services
import profileBase from '/src/services/person_kg_local/profileBase'

function Page() {
  const [data, setData] = useState({})
  const [loadingPage, setLoadingPage] = useState(true)

  //get form state
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
      <div className="flex w-full h-[calc(100vh-155px)] lg:h-auto xl:h-[calc(100vh-110px)] rounded-lg bg-[#F8F9F9] flex-col items-center justify-start relative">
        <div className="overflow-y-scroll hideScroll w-full h-full flex flex-col scroll-smooth px-3 md:px-5 lg:px-0">
          <Header profileData={data} />

          <div className='my-5 w-full h-[48px] relative flex items-center flex-shrink-0'>
            <input placeholder='جستوجو ...' className='w-full h-full bg-gray-200 rounded-lg pr-12' type="text" />
            <HiSearch size={24} className='absolute mr-3 text-cf-300' />
            {/* <HiOutlineAdjustments size={24} className='absolute left-3 -rotate-90 text-primary-500' /> */}
          </div>

          <Banner />
          <Services />
          <Reports />
        </div>
      </div>
    </>
  )
}

export default Page