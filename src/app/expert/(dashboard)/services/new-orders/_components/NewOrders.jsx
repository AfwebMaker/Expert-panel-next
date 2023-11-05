import React from 'react'
// components
import InfoCard from "@/app/_components/InfoCard"
import InputFilter from "./InputFilter"
import TimerDown from "./TimerDown"
import ServicesCard from "../../_components/ServicesCard"

function NewOrders() {
    return (
        <div className='w-full'>
            <InfoCard styleCustom="text-blue-600 w-full">
                از دکمه فیلتر از سمت چب در نوار جستجو برای فیلتر در نسخه دسکتاپ استفاده کنید.
            </InfoCard>
            <InputFilter />
            {/* <TimerDown time={2 * 24 * 60 * 60 * 1000} /> */}
            <ServicesCard />
        </div>
    )
}

export default NewOrders