'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
//components
import Carts from './_components/Carts'
import Loading from '@/src/app/_components/Loading'
import Modal from '@/src/app/_components/Modal'
import WalletCart from './_components/WalletCart'
import DynamicInputs from '@/src/app/_components/inputs/DynamicInputs'
//assets
import withdrawal from '@/public/icons/withdrawal.svg'
import deposit from '@/public/icons/deposit.svg'
import withdrawals from '@/public/icons/withdrawals.svg'
import deposits from '@/public/icons/deposits.svg'
//react icons
import { HiOutlineLibrary, HiArrowNarrowDown, HiArrowNarrowUp, HiOutlineCreditCard } from "react-icons/hi";
//functions
import formatPrice from '@/src/functions/formatPrice'
import Link from 'next/link'
//services
import searchWallet from '@/services/wallet_kg_local/search'
import walletData from '@/services/wallet_kg_local/walletData'
//formik
import { useFormik } from 'formik'
import * as Yup from "yup";
//toast
import customToast from '@/src/functions/customToast'

function Page() {
  const [loadingPage, setLoadingPage] = useState(true)
  const [transaction, setTransaction] = useState({});
  const [walletDataState, setWalletDataState] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [modalName, setModalName] = useState('');
  const [continueModal, setContinueModal] = useState(false);

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
      action: 'deposit',
    }, {
      title: 'برداشت',
      color: 'text-yellow-500',
      icon: withdrawal,
      action: 'withdrawal',
    }
  ]

  //modal handler
  const modalHandler = (name) => {
    setIsOpen(true)
    setModalName(name)
    setContinueModal(false)
    formik.resetForm()
  }

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

  const validationSchema = Yup.object({
    modalInput:
      modalName === 'deposit' ?
        Yup.string().required("لطفا مبلغ واریزی خود را وارد کنید.").matches(/\d/, "مبلغ واریزی باید شامل اعداد باشد.") :
        Yup.string().required("لطفا مبلغ برداشتی خود را وارد کنید.").matches(/\d/, "مبلغ برداشتی باید شامل اعداد باشد.")
  });


  const formik = useFormik({
    initialValues: {
      modalInput: ''
    },
    validationSchema,
    onSubmit: (values) => {
      if (modalName === 'deposit') {
        customToast('success', 'انتفال به پرادخت')
      } else {
        if (values.modalInput <= walletDataState.balance) {
          setContinueModal('withdrawal')
        } else {
          customToast('err', 'موجودی کیف پول شما کافی نمی‌ باشد.')
        }
      }
    },
  });

  return (
    <div className='w-full'>
      <Modal setIsOpen={setIsOpen} isOpen={isOpen} w={'w-full md:w-[500px]'} h={'h-full md:h-auto'} >
        <div>
          <div className="text-primary-500 fcc font-bold" >
            {modalName === 'deposit' ? <span>شارژ کیف پول</span> : <span>برداشت از کیف پول</span>}
            <HiOutlineCreditCard size={20} className="mr-2" />
          </div>
          {!continueModal ?
            <>
              {modalName === 'deposit' ?
                <div className="text-sm my-4 text-cf-400">میزان مبلغی که تمایل دارید کیف پولتان را شارژ کنید را وارد کنید.</div> :
                <div className="text-sm my-4 text-cf-400">میزان مبلغی که تمایل دارید از کیف پولتان برداشت کنید را وارد کنید.</div>
              }

              <DynamicInputs
                inputType='text'
                title={modalName === 'deposit' ? 'میزان شارژ (ریال)' : 'میزان برداشت (ریال)'}
                state="Low"
                required={true}
                className="my-2 w-full"
                placeholder='به طور مثال : ۲،۰۰۰،۰۰۰'
                id='modalInput'
                name='modalInput'
                formik={formik}
              />
              <div className="fcc gap-4 pt-4">
                {modalName === 'deposit' ?
                  <button onClick={formik.submitForm} className="w-full py-2 px-4 fcc font-medium bg-primary-100 text-primary-500 rounded-md">
                    شارژ کیف پول
                  </button> :
                  <button onClick={formik.submitForm} className="w-full py-2 px-4 fcc font-medium bg-primary-100 text-primary-500 rounded-md">
                    برداشت از کیف پول
                  </button>
                }

              </div>
            </> : continueModal === 'deposit' ?
              <div className="my-5 fcc text-cf-400">
                شارژ کیف پول شما با موفقیت انجام شد.
              </div> :
              <div className="my-5 text-cf-400">
                برداشت از کیف پولشما با موفقیت انجام شد.
              </div>
          }
        </div>
      </Modal>

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
      <div className='fcc w-full mt-10 gap-5'>
        {
          items.map((item, i) => (
            <div key={i} className='w-full'>
              {!item.action ?
                <Link href={item.link} className='w-full fcc flex-col'>
                  <div className='bg-indigo-500/10 mb-4 w-full fcc h-[70px] rounded-lg'>
                    <Image
                      src={item.icon}
                      alt='icon item'
                      sizes='40px'
                    />
                  </div>
                  <span className={`text-xs font-bold ${item.color}`}>{item.title}</span>
                </Link> :
                <button onClick={() => { modalHandler(item.action) }} key={i} className='w-full fcc flex-col'>
                  <div className='bg-indigo-500/10 mb-4 w-full fcc h-[70px] rounded-lg'>
                    <Image
                      src={item.icon}
                      alt='icon item'
                      sizes='40px'
                    />
                  </div>
                  <span className={`text-xs font-bold ${item.color}`}>{item.title}</span>
                </button>
              }
            </div>
          ))
        }
      </div>

      <Carts walletDataState={walletDataState} />

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