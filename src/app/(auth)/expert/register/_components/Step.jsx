import React, { useEffect, useState } from 'react'
import Image from 'next/image'
//assets
import check from '@/../public/icons/check.svg'

function Step({ setCurrentStep, currentStep, information }) {
    const [checkAnimation, setCheckAnimation] = useState(true)

    //remove animation after 500ms
    useEffect(() => {
        currentStep === information.number && setCheckAnimation(true)
        setTimeout(() => {
            setCheckAnimation(false)
        }, 500);
    }, [currentStep])

    return (
        <div className='fcc'>
            <div
                onClick={() => { information.number <= currentStep && setCurrentStep(information.number - 1) }}
                className={`z-10 w-[50px] h-[50px] fcc rounded-full ${currentStep + 1 <= information.number ? 'bg-white' : 'bg-secondary-500'} ${currentStep + 1 < information.number ? 'border-2 border-gray-300' : 'cursor-pointer'} ${currentStep + 1 === information.number ? 'text-secondary-500 border-2 border-secondary-500' : 'text-gray-500'}`}
            >
                {currentStep + 1 <= information.number ?
                    '0' + information.number :
                    <>
                        <Image
                            src={check}
                            alt='check'
                            width={15}
                        />
                        {checkAnimation &&
                            <Image
                                src={check}
                                alt='check'
                                width={15}
                                className='animate-ping absolute'
                            />
                        }
                    </>
                }
            </div>

            <div className='absolute top-[60px] fcc flex-col text-center'>
                <div className={`font-medium text-base whitespace-nowrap mb-2 ${currentStep + 1 >= information.number ? 'text-secondary-500' : 'text-[#808080]'}`}>{information.title}</div>
                <div className='font-light text-xs whitespace-nowrap'>{information.description}</div>
            </div>
        </div>
    )
}

export default Step