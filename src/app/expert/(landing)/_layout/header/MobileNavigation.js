import React from 'react'
import Link from 'next/link'
//react icon
import { HiOutlineLogin, HiOutlineUser } from 'react-icons/hi'

function MobileNavigation(props) {
    return (
        <div className={`top-[60px] right-0 w-full h-[calc(100vh-60px)] absolute z-40 flex lg:hidden ${props.hamburgerMenuIsActive ? 'flex' : 'hidden'}`}>
            <div className={`customScrollbar bg-white overflow-y-auto absolute h-full z-40 transition-all py-4 top-0 w-full ${props.hamburgerMenuIsActive ? 'right-0' : 'right-[-100%]'} text-color-font-2`}>
                <ul className='w-full flex items-start justify-center flex-col bg-white text-sm py-4'>
                    <li>
                        <Link href='https://profile.kargosha.com/' className='px-4 flex justify-start items-center h-[45px] cursor-pointer w-full relative'>
                            <HiOutlineLogin size={20} className='ml-4' />
                            ورود | ثبت نام
                        </Link>
                    </li>
                    <li>
                        <Link href='https://shop.kargosha.com/' className='px-4 flex justify-start items-center h-[45px] cursor-pointer w-full relative'>
                            <HiOutlineUser size={20} className='ml-4' />
                            کاربری هستم
                        </Link>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default MobileNavigation;

