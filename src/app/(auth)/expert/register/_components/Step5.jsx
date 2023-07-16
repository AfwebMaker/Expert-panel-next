import React, { useState } from 'react'
//components
import StepController from './StepController'
import Image from 'next/image'

function Step5({ currentStep, setCurrentStep }) {

    const submitHandler = () => {
        setCurrentStep(currentStep + 1)
    }

    return (
        <div className='w-full'>
            <div className='w-full fcc flex-col'>
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="81" viewBox="0 0 80 81" fill="none">
                    <path d="M30.0007 40.5171L36.6674 47.1838L50.0007 33.8504M26.1165 16.1739C28.5083 15.983 30.7789 15.0425 32.6051 13.4862C36.8667 9.85452 43.1347 9.85452 47.3963 13.4862C49.2225 15.0425 51.4932 15.983 53.8849 16.1739C59.4664 16.6193 63.8985 21.0514 64.3439 26.6329C64.5348 29.0247 65.4753 31.2953 67.0316 33.1215C70.6633 37.3831 70.6633 43.6511 67.0316 47.9127C65.4753 49.7389 64.5348 52.0095 64.3439 54.4013C63.8985 59.9827 59.4664 64.4149 53.8849 64.8603C51.4932 65.0511 49.2225 65.9917 47.3963 67.5479C43.1347 71.1797 36.8667 71.1797 32.6051 67.5479C30.7789 65.9917 28.5083 65.0511 26.1165 64.8603C20.5351 64.4149 16.103 59.9827 15.6576 54.4013C15.4667 52.0095 14.5262 49.7389 12.9699 47.9127C9.33816 43.6511 9.33816 37.3831 12.9699 33.1215C14.5262 31.2953 15.4667 29.0247 15.6576 26.6329C16.103 21.0514 20.5351 16.6193 26.1165 16.1739Z" stroke="#10B981" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <div className='fcc flex-col '>
                    <span className='font-medium text-2xl text-cf-400 text-center my-4'>
                        اطلاعات شما با موفقیت ثبت شد.
                    </span>
                    <span className='text-center mb-4'>ثبت نام شما با موفقیت انجام شد.</span>
                </div>
            </div>
            <StepController currentStep={currentStep} setCurrentStep={setCurrentStep} onsubmit={submitHandler} />
        </div>
    )
}

export default Step5