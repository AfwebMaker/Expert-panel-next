'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
//components
import WalletCart from '../_components/WalletCart'
import Loading from '@/src/app/_components/Loading'
//services
import searchWallet from '@/services/wallet_kg_local/search'
//react icons
import { HiOutlineChevronRight, HiOutlineUpload } from "react-icons/hi";

function Page() {
  const [loadingPage, setLoadingPage] = useState(true);
  const [page,setPage] = useState(1)
  const [data, setData] = useState({});

  useEffect(() => {
    const initialData = {
      "pageIndex": page,
      "pageSize": 5,
      "isIncome": false,
      "isCashOut": true,
    }

    searchWallet(initialData)
      .then((res) => {
        setData(res.data.data.lstData)
      })
      .catch(() => {

      })
      .finally(() => {
        setLoadingPage(false)
      })
  }, [])


  return (
    <div className='w-full'>
      {loadingPage && <Loading />}
      <div className='flex items-center justify-between mb-8 lg:hidden'>
        <Link href='/expert/wallet/' className='fcc'>
          <HiOutlineChevronRight className='text-cf-400' />
          <div className='mr-1 text-cf-300 font-medium'>کیف پول</div>
        </Link>
      </div>
      <div className='flex items-center justify-start mb-5 text-red-500'>
        <HiOutlineUpload />
        <div className='mr-1 font-medium'>برداشت ها</div>
      </div>
      {data.length && data.map((item, i) => (
        <WalletCart key={i} title={item.description} style={0} date={item.date} />
      ))}
    </div>
  )
}

export default Page