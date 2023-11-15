import React from 'react'
// components
import InfoCard from "@/app/_components/InfoCard"
import ServicesCard from "../../_components/ServicesCard"
// redux
import { useSelector } from 'react-redux'
// function 
import formatPrice from "@/src/functions/formatPrice"

function Tenders({ data }) {
    console.log("Tenders", data)
    const type_job = useSelector(state => state.staticVariable.type_job)

    const type = (requestType) => {
        const result = type_job.find((item) => item.id === requestType)
        return result.text;
    }

    return (
        <div className='w-full'>
            <InfoCard styleCustom="text-blue-600 w-full">
                در این صفحه سفارشاتی که شما در مناقصه شرکت کردید را می توانید ببینید در صورت برنده شدن سفارش شما به سربرگ سفارشات فعال می رود و در غیر این صورت در گزارشات شما قرار می گیرد.
            </InfoCard>
            <ul className='w-full grid grid-cols-12 gap-3 mt-10'>
                {
                    data.map((item) => (
                        <ServicesCard
                            key={item.id}
                            state={"Tenders"}
                            src={item.job_minimal ? item.job_minimal : item.job_mainPicture}
                            title={item.job_name}
                            serviceType={type(item.requestType)}
                            address={item.address}
                            time={item.time_Reminding_Seconds_SelectExpert * 1000}
                            price={formatPrice(item.priceExpert.priceMaterial + item.priceExpert.priceWage)}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default Tenders