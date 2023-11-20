'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
//components
import Items from './_components/Items'
//react icons
import { HiOutlineChevronRight, HiBadgeCheck, HiExclamation, HiExclamationCircle, HiCheckCircle, HiXCircle, HiOutlineBan, HiTrash  } from 'react-icons/hi'

function Page({ params }) {
  const state = 1

  return (
    <div className="flex w-full h-[calc(100vh-138px)] md:h-auto md:pb-[80px] lg:pb-0 lg:h-auto xl:h-[calc(100vh-152px)] rounded-lg bg-[#F8F9F9] flex-col items-center justify-start relative">
      <div className="overflow-y-scroll hideScroll w-full h-full flex flex-col scroll-smooth px-5 lg:px-0">
        <div className='py-5 md:px-5 md:bg-white rounded-lg flex flex-col w-full pb-5 md:mb-5'>
          <Link href='/expert/qualification/general' className='font-medium md:hidden text-base text-cf-400 fcc justify-start mb-8'>
            <HiOutlineChevronRight size={18} className='ml-1' />
            احراز صلاحیت
          </Link>

          <div className='fcc h-[120px] mb-5'>
            <div className='relative h-full w-[120px] rounded-lg overflow-hidden'>
              <Image
                src={'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg'}
                fill={true}
                className='object-cover h-full w-full'
                alt='services'
              />
            </div>
          </div>

          <div className='fcc flex-col w-full'>
            <div className='fcc mb-4'>
              <div className='font-medium text-sm'>سرویس :</div>
              <div className='font-bold text-sm mr-2 text-cf-300'>نقاشی</div>
            </div>
            <div className='fcc mb-4'>
              <div className='font-medium text-sm'>نوع سرویس :</div>
              <div className='font-bold text-sm mr-2 text-cf-300'>نقاشی</div>
            </div>
            <div className='fcc mb-4'>
              <div className='font-medium text-sm'>سطح شما در این سرویس :</div>
              <div className='font-bold text-sm mr-2 text-cf-300'>نقاشی</div>
            </div>
            <div className='fcc mb-4 font-bold text-sm'>
              <div className='font-medium text-sm ml-2'>وضعیت سرویس :</div>
              {state === 0 ?
                <div className='flex items-center'>
                  <span className='text-cf-300'>تایید صلاحیت شده</span>
                  <HiCheckCircle size={16} className='mr-1 text-primary-500' />
                </div> :
                state === 1 ?
                  <div className='flex items-center'>
                    <span className='text-cf-300'>در انتظار تایید</span>
                    <HiExclamationCircle size={16} className='mr-1 text-warning' />
                  </div> :
                  state === 2 ?
                    <div className='flex items-center'>
                      <span className='text-cf-300'>تایید صلاحیت نشده</span>
                      <HiXCircle size={16} className='mr-1 text-red-500' />
                    </div> : ''
              }
            </div>
          </div>

          <div className='w-full h-px bg-cf-200 my-5'></div>

          <div className='flex text-primary-500 mt-3'>
            <HiBadgeCheck className='flex shrink-0 ml-2' size={20} />
            <div className='font-medium text-xs'>
              این علامت نشاد دهنده این می باشد که پاسخ یا پاسخ هایی که شما در این بخش دادید مورد تایید ادمین می باشد و احراز صلاحیت شما در این بخش انجام شده است.
            </div>
          </div>

          <div className='flex text-warning my-5'>
            <HiExclamation className='flex shrink-0 ml-2' size={20} />
            <div className='font-medium text-xs'>
              این علامت نشاد دهنده این می باشد که به سوالات این بخش پاسخ نداده اید یا پاسخ هایی که شما در این بخش دادید مورد تایید ادمین نمی باشد و باید آنها را ویرایش کنید.
            </div>
          </div>

          {
            [1, 1, 1, 1].map((item, i) => (
              <Items
                key={i}
                state={0}
              />
            ))
          }

          <div className='fcc mt-10 text-sm font-medium'>
            <div className='fcc cursor-pointer text-cf-300'>
              <div>غیرفعال کردن این سرویس</div>
              <HiOutlineBan className='mr-2' size={20} />
            </div>

            <div className='h-4 w-px bg-cf-200 mx-4 rounded-full'></div>

            <div className='fcc cursor-pointer text-red-500'>
              <div>حذف سرویس</div>
              <HiTrash  className='mr-2' size={20} />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Page