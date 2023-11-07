import React from 'react'
// components
import InfoCard from "@/app/_components/InfoCard"
import InputFilter from "./InputFilter"
import ServicesCard from "../../_components/ServicesCard"

function NewOrders() {
    return (
        <div className='w-full'>
            <InfoCard styleCustom="text-blue-600 w-full">
                از دکمه فیلتر از سمت چب در نوار جستجو برای فیلتر در نسخه دسکتاپ استفاده کنید.
            </InfoCard>
            <InputFilter />
            <ul className='w-full grid grid-cols-12 gap-3 mt-10'>
                <ServicesCard state={"New"} title={"نصب و اجرای شیشه دو جداره"} serviceType={"خدمات فوری"}/>
            </ul>
        </div>
    )
}

export default NewOrders