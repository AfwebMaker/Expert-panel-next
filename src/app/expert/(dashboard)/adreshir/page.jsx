import Image from 'next/image'
import React from 'react'

import Banner_Image from '@/public/images/Banner_Image.png'

const data = [
    {
        id: 1,
        src: "",
        title: "نقاشی"
    },
    {
        id: 2,
        src: "",
        title: "لوله کشی"
    },
    {
        id: 3,
        src: "",
        title: "گچ کاری"
    },
    {
        id: 4,
        src: "",
        title: "باغبانی"
    },
]

function Page() {
    return (
        <div className='w-full max-w-[1300px] gap-0 fcc bg-gray-200 justify-start pl-10 rounded-xl'>
            <div className='w-[280px] h-[120px] fcc flex-shrink-0'>
                <Image src={Banner_Image}/>
            </div>
            <div className='w-full fcc justify-start'>
                <span className='text-primary-500 font-bold text-2xl'>سرویس های تخفیفی خدمات فوری کارگشا</span>
            </div>
            <div className='w-full gap-10 fcc'>
            <div className='fcc gap-3'>
                {data && data.map((item,i) => (
                    <div key={i} className='w-[70px] h-[70px] bg-primary-400 rounded-full relative'>
                        <Image src={item.src} />
                        <div className='bg-rose-500 rounded-lg fcc px-2 py-0.5 absolute -right-3 bottom-0'>
                            <span className='text-[10px] font-medium bg text-white'>{item.title}</span>
                        </div>
                    </div>
                ))}
            </div>
            <button className='hover:text-white hover:bg-gray-300  duration-300 text-lg font-medium text-primary-500 bg-white fcc px-3 py-1 rounded-lg flex-shrink-0'>
                بیشتر ...
            </button>
            </div>
        </div>
    )
}

export default Page