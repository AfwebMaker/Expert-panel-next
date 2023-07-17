import React from 'react'
//components
import Step from './Step'

function Steps({ currentStep, setCurrentStep }) {
  const stepInformation = [
    {
      number: 1,
      title: 'مرحله اول',
      description: 'اطلاعات اولیه'
    }, {
      number: 2,
      title: 'مرحله دوم',
      description: 'تعیین حوزه فعالیت'
    }, {
      number: 3,
      title: 'مرحله سوم',
      description: 'تعیین مناطق و شهر ها فعالیت'
    }, {
      number: 4,
      title: 'مرحله چهارم',
      description: 'تایید و ثبت نام'
    }
  ]

  return (
    <div className='w-full fcc'>
      <div className='relative w-[90%] pb-[10px] sm:pb-[70px] flex justify-between items-center'>
        {stepInformation.map((info) => (
          <Step
            key={info.number}
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
            information={info}
          />
        ))}

        <div className='absolute flex justify-start right-0 w-full h-1 bg-gray-300'>
          <div style={{ width: `${currentStep * 33.3}%` }} className='transition-all bg-secondary-500' ></div>
        </div>
      </div>
    </div>

  )
}

export default Steps