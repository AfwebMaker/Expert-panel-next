import React, { useState } from 'react'
import Image from 'next/image';
//assets
import check from '@/../public/icons/check.svg'
//components
import StepController from './StepController'

function Step2({ currentStep, setCurrentStep }) {
    const [checkBoxState, setCheckBoxState] = useState([
        {
            state: false,
            title: 'نقاشی ساختمان'
        },
        {
            state: false,
            title: 'لوله کشی ساختمان'
        },
        {
            state: false,
            title: 'تزئینات ساختمان'
        },
        {
            state: false,
            title: 'بازسازی ساختمان'
        },
        {
            state: false,
            title: 'سایر موارد',
            description: '(در صورت انتخاب سایر موارد موارد خود را در این قسمت بنویسید.)'
        },
    ])

    //checkBox click handler
    const checkBoxClickHandler = (item) => {
        const newCheckBoxState = [...checkBoxState]
        newCheckBoxState[item].state = !checkBoxState[item].state
        setCheckBoxState(newCheckBoxState)
    }

    const submitHandler = () => {
        setCurrentStep(currentStep + 1)
    }

    return (
        <div className='w-full'>
            <span className='text-cf-300'>به دنبال چه خدمات ساختمانی در کارگشا هستید؟</span>
            <div className='w-full grid grid-cols-4'>
                {checkBoxState.map((checkBox, i) => (
                    <div key={i} className={`flex items-center mt-6 ${i === 4 ? 'col-span-4' : 'col-span-2 lg:col-span-1'}`}>
                        <div
                            onClick={() => { checkBoxClickHandler(i) }}
                            className={`fcc min-w-[16px] w-4 h-4 rounded-[4px] ml-2 cursor-pointer ${checkBox.state ? 'bg-secondary-500' : 'bg-white border border-black'}`}>
                            <Image
                                src={check}
                                alt='check'
                            />
                        </div>
                        <div className='text-cf-400'>{checkBox.title}</div>
                        {checkBox.description &&
                            <div className='text-cf-300 mr-2'>{checkBox.description}</div>
                        }
                    </div>
                ))}
                <textarea
                    style={{ resize: 'none' }}
                    className='w-full border border-cf-400 col-span-4 mt-4 rounded-md p-2 text-sm'
                    placeholder='سایر موارد را بنویسید به طور مثال : دیوار چینی'
                    name=""
                    id=""
                    rows="5"
                >

                </textarea>
            </div>

            <StepController currentStep={currentStep} setCurrentStep={setCurrentStep} onsubmit={submitHandler} />
        </div>
    )
}

export default Step2