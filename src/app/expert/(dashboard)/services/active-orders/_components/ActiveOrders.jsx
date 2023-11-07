import React from 'react'
// components
import InfoCard from "@/app/_components/InfoCard"
import ServicesCard from "../../_components/ServicesCard"

function ActiveOrders() {
  return (
    <div className='w-full'>
      <InfoCard styleCustom="text-blue-600 w-full">
        در این صفحه سرویس هایی که شما برنده آن شده اید را می توانید ببینید و برای شروع پروژه برنامه ریزی و اقدام فرمایید.
      </InfoCard>
      <ul className='w-full grid grid-cols-12 gap-3 mt-10'>
        <ServicesCard state={"Active"} title={"نصب و اجرای شیشه دو جداره"} serviceType={"خدمات فوری"} />
      </ul>
    </div>
  )
}

export default ActiveOrders