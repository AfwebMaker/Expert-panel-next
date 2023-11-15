import React from 'react'
//react icons
import { HiCheckCircle } from 'react-icons/hi'

function StepController({ currentStep, setCurrentStep, onsubmit, allSteps, lastStepTitle }) {
  const prePageHandler = () => {
    currentStep !== 0 && setCurrentStep(currentStep - 1)
  }

  return (
    <div className='w-full flex flex-row justify-between text-sm pt-8 text-white'>
      {currentStep < allSteps ?
        <>
          <button disabled={!currentStep} type='button' onClick={prePageHandler} className={`text-xs sm:text-sm w-auto py-2 px-4 rounded-md ${currentStep === 0 ? 'bg-gray-100 text-gray-500' : 'text-primary-500 bg-primary-100'}`}>
            مرحله قبل
          </button>
          <button type='submit' onClick={onsubmit} className='text-xs sm:text-sm w-auto bg-primary-100 py-2 px-4 rounded-md text-primary-500'>
            مرحله بعد
          </button>
        </>
        :
        <button type='submit' onClick={onsubmit} className='m-auto fcc w-[209px] font-medium text-sm bg-primary-100 py-2 rounded-md cursor-pointer text-primary-500'>
          {lastStepTitle}
          <HiCheckCircle size={20} className='mr-2' />
        </button>
      }
    </div>
  )
}

export default StepController