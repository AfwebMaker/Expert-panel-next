import React from 'react'
//components
import UploadContain from '@/app/_components/UploadContain'

function UploadFile() {
    return (
        <div className='font-medium text-sm text-cf-300 mb-10'>
            <div>
                <div className='text-cf-500 mb-5'>مدارک سکونتی</div>
                <div className='mb-5'>تصویر سند خانه یا اجاره نامه</div>
                <div className='mb-5 font-normal text-xs'>
                    مدارک شامل اسناد تصویری می باشد که شما باید آنها را به صورت یکی از فرمت های JPG , JPEG , PNG آپلود کنید.
                </div>
            </div>

            <UploadContain multiple={true} accept="image/png, image/jpeg" />
        </div>
    )
}

export default UploadFile