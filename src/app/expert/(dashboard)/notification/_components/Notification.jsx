import Link from 'next/link'
import React from 'react'

function Notification() {
    return (
        <div className='border-b border-cf-200 px-5 pl-0 flex justify-between bg-white'>
            <div className='flex py-5'>
                <div>
                    <div className='w-[60px] h-[60px] bg-black rounded-full'>

                    </div>
                </div>
                <div className='py-1 flex flex-col px-5'>
                    <div className='font-bold text-base'>سفارش شما از سمت مشتری لغو شد!</div>
                    <div className='font-medium text-sm text-cf-300 mb-3 mt-2'>برای مشاهده علت و مشخصات پروژه کلیک کنید.</div>
                    <Link className='font-medium text-sm text-blue-600' href={'#'} >مشاهده</Link>
                    <span className='font-normal text-xs text-cf-300 mt-4'>۲۸ شهریور ۱۴۰۱ ساعت ۱۸:۵۵</span>
                </div>
            </div>

            <Link href={'#'} className='font-bold text-base text-blue-600 fcc px-5 border-r border-r-cf-200'>
                پاسخ
            </Link>
        </div>
    )
}

export default Notification