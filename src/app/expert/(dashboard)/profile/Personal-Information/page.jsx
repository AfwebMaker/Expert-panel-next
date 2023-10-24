'use client'

import React, { useState } from 'react'
import Link from 'next/link'
//react icon
import { HiPencilAlt, HiOutlineChevronRight } from 'react-icons/hi'
//components
import Forms from './_components/Forms'
import Image from 'next/image'
// function
import getCookie from '@/src/functions/getCookie'
import axios from 'axios'
import toast from 'react-hot-toast'
//loading redux
import { useDispatch } from 'react-redux';
import { loadingHandler } from '@/src/redux/features/layout/layoutConfigSlice';

function page() {
  const dispatch = useDispatch()
  const [avatar, setAvatar] = useState(null);
  const fileInputHandler = (e) => {
    const files = Array.from(e.target.files);
    const formData = new FormData();
    formData.append("file", files[0]);

    dispatch(loadingHandler(true))
    axios.post(
      `${process.env.NEXT_PUBLIC_file_kg_local}/uploadFile`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${getCookie("TOKEN")}`,
        },
      }
    )
      .then(res => {
        setAvatar(res.data.data.url)
      })
      .catch(err => {
        dispatch(loadingHandler(false))
        if (err.response.status === 413) {
          console.log(err)
          toast.error('حجم فایل بیش از حد مجاز  است.')
        }
      })
  }

  return (
    <div className="w-full h-[calc(100vh-138px)] lg:h-auto xl:h-[calc(100vh-110px)] rounded-lg bg-[#F8F9F9] flex flex-col items-center justify-start relative">
      <div className="overflow-y-scroll hideScroll w-full h-full flex flex-col scroll-smooth px-5 lg:px-0">
        <div className='py-5 lg:px-5 lg:bg-white rounded-lg flex flex-col w-full pb-5 lg:mb-5'>
          <div className='flex items-center justify-between mb-10 lg:hidden'>
            <Link href='/expert/profile/' className='fcc'>
              <HiOutlineChevronRight className='text-cf-400' />
              <div className='mr-1 text-cf-300 font-medium'>تنظیمات</div>
            </Link>
          </div>
          <div className='w-full fcc flex-col mb-10'>
            <div className='w-[150px] h-[150px] rounded-full mb-5 overflow-hidden relative'>
              <Image
                onLoad={() => { dispatch(loadingHandler(false)) }}
                src={avatar ? avatar : 'https://iconape.com/wp-content/png_logo_vector/bank-mellat-logo.png'}
                alt='avatar'
                className='object-cover w-full h-full'
                fill
              />
            </div>
            <div className='fcc text-primary-500'>
              <div className='ml-1'>
                <HiPencilAlt />
              </div>
              <label className='cursor-pointer' htmlFor="upload_avatar">ویرایش عکس پروفایل</label>
              <input onChange={fileInputHandler} className='hidden' id='upload_avatar' type="file" />
            </div>
          </div>

          <Forms setAvatar={setAvatar} avatar={avatar} />
        </div>
      </div>
    </div>
  )
}

export default page