'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
//components
import WalletCart from '../_components/WalletCart'
import Loading from '@/src/app/_components/Loading'
//react icons
import { HiOutlineChevronRight, HiOutlineDownload } from "react-icons/hi";
//services
import searchWallet from '@/services/wallet_kg_local/search'

function Page() {
  const [loadingPage, setLoadingPage] = useState(true);
  const [active, setActive] = useState(true);
  const [data, setData] = useState({});
  const page = useRef(1);
  const totalPage = useRef(0)

  useEffect(() => {
    const initialData = {
      "pageIndex": 1,
      "pageSize": 10,
      "isIncome": true,
      "isCashOut": false,
    }

    searchWallet(initialData)
      .then((res) => {
        totalPage.current = Math.ceil(res.data.data.count / 10)
        totalPage.current <= page.current && setActive(false)

        setData(res.data.data.lstData)
      })
      .catch(() => {
      })
      .finally(() => {
        setLoadingPage(false)
      })
  }, [])

  const addNewBox = () => {
    const initialData = {
      "pageIndex": page.current + 1,
      "pageSize": 10,
      "isIncome": true,
      "isCashOut": false,
    }


    searchWallet(initialData)
      .then((res) => {
        page.current = page.current + 1
        totalPage.current <= page.current && setActive(false)
        setData([...data, ...res.data.data.lstData])
      })
      .catch(() => {

      })
      .finally(() => {
      })
  }

  return (
    <div className='w-full'>
      {loadingPage && <Loading />}
      <div className='flex items-center justify-between mb-8 lg:hidden'>
        <Link href='/expert/wallet/' className='fcc'>
          <HiOutlineChevronRight className='text-cf-400' />
          <div className='mr-1 text-cf-300 font-medium'>کیف پول</div>
        </Link>
      </div>
      <div className='flex items-center justify-start mb-5 text-primary-500'>
        <HiOutlineDownload />
        <div className='mr-1 font-medium'>واریزی ها</div>
      </div>

      {data.length && data.map((item, i) => (
        <WalletCart key={i} title={item.description} style={1} date={item.date} />
      ))}

      {active &&
        <button onClick={addNewBox} className='m-auto bg-primary-100 py-2 px-4 fcc my-5 font-bold text-xs text-primary-500 rounded-lg'>
          مشاهده بیشتر...
        </button>
      }
    </div>
  )
}

export default Page