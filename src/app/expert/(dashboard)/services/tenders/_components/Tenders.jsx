import React from 'react'
// components
import InfoCard from "@/app/_components/InfoCard"
import ServicesCard from "../../_components/ServicesCard"

function Tenders() {
    return (
        <div className='w-full'>
            <InfoCard styleCustom="text-blue-600 w-full">
                در این صفحه سفارشاتی که شما در مناقصه شرکت کردید را می توانید ببینید در صورت برنده شدن سفارش شما به سربرگ سفارشات فعال می رود و در غیر این صورت در گزارشات شما قرار می گیرد.
            </InfoCard>
            <ul className='w-full grid grid-cols-12 gap-3 mt-10'>
                <ServicesCard state={"Tenders"} title={"نصب و اجرای شیشه دو جداره"} serviceType={"خدمات فوری"} />
            </ul>
        </div>
    )
}

export default Tenders