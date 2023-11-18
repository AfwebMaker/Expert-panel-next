'use client'

import React from 'react'
//components
import Services from '../_components/Services'
import MainMobileNavigation from '../_components/MainMobileNavigation'
//react icons
import { HiOutlineColorSwatch } from 'react-icons/hi'

function Page() {
  const products = [
    {
      id: 1,
      name: 'نقاشی',
      state: 0,
      href: '/expert/qualification/services/1',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg',
      imageAlt:
        'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
    },
    {
      id: 2,
      name: 'نقاشی',
      state: 0,
      href: '/expert/qualification/services/2',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg',
      imageAlt:
        'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
    },
    {
      id: 3,
      name: 'نقاشی',
      state: 0,
      href: '/expert/qualification/services/3',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg',
      imageAlt:
        'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
    },
    {
      id: 4,
      name: 'نقاشی',
      state: 0,
      href: '/expert/qualification/services/4',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg',
      imageAlt:
        'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
    },
    {
      id: 5,
      name: 'نقاشی',
      state: 0,
      href: '/expert/qualification/services/5',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg',
      imageAlt:
        'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
    }
  ]

  return (
    <div className="flex w-full h-[calc(100vh-138px)] md:h-auto md:pb-[80px] lg:pb-0 lg:h-auto xl:h-[calc(100vh-152px)] rounded-lg bg-[#F8F9F9] flex-col items-center justify-start relative">
      <MainMobileNavigation />
      <div className="overflow-y-scroll hideScroll w-full h-full flex flex-col scroll-smooth px-5 lg:px-0">
        <div className='py-5 md:px-5 md:bg-white rounded-lg flex flex-col w-full pb-5 md:mb-5'>
          <div className='w-full text-primary-500 mb-8 hidden md:fcc'>
            سرویس های تایید صلاحیت شده
            <HiOutlineColorSwatch size={24} className='mr-2 font-bold text-lg' />
          </div>
          <div className='text-sm font-bold'>سرویس های تایید صلاحیت شده</div>
          <div className='text-cf-300 font-medium text-xs my-3'>
            در این بخش شما سرویس هایی که در آن احراز صلاحیت شما تایید شده است را مشاهده می کنید و در این ضمینه کار ها به شما ارجاع داده می شود.
          </div>
          <Services products={products} />
        </div>
      </div>
    </div>
  )
}

export default Page