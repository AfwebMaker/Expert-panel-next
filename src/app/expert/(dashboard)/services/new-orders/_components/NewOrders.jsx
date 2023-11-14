import React from 'react'
// components
import InfoCard from "@/app/_components/InfoCard"
import InputFilter from "./InputFilter"
import ServicesCard from "../../_components/ServicesCard"

function NewOrders({ data }) {
    console.log("NewOrder", data)

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
                از دکمه فیلتر از سمت چب در نوار جستجو برای فیلتر در نسخه دسکتاپ استفاده کنید.
            </InfoCard>
            <InputFilter />
            <ul className='w-full grid grid-cols-12 gap-3 mt-10'>
                {
                    data.map((item) => (
                        <ServicesCard
                            key={item.id}
                            state={"New"}
                            src={item.job_minimal ? item.job_minimal : item.job_mainPicture }
                            title={item.job_name}
                            serviceType={serviceType(item.requestType)}
                            address={item.address}
                            meterage={item.area}
                            description={item.description}
                            time={item.time_Reminding_Seconds_GetPrice * 1000}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default NewOrders