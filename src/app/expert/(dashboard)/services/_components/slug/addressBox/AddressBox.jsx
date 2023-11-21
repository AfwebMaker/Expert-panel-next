import React from 'react'
// components
import WarningCard from "@/app/_components/WarningCard"
// react icons
import { HiMap } from 'react-icons/hi'

function AddressBox() {
    return (
        <div className='bg-white w-full h-full p-5 lg:rounded-xl flex flex-col items-start justify-center gap-y-2 lg:shadow-lg'>
            <div className='flex w-full items-center gap-x-2 mb-5'>
                <HiMap className='text-primary-500 text-xl' />
                <span className='text-cf-300 text-xs'>آدرس و محل پروژه</span>
            </div>
            <WarningCard styleCustom="text-red-600 w-full">
                آدرس و مشخصات کارفرما پس از اینکه در مناقصه شرکت کنید و برنده مناقصه شوید برای شما به نمایش در خواد آمد.
            </WarningCard>
        </div>
    )
}

export default AddressBox