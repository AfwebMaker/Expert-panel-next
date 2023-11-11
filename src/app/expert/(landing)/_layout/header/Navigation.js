import React, { useState } from 'react'
import Link from 'next/link';
//assets
import { HiFolder, HiUsers, HiPresentationChartLine, HiTrendingUp, HiTrendingDown } from 'react-icons/hi'
import { HiWrenchScrewdriver } from 'react-icons/hi2'
import SubNavigation from './SubNavigation'

function Navigation(props) {
    const [subNavIsActive, setSunNavIsActive] = useState(false);

    // //disable body scroll when hamburger menu active
    // const body = document.getElementsByTagName('body')[0]
    // useEffect(() => {
    //     if (subNavIsActive) {
    //         body.style.overflowY = "hidden"
    //     } else {
    //         body.style.overflowY = "auto"
    //     }
    // }, [subNavIsActive, body.style]) 

    return (
        <>
            <nav className='absolute maxLayout w-full lg:flex hidden transition-all right-0 bg-white h-[40px] top-[60px] px-5 text-sm'>
                <ul className='fcc h-full text-color-font-2 font-medium text-sm text-gray-700'>
                    <li onMouseLeave={() => { setSunNavIsActive(false) }} onMouseEnter={() => { setSunNavIsActive(true) }} className='group fcc pl-4 cursor-pointer h-full'>
                        <HiWrenchScrewdriver size={20} className='ml-4' />
                        <span>خدمات ساختمانی</span>
                        {subNavIsActive && <SubNavigation subMenuData={props.subMenuData.openClose} setSunNavIsActive={setSunNavIsActive} />}
                    </li>

                    {props.subMenuData && props.subMenuData.topMenu && props.subMenuData.topMenu.map((item) => (
                        <li key={item.id} className='fcc px-4 cursor-pointer'>
                            <Link href={`/categories/${item.slug}`}>
                                {item.name}
                            </Link>
                        </li>
                    ))
                    }

                    <div className='h-3 w-px bg-gray-700 mx-5 rounded-full'></div>

                    <div className='w-[2px] h-3 bg-color-2'></div>
                    <li>
                        <Link href='https://shop.kargosha.com/' className='fcc px-4 cursor-pointer'>
                            <HiFolder size={20} className='ml-4' />
                            <span>فروشگاه فایل</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://profile.kargosha.com/' className='fcc px-4 cursor-pointer'>
                            <HiUsers size={20} className='ml-4' />
                            <span>دیده شو</span>
                        </Link>
                    </li>
                    <li className='fcc px-4 cursor-pointer relative group'>
                        <HiPresentationChartLine size={20} className='ml-4' />
                        <span>قیمت های روز</span>
                        <div className='absolute top-[100%] right-0 pt-5 hidden group-hover:flex'>
                            <div className='bg-white font-medium text-sm px-2 py-2 flex-col rounded-md shadow-xl border border-gray-200'>
                                <Link href='https://kargosha.com/material' className='hover:bg-primary-100 w-full px-6 py-2 rounded-md flex items-center'>
                                    <HiTrendingUp size={20} className='text-primary-500 ml-3' />
                                    <span className='whitespace-nowrap'>قیمت مصالح</span>
                                </Link>
                                <Link href='https://kargosha.com/wage' className='hover:bg-primary-100 w-full px-6 py-2 rounded-md flex items-center'>
                                    <HiTrendingDown size={20} className='text-red-500 ml-3' />
                                    <span className='whitespace-nowrap'>قیمت دستمزد</span>
                                </Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation