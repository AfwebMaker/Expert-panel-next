import React from 'react'
//components
import Step from './Step'

function Steps({ currentStep, setCurrentStep, stepInformation }) {

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
          <div style={{ width: `${currentStep * 100/(stepInformation.length-1)}%` }} className='transition-all bg-primary-500' ></div>
        </div>
      </div>
    </div>

  )
}

export default Steps