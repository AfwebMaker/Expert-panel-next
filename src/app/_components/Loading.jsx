import React from 'react'
//loading icon
import loadingIcon from '@/public/icons/KargoshaLoading.svg'
import Image from 'next/image'

function Loading() {

    return (
        <div className='w-screen h-screen bg-white/50 backdrop-blur-md inset-0 fixed z-[100] fcc flex-col gap-5'>
            <Image
                src={loadingIcon}
                width={80}
            />
            <span className='text-green-500 font-bold text-sm from-success'>
                صفحه در حال بارگذاری می باشد ...
            </span>
        </div>
    )
}

export default Loading