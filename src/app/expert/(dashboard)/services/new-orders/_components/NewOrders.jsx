import React from 'react'
// components
import InfoCard from "@/app/_components/InfoCard"
import InputFilter from "./InputFilter"
import ServicesCard from "../../_components/ServicesCard"
//redux
import { useSelector } from "react-redux";


function NewOrders({ data }) {
    console.log("NewOrder", data)
    const type_job = useSelector(state => state.staticVariable.type_job)

    const type = (requestType) => {
        const result = type_job.find((item) => item.id === requestType)
        return result.text;
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
                            src={item.job_minimal ? item.job_minimal : item.job_mainPicture}
                            title={item.job_name}
                            serviceType={type(item.requestType)}
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