import React, { useState } from 'react'
//components
import StepController from './StepController'

function Step4({ currentStep, setCurrentStep }) {

    const submitHandler = () => {
        setCurrentStep(currentStep + 1)
    }

    return (
        <div className='w-full'>
            <div className='px-8'>
                <div className='mb-4 flex flex-col'>
                    <span className='flex text-cf-300 mb-4'>اطلاعات اولیه :</span>
                    <div className='flex text-cf-400 mr-2'>
                        <div className='ml-8'>
                            <span>نام : </span>
                            <span className='text-cf-300 font-normal'>sss</span>
                        </div>
                        <div>
                            <span>نام خانوادگی : </span>
                            <span className='text-cf-300 font-normal'>lll</span>
                        </div>
                    </div>
                </div>

                <div className='mb-4 flex flex-col'>
                    <span className='flex text-cf-300 mb-4'>خدمات درخواستی شما :</span>
                    <div className='flex text-cf-400'>
                        <div className='ml-8 mr-2'>
                            <span>خدمات : </span>
                            <span className='text-cf-300 font-normal'>sss</span>
                        </div>
                    </div>
                </div>

                <div className='text-orange-400 flex items-center'>
                    <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M12 8.02539V12.0254M12 16.0254H12.01M21 12.0254C21 16.996 16.9706 21.0254 12 21.0254C7.02944 21.0254 3 16.996 3 12.0254C3 7.05483 7.02944 3.02539 12 3.02539C16.9706 3.02539 21 7.05483 21 12.0254Z" stroke="#FB923C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    در صورت تایید اطلاعات خود دکمه تایید را بزنید.
                </div>

            </div>
            <StepController currentStep={currentStep} setCurrentStep={setCurrentStep} onsubmit={submitHandler} />
        </div>
    )
}

export default Step4