"use client"

import React, { useState, useRef } from 'react'
import Link from 'next/link'
//react icon
import { HiPencilAlt, HiOutlineChevronRight, HiOutlineCloudUpload, HiOutlineFingerPrint } from 'react-icons/hi'
//components
import InformationForm from './_components/InformationForm'
import SwitchInput from '@/app/_components/SwitchInput'
import LegalForm from './_components/LegalForm'

function page() {
  const [LegalFormIsActive, setLegalFormIsActive] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const previewImageBox = useRef()

  const inputImageHandler = (e) => {
    const [file] = e.target.files

    if (file) {
      console.log(file)
      previewImageBox.current.src = URL.createObjectURL(file)
    }
  }

  return (
    <div className='py-5'>
      <div className='flex items-center justify-between mb-10'>
        <Link href='/expert/profile/' className='fcc'>
          <HiOutlineChevronRight className='text-cf-400' />
          <div className='mr-1 text-cf-300 font-medium'>تنظیمات</div>
        </Link>
      </div>
      <div className='w-full fcc flex-col mb-10'>
        <div className='bg-black w-[150px] h-[150px] rounded-full mb-5'>

        </div>
        <div className='fcc text-primary-500'>
          <div className='ml-1'>
            <HiPencilAlt />
          </div>
          <div className='font-medium text-sm'>ویرایش عکس پروفایل</div>
        </div>
      </div>

      <InformationForm />

      <div className='flex flex-col my-10 px-1'>
        <span className='fcc font-normal text-xs text-cf-300 mb-5'>در صورتی که شما به عنوان یه شخص حقوقی (شرکت های پیمانکاری، خصوصی و ...) می خواهید اهراز هویت کنید شناسه ملی شرکت خود را در این قسمت وارد کنید.
        </span>
        <div className='flex flex-col'>
          <div className='flex justify-between items-center mb-2'>
            <div className='font-medium text-sm'>کاربر حقوقی هستم</div>
            <SwitchInput setLegalFormIsActive={setLegalFormIsActive} />
          </div>

          {LegalFormIsActive && <LegalForm />}
        </div>
      </div>

      <div className='font-medium text-sm text-cf-300 mb-10'>
        <div className='text-cf-500 mb-5'>مدارک</div>
        <div className='mb-5'>تصویر گواهی عدم سو پیشینه</div>
        <div className='mb-5 font-normal text-xs'>
          مدارک شامل اسناد تصویری می باشد که شما باید آنها را به صورت یکی از فرمت های JPG , JPEG , PNG آپلود کنید.
        </div>

        <div className='uploadBorder w-full h-[150px] rounded-lg border-cf-400 relative overflow-hidden fcc'>
          <input onChange={inputImageHandler} className='absolute z-10 w-full h-full opacity-0' type="file" />
          <img ref={previewImageBox} className='brightness-75 fcc w-[98%] h-[95%] absolute object-cover rounded-lg' src='' alt="" />
          <div className='absolute fcc w-full h-full top-0 p-5'>
            <div className='ml-2'>
              <HiOutlineCloudUpload strokeWidth={1} size={70} className='text-gray-400' />
            </div>
            <div>
              <div className='mb-2 font-bold text-sm'>آپلود کردن عکس</div>
              <div className='font-medium text-xs'>عکس را به صورت یکی از فرمت ها PNG , JPG , JPEG , Tiff در این قسمت آپلود کنید.</div>
            </div>
          </div>
        </div>
      </div>

      <button className='bg-primary-500 rounded-md w-full fcc text-white h-11'>
        <div>
          <HiOutlineFingerPrint size={20} />
        </div>
        <div className='mr-2 font-bold text-base'>ثبت و احراز هویت</div>
      </button>

    </div>
  )
}

export default page