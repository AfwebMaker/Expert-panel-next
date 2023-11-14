'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
//react icons
import { HiOutlineUserCircle, HiOutlineMenuAlt4, HiOutlineX, HiOutlineBell, HiOutlineMail, HiUserCircle, HiOutlineUser } from 'react-icons/hi'
//assets
import Kargosha_Logo from '@/public/images/public/logo/Kargosha_Logo.svg'
import user from '@/public/icons/user_landing.svg'
//components
import MobileNavigation from './MobileNavigation'
import ProfileDropdown from "./ProfileDropdown"
import ProfileMobile from './ProfileMobile'
import Loading from '@/src/app/_components/Loading';
//function
import getCookie from '@/src/functions/getCookie'
//services
import profileBase from '@/src/services/person_kg_local/profileBase'
import openClose from '@/src/services/category_kg_local/openClose'

function Header() {
  const isLogin = getCookie("TOKEN")
  const [data, setData] = useState({})
  const [subMenuData, setSubMenuData] = useState({})
  const [loadingPage, setLoadingPage] = useState(true)
  const [hamburgerMenuIsActive, setHamburgerMenuIsActive] = useState(false);
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [profileMobileActive, setProfileMobileActive] = useState(false)


  useEffect(() => {
    profileBase()
      .then((res) => {
        setData(res.data.data)
      })
      .catch(() => {
      })
      .finally(() => {
        setLoadingPage(false)
      })
  }, [])

  useEffect(() => {
    openClose()
      .then((res) => {
        setSubMenuData(res.data.data)
      })
      .catch(() => {
      })
      .finally(() => {
        setLoadingPage(false)
      })
  }, [])

  //detect scrollTop largest 100 or not
  useEffect(() => {
    const onScroll = window.addEventListener('scroll', (e) => {
      setMenuIsActive(e.target.documentElement.scrollTop > 100);
    });

    return () => window.removeEventListener('scroll', onScroll);
  }, [menuIsActive]);

  return (
    <header className={`w-full flex justify-start items-center fixed z-50 bg-white flex-col lg:h-[80px] h-auto ${menuIsActive ? 'shadow-xl' : 'shadow-xl lg:shadow-none'}`} >
      {loadingPage && <Loading />}
      <div className={`relative maxLayout flex justify-between items-center w-full z-50 transition-all bg-white ${menuIsActive ? 'lg:h-[80px] h-full' : 'h-full'}`}>
        <div className={`${menuIsActive ? "" : "shadow-none"} relative maxLayout flex justify-between items-center w-full px-5 z-50 bg-white h-[60px] lg:h-full`}>
          <Link href="https://kargosha.com/" className='h-full flex items-center lg:justify-center justify-between'>
            <Image src={Kargosha_Logo} height={35} alt='kargosha logo' className='ml-4' />
          </Link>

          {!isLogin ?
            <div className='text-sm flex justify-center items-center text-cf-400'>
              <div className='fcc lg:hidden'>
                {!profileMobileActive ?
                  <HiOutlineUserCircle className='cursor-pointer' onClick={() => { setProfileMobileActive(!profileMobileActive); setHamburgerMenuIsActive(false) }} size={24} /> :
                  <HiUserCircle className='cursor-pointer text-primary-500' onClick={() => { setProfileMobileActive(!profileMobileActive) }} size={24} />
                }
                <div className='w-[2px] bg-cf-400 h-4 mx-4'></div>
                {!hamburgerMenuIsActive ?
                  <HiOutlineMenuAlt4 className='cursor-pointer' onClick={() => { setHamburgerMenuIsActive(!hamburgerMenuIsActive); setProfileMobileActive(false) }} size={24} /> :
                  <HiOutlineX className='cursor-pointer' size={24} onClick={() => { setHamburgerMenuIsActive(!hamburgerMenuIsActive) }} />
                }
              </div>
              <div className='hidden lg:fcc'>
                {/* <div className='fcc'>
                  <Link href='/expert/tickets'>
                    <HiOutlineMail className='ml-5 text-cf-300 cursor-pointer' size={24} />
                  </Link>
                  <Link href='/expert/notification/orders'>
                    <HiOutlineBell className='text-cf-300 cursor-pointer' size={24} />
                  </Link>
                </div>
                <span className='w-[2px] h-7 rounded-full bg-gray-300 block mx-4'></span> */}
                <ProfileDropdown data={data} />
              </div>
            </div>
            :
            <div className='text-sm flex justify-center items-center text-cf-400'>
              <div className='fcc lg:hidden'>
                <Link href='/expert/login'>
                  <HiOutlineUserCircle className='cursor-pointer' size={24} />
                </Link>
                <div className='w-[2px] bg-cf-400 h-4 mx-4'></div>
                {!hamburgerMenuIsActive ?
                  <HiOutlineMenuAlt4 className='cursor-pointer' onClick={() => { setHamburgerMenuIsActive(!hamburgerMenuIsActive); setProfileMobileActive(false) }} size={24} /> :
                  <HiOutlineX className='cursor-pointer' size={24} onClick={() => { setHamburgerMenuIsActive(!hamburgerMenuIsActive) }} />
                }
              </div>
              <div className='hidden lg:fcc'>
                <Link href='https://kargosha.com' className='fcc ml-6'>
                  <Image src={user} alt='helmet' size={10} className='ml-1 w-6 h-6' />
                  <div>کاربر هستم</div>
                </Link>
                <Link href='/expert/login' className='bg-primary-500 rounded-md text-white w-[115px] h-[38px] fcc'>
                  عضویت یا ورود
                </Link>
              </div>
            </div>
          }
        </div>

        <MobileNavigation
          subMenuData={subMenuData}
          setHamburgerMenuIsActive={setHamburgerMenuIsActive}
          hamburgerMenuIsActive={hamburgerMenuIsActive}
        />

        <ProfileMobile
          data={data}
          profileMobileActive={profileMobileActive}
        />
      </div>

    </header>
  )
}

export default Header;