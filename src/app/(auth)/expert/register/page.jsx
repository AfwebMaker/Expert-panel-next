"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
//components
import Steps from './_components/Steps'
import Step1 from './_components/Step1'
import Step2 from './_components/Step2'
import Step3 from './_components/Step3'
import Step4 from './_components/Step4'
import Step5 from './_components/Step5'
//assets
import Kargosha_Logo from '@/../public/images/public/Kargosha_Logo.svg'
import Arrow_right from '@/../public/icons/Arrow_right.svg'
import backGround from '@/public/images/login/backGround.png'

function Login() {
    const [currentStep, setCurrentStep] = useState(0)
    return (
        <main className='w-full h-full min-h-screen fcc flex-col bg-black py-8'>
            {/* <Image width={3000} src={backGround} alt="backGround" /> */}
            <div className='w-[80%] max-w-[1050px] bg-white rounded-lg font-medium'>
                <div className='pt-6 fcc'>
                    <Image
                        priority={true}
                        src={Kargosha_Logo}
                        alt='kargosha logo'
                        width={140}
                    />
                </div>
                <span className='w-full fcc my-8 text-base text-cf-400'>ثبت نام متخصصین</span>
                <Steps currentStep={currentStep} setCurrentStep={setCurrentStep} />
                <div className='p-6'>
                    {currentStep === 0 &&
                        <Step1 currentStep={currentStep} setCurrentStep={setCurrentStep} />
                    }

                    {currentStep === 1 &&
                        <Step2 currentStep={currentStep} setCurrentStep={setCurrentStep} />
                    }

                    {currentStep === 2 &&
                        <Step3 currentStep={currentStep} setCurrentStep={setCurrentStep} />
                    }

                    {currentStep === 3 &&
                        <Step4 currentStep={currentStep} setCurrentStep={setCurrentStep} />
                    }

                    {currentStep === 4 &&
                        <Step5 currentStep={currentStep} setCurrentStep={setCurrentStep} />
                    }
                </div>
            </div>

            <Link className='fcc text-white text-base font-bold mt-8' href='/'>
                <Image
                    src={Arrow_right}
                    alt='Arrow_right'
                    className='ml-2'
                />
                بازگشت به صفحه اصلی
            </Link>
        </main>
    )
}

export default Login