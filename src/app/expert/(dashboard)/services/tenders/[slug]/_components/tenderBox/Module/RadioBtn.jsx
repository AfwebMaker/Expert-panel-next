import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
// react icons
import { HiCheckCircle } from "react-icons/hi";

export default function RadioBtn({ selected, setSelected, plans }) {

    return (
        <div className="w-full">
            <div className="mx-auto w-full max-w-md">
                <RadioGroup value={selected} onChange={setSelected}>
                    <RadioGroup.Label className="sr-only">نحوه پرداخت کمیسیون</RadioGroup.Label>
                    <div className="space-y-2">
                        {plans.map((plan) => (
                            <RadioGroup.Option
                                key={plan.name}
                                value={plan}
                                className={({ active, checked }) =>
                                    `${active
                                        ? 'ring-2 ring-white/60 ring-offset-2 ring-offset-primary-500'
                                        : (checked ? 'ring-2 ring-white/60 ring-offset-2 ring-offset-primary-500' : 'ring-2 ring-white/60 ring-offset-2 ring-offset-gray-200')
                                    }
                  ${checked ? 'bg-primary-100' : 'bg-white text-gray-500'}
                    relative flex cursor-pointer rounded-lg px-5 py-4 focus:outline-none`
                                }
                            >
                                {({ active, checked }) => (
                                    <>
                                        <div className="flex w-full h-20 items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="text-sm">
                                                    <RadioGroup.Label
                                                        as="p"
                                                        className={`font-medium  ${checked ? 'text-primary-500' : 'text-gray-500'
                                                            }`}
                                                    >
                                                        {plan.name}
                                                    </RadioGroup.Label>
                                                    <RadioGroup.Description
                                                        as="span"
                                                        className={`flex mt-3 ${checked ? 'text-primary-500' : 'text-gray-500'
                                                            }`}
                                                    >
                                                        <span className='text-cf-200'>
                                                            معادل {plan.price} ریال
                                                        </span>
                                                    </RadioGroup.Description>
                                                </div>
                                            </div>
                                            {checked && (
                                                <div className="flex items-start h-full text-primary-500">
                                                    <HiCheckCircle size={25} />
                                                </div>
                                            )}
                                        </div>
                                    </>
                                )}
                            </RadioGroup.Option>
                        ))}
                    </div>
                </RadioGroup>
            </div>
        </div>
    )
}