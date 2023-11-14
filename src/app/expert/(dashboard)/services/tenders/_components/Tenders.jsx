import React from 'react'
// components
import InfoCard from "@/app/_components/InfoCard"
import ServicesCard from "../../_components/ServicesCard"

function Tenders({ data }) {
    console.log("Tenders", data)

    function serviceType(number) {
        let status;
        switch (number) {
            case 1:
                status = "فنی و آیتمی";
                break;
            case 2:
                status = "روز مزد";
                break;
            case 3:
                status = "خدمات فوری";
                break;
            case 4:
                status = "خرده کار";
                break;
            case 5:
                status = "پیمان کار";
                break;
            case 6:
                status = "بازسازی";
                break;
            default:
                status = "نا معلوم"
        }
        return status;
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
                            serviceType={serviceType(item.requestType)}
                            address={item.address}
                            time={item.time_Reminding_Seconds_SelectExpert * 1000}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default Tenders