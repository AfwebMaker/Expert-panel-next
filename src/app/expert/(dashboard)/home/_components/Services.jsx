import React from 'react'
//react icons
import { HiOutlineIdentification, HiOutlineBadgeCheck, HiOutlineCreditCard, HiOutlineClipboard, HiOutlineClipboardList, HiOutlineClipboardCopy, HiOutlineClipboardCheck, HiOutlineSpeakerphone } from "react-icons/hi";

function Services() {
    const dataServices = [
        {
            id: 1,
            title: "نماینده من",
            color: "#EC4899",
            icon: <HiOutlineIdentification size={24} />
        },
        {
            id: 2,
            title: "احراز صلاحیت",
            color: "#3B82F6",
            icon: <HiOutlineBadgeCheck size={24} />
        },
        {
            id: 3,
            title: "کیف پول",
            color: "#FBBF24",
            icon: <HiOutlineCreditCard size={24} />
        },
        {
            id: 4,
            title: "سفارشات جدید",
            color: "#45B649",
            icon: <HiOutlineClipboardCopy size={24} />
        },
        {
            id: 5,
            title: "مناقصات",
            color: "#8B5CF6",
            icon: <HiOutlineSpeakerphone size={24} />
        },
        {
            id: 6,
            title: "سفارشات فعال",
            color: "#EC4899",
            icon: <HiOutlineClipboardList size={24} />
        },
        {
            id: 7,
            title: "سفارشات تمام شده",
            color: "#45B649",
            icon: <HiOutlineClipboardCheck size={24} />
        },
        {
            id: 8,
            title: "سفارشات لفو شده",
            color: "#F43F5E",
            icon: <HiOutlineClipboard size={24} />
        },
    ]

    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className='text-sm md:text-lg font-bold text-primary-500'>خدمات</div>
                {/* <div className='font-bold text-xl text-blue-500 fcc'>...</div> */}
            </div>
            <div className='grid grid-cols-12 py-5 gap-y-8'>
                {
                    dataServices.map(item => (
                        <div key={item.id} className='flex items-center justify-start flex-col col-span-3'>
                            <div style={{ backgroundColor: item.color + "33", color: item.color }} className={`w-11 h-11 rounded-full fcc`}>
                                {item.icon}
                            </div>
                            <span className='mt-2 bg font-medium text-xs text-cf-400 text-center px-1'>{item.title}</span>
                        </div>
                    ))
                }
                {/* <div className='fcc flex-col col-span-3'>
                    <div className='w-11 h-11 bg-yellow-500/20 text-yellow-500 rounded-full fcc'>
                        <HiOutlineDotsHorizontal size={24} />

                    </div>
                    <span className='mt-2 font-medium text-xs'>بیشتر</span>
                </div> */}

            </div>
        </div>
    )
}

export default Services