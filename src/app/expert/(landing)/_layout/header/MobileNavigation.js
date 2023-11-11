import React, { useState, useEffect } from 'react'
import Link from 'next/link'
//react icon
import { HiUsers, HiFolder, HiPresentationChartLine, HiOutlineChevronLeft } from 'react-icons/hi'
import { HiWrenchScrewdriver } from 'react-icons/hi2'
//assets
//components
import MobileSubNavigation from './MobileSubNavigation'

function MobileNavigation(props) {
    const [activeMenu, setActiveMenu] = useState(false)

    //close submenu when close mobile menu
    useEffect(() => {
        !props.hamburgerMenuIsActive && setActiveMenu(false)
    }, [props.hamburgerMenuIsActive])

    //toggle subNav handler
    const subNavClickHandler = (i) => {
        const mobileSubNav = document.getElementsByClassName('mobileSubNav')
        const navItem = document.getElementsByClassName('navItem')
        const arrowItem = document.getElementsByClassName('arrowItem')

        if (mobileSubNav[i].style.display === 'flex') {
            mobileSubNav[i].style.display = 'none'
            arrowItem[i].style.transform = 'rotate(0deg)'
            navItem[i].style.color = '#636466'
        } else {
            mobileSubNav[i].style.display = 'flex'
            navItem[i].style.color = '#45B649'
            arrowItem[i].style.transform = 'rotate(-90deg)'
        }
    }

    return (
        <div className={`top-[138px] right-0 w-full h-[calc(100vh-138px)] absolute z-40 flex lg:hidden ${props.hamburgerMenuIsActive ? 'flex' : 'hidden'}`}>
            <div className={`customScrollbar bg-white overflow-y-auto absolute h-full z-40 transition-all py-4 top-0 w-full ${props.hamburgerMenuIsActive ? 'right-0' : 'right-[-100%]'} text-color-font-2`}>
                <ul className='w-full flex items-start justify-center flex-col bg-white text-sm py-2'>
                    <span onClick={() => { setActiveMenu(!activeMenu) }} className={`px-4 cursor-pointer py-4 text-black font-medium text-sm flex items-center ${activeMenu ? 'text-primary-500' : ''}`}>
                        <HiWrenchScrewdriver size={20} className='ml-2' />
                        خدمات ساختمانی
                        <HiOutlineChevronLeft size={16} className={`mr-2 ${activeMenu ? '-rotate-90' : ''}`} />
                    </span>
                    {activeMenu &&
                        props.subMenuData.openClose.map((items, i) => (
                            <MobileSubNavigation
                                key={i}
                                id={i}
                                items={items}
                                subNavClickHandler={subNavClickHandler}
                                setHamburgerMenuIsActive={props.setHamburgerMenuIsActive}
                            />
                        ))}

                    {props.subMenuData.topMenu && props.subMenuData.topMenu.map((item) => (
                        <li key={item.id}>
                            <Link href={`/categories/${item.slug}/`} className='px-4 py-4 text-black font-medium text-sm flex mr-[26px]'>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <span className='w-[90%] h-px bg-gray-300 flex m-auto my-4 font-medium text-sm'></span>
                <ul className='w-full flex items-start justify-center flex-col bg-white text-sm py-4'>
                    <li>
                        <Link href='https://profile.kargosha.com/' className='px-4 flex justify-start items-center h-[45px] cursor-pointer w-full relative'>
                            <HiUsers size={20} className='ml-4' />
                            دیده شو
                        </Link>
                    </li>
                    <li>
                        <Link href='https://shop.kargosha.com/' className='px-4 flex justify-start items-center h-[45px] cursor-pointer w-full relative'>
                            <HiFolder size={20} className='ml-4' />
                            فروشگاه فایل
                        </Link>
                    </li>
                    <li>
                        <Link href='https://kargosha.com/material' className='px-4 flex justify-start items-center h-[45px] cursor-pointer w-full relative'>
                            <HiPresentationChartLine size={20} className='ml-4' />
                            قیمت های روز
                        </Link>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default MobileNavigation

