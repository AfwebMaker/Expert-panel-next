import Link from 'next/link'
import React from 'react'

function StepController({ currentStep, setCurrentStep, onsubmit }) {
  const prePageHandler = () => {
    currentStep !== 0 && setCurrentStep(currentStep - 1)
  }

  return (
    <div className='w-full flex justify-between text-sm pt-8 text-white'>
      {currentStep !== 4 ?
        <>
          <button type='button' onClick={prePageHandler} className='bg-secondary-500 py-2 px-4 rounded-md'>
            مرحله قبل
          </button>
          <button type='submit' onClick={onsubmit} className='bg-secondary-500 py-2 px-4 rounded-md'>
            {currentStep === 3 ? 'تایید اطلاعات' : 'مرحله بعد'}
          </button></>
        :
        <Link href='/' className='fcc w-full bg-secondary-500 py-2 px-4 rounded-md'>
          ورود به پنل متخصص
        </Link>
      }
    </div>
  )
}

export default StepController