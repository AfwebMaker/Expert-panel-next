'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
//components
import Cart from './_components/Cart'
import Loading from '@/src/app/_components/Loading'
import WalletCart from './_components/WalletCart'
//assets
import withdrawal from '@/public/icons/withdrawal.svg'
import deposit from '@/public/icons/deposit.svg'
import withdrawals from '@/public/icons/withdrawals.svg'
import deposits from '@/public/icons/deposits.svg'
//react icons
import { HiOutlineLibrary, HiArrowNarrowDown, HiArrowNarrowUp } from "react-icons/hi";
//functions
import formatPrice from '@/src/functions/formatPrice'
import Link from 'next/link'
//services
import searchWallet from '@/services/wallet_kg_local/search'
import walletData from '@/services/wallet_kg_local/walletData'

function Page() {
  const [loadingPage, setLoadingPage] = useState(true)
  const [transaction, setTransaction] = useState({});
  const [walletDataState, setWalletDataState] = useState('')

  const items = [
    {
      title: 'برداشت ها',
      color: 'text-red-500',
      icon: withdrawals,
      link: '/expert/wallet/withdrawals',
    }, {
      title: 'واریزی ها',
      color: 'text-green-500',
      icon: deposits,
      link: '/expert/wallet/deposits',
    }, {
      title: 'شارژ کیف پول',
      color: 'text-blue-500',
      icon: deposit,
      link: '/expert/wallet/deposit',
    }, {
      title: 'برداشت',
      color: 'text-yellow-500',
      icon: withdrawal,
      link: '/expert/wallet/withdrawal',
    }
  ]

  //get wallet details
  useEffect(() => {
    walletData()
      .then((res) => {
        setWalletDataState(res.data.data)
      })
      .catch(() => {

      })
      .finally(() => {
        setLoadingPage(false)
      })
  }, [])

  //get list of transaction
  useEffect(() => {
    const initialData = {
      "pageIndex": 1,
      "pageSize": 5,
      "isIncome": true,
      "isCashOut": true,
    }

    searchWallet(initialData)
      .then((res) => {
        setTransaction(res.data.data.lstData)
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
      <div className='w-full fcc text-primary-500 font-medium text-lg lg:hidden'>
        کیف پول
        <HiOutlineLibrary size={24} className='mr-2 my-10' />
      </div>
      <div className='fcc flex-col text-primary-500 mb-10'>
        <div className='fcc font-bold text-lg'>
          {walletDataState && formatPrice(walletDataState.balance)}
          <span className='mr-2'>تومان</span>
        </div>
        <div className='font-bold mt-2'>
          موجودی کیف پول شما
        </div>
      </div>
      {/* <Cart /> */}
      <div className='fcc w-full mt-10 gap-5'>
        {
          items.map((item, i) => (
            <Link href={item.link} key={i} className='w-full fcc flex-col'>
              <div className='bg-indigo-500/10 mb-4 w-full fcc h-[70px] rounded-lg'>
                <Image
                  src={item.icon}
                  alt='icon item'
                  sizes='40px'
                />
              </div>
              <span className={`text-xs font-bold ${item.color}`}>{item.title}</span>
            </Link>
          ))
        }
      </div>

      <div className='flex justify-between items-center my-8'>
        <div className='fcc text-cf-300'>
          <div className='fcc ml-2 w-6 relative'>
            <HiArrowNarrowDown className='mt-1 right-0 absolute' />
            <HiArrowNarrowUp className='mb-1 left-0 absolute' />
          </div>
          <div className='font-bold'>آخرین تراکنشات</div>
        </div>
        <div className='font-bold text-blue-500 text-lg'>...</div>
      </div>

      {transaction.length && transaction.map((item, i) => (
        <WalletCart key={i} title={item.description} style={item.amount > 0 ? 1 : 0} date={item.date} />
      ))}
    </div>
  )
}

export default Page