import React from 'react'
// components
import InfoCard from "/src/app/_components/InfoCard"
import ServicesCard from "../../_components/ServicesCard"
// redux
import { useSelector } from 'react-redux'
// function 
import convertToJalali from "/src/functions/convertToJalali"

function ActiveOrders({ data }) {
  const type_job = useSelector(state => state.staticVariable.type_job)

  const type = (requestType) => {
    const result = type_job.find((item) => item.id === requestType)
    return result.text;
  }

  return (
    <div className='w-full'>
      <InfoCard styleCustom="text-blue-600 w-full">
        در این صفحه سرویس هایی که شما برنده آن شده اید را می توانید ببینید و برای شروع پروژه برنامه ریزی و اقدام فرمایید.
      </InfoCard>
      <ul className='w-full grid grid-cols-12 gap-3 mt-10'>
        {
          data.map((item) => (
            <ServicesCard
              key={item.id}
              state={"Active"}
              src={item.job_minimal ? item.job_minimal : item.job_mainPicture}
              title={item.job_name}
              serviceType={type(item.requestType)}
              address={item.address}
              startTime={convertToJalali(item.dateTimeRequest).watch}
              startDate={convertToJalali(item.dateTimeRequest).date}
            />
          ))
        }
      </ul>
    </div>
  )
}

export default ActiveOrders