import React from 'react'
//components
import Steps from '../../_components/Steps'
//react icons
import { HiPlus } from 'react-icons/hi'

function Header({ currentStep, setCurrentStep, stepInformation }) {
    return (
        <div>
            <div className='w-full fcc font-bold text-lg mb-8 text-primary-500'>
                اضافه کردن سرویس جدید
                <HiPlus size={24} className='mr-2' />
            </div>

            <div className='flex sm:hidden w-full fcc flex-col font-bold text-lg mb-7'>
                <div className='text-lg font-bold mb-2'>
                    {stepInformation[currentStep] && stepInformation[currentStep].title}
                </div>
                <div className='text-sm font-medium text-cf-300'>
                    {stepInformation[currentStep] && stepInformation[currentStep].description}
                </div>
            </div>

            <div className='w-[300px] sm:w-[550px] m-auto'>
                <Steps currentStep={currentStep} setCurrentStep={setCurrentStep} stepInformation={stepInformation} />
            </div>
        </div>
    )
}

export default Header