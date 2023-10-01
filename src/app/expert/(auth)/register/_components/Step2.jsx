import { useState } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'
import Image from 'next/image'
//components
import StepController from './StepController'
//assets
import Clipboard_list from '@/public/icons/Clipboard_list.svg'
import Clipboard_check from '@/public/icons/Clipboard_check.svg'
import Clipboard from '@/public/icons/Clipboard.svg'

const services = [
    { id: 1, name: 'ممد' },
    { id: 2, name: 'قلی' },
    { id: 3, name: 'کاووس' },
    { id: 4, name: 'ثریا' },
    // More users...
]

const parts = [
    { id: 1, name: 'ممد' },
    { id: 2, name: 'قلی' },
    { id: 3, name: 'کاووس' },
    { id: 4, name: 'ثریا' },
    // More users...
]

function classNames1(...classes) {
    return classes.filter(Boolean).join(' ')
}

function classNames2(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Step2({ currentStep, setCurrentStep }) {
    const [query1, setQuery1] = useState('')
    const [query2, setQuery2] = useState('')
    const [selectedService, setSelectedService] = useState('')
    const [selectedPart, setSelectedPart] = useState('')
    const [selectedItems, setSelectedItems] = useState([])

    const filteredService =
        query1 === ''
            ? services
            : services.filter((service) => {
                return service.name.toLowerCase().includes(query1.toLowerCase())
            })

    const filteredParts =
        query2 === ''
            ? parts
            : parts.filter((part) => {
                return part.name.toLowerCase().includes(query2.toLowerCase())
            })

    const addItem = () => {
        selectedService.name && selectedPart.name &&
            setSelectedItems([...selectedItems, selectedService.name + "-" + selectedPart.name])
        setSelectedPart('')
    }

    const removeItem = (item) => {
        const newSelectedItems = [...selectedItems]
        newSelectedItems.splice(item, 1)
        setSelectedItems(newSelectedItems)
    }

    const submitHandler = () => {
        setCurrentStep(currentStep + 1)
    }

    return (
        <div>
            <div className='flex flex-col items-end'>
                <div className='flex items-end w-full mb-4'>
                    <Combobox as="div" value={selectedService} onChange={setSelectedService} className='w-1/2 ml-[5px]' >
                        <Combobox.Label className="block sm:text-base text-sm font-medium leading-6 text-gray-900">
                            در کدام حوزه ساختمانی فعالیت دارید ؟
                        </Combobox.Label>
                        <div className="relative mt-2">
                            <Image
                                src={Clipboard}
                                alt='Clipboard_list'
                                className='absolute right-2 h-full'
                            />
                            <Combobox.Input
                                className="w-full h-11 rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-secondary-500 sm:text-sm sm:leading-6"
                                onChange={(event) => setQuery1(event.target.value)}
                                displayValue={(service) => service?.name}
                                placeholder='به طور مثال : نیرو های پیمانکار'
                                autoComplete='off'
                            />
                            <Combobox.Button className="absolute inset-y-0 left-0 flex items-center rounded-r-md px-2 focus:outline-none">
                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </Combobox.Button>

                            {filteredService.length > 0 && (
                                <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-xs shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {filteredService.map((service) => (
                                        <Combobox.Option
                                            key={service.id}
                                            value={service}
                                            className={({ active }) =>
                                                classNames1(
                                                    'relative cursor-default select-none py-2 pl-3 pr-9',
                                                    active ? 'bg-secondary-500 text-white' : 'text-gray-900'
                                                )
                                            }
                                        >
                                            {({ active, selected }) => (
                                                <>
                                                    <span className={classNames1('block truncate', selected && 'font-semibold')}>{service.name}</span>

                                                    {selected && (
                                                        <span
                                                            className={classNames1(
                                                                'absolute inset-y-0 left-0 flex items-center pl-4',
                                                                active ? 'text-white' : 'text-secondary-500'
                                                            )}
                                                        >
                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    )}
                                                </>
                                            )}
                                        </Combobox.Option>
                                    ))}
                                </Combobox.Options>
                            )}
                        </div>
                    </Combobox>

                    <Combobox as="div" value={selectedPart} onChange={setSelectedPart} className='w-1/2 mr-[5px]' >
                        <Combobox.Label className="block sm:text-base text-sm font-medium leading-6 text-gray-900">
                            در کدام بخش های این حوزه ساختمانی فعالیت دارید ؟
                        </Combobox.Label>
                        <div className="relative mt-2">
                            <Image
                                src={Clipboard_list}
                                alt='Clipboard_list'
                                className='absolute right-2 h-full'
                            />
                            <Combobox.Input
                                className="w-full h-11 rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-secondary-500 sm:text-sm sm:leading-6"
                                onChange={(event) => setQuery2(event.target.value)}
                                displayValue={(part) => part?.name}
                                placeholder='به طور مثال : نقاشی ساختمان'
                                autoComplete='off'
                            />
                            <Combobox.Button className="absolute inset-y-0 left-0 flex items-center rounded-r-md px-2 focus:outline-none">
                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </Combobox.Button>

                            {filteredParts.length > 0 && (
                                <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-xs shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {filteredParts.map((part) => (
                                        <Combobox.Option
                                            key={part.id}
                                            value={part}
                                            className={({ active }) =>
                                                classNames2(
                                                    'relative cursor-default select-none py-2 pl-3 pr-9',
                                                    active ? 'bg-secondary-500 text-white' : 'text-gray-900'
                                                )
                                            }
                                        >
                                            {({ active, selected }) => (
                                                <>
                                                    <span className={classNames2('block truncate', selected && 'font-semibold')}>{part.name}</span>

                                                    {selected && (
                                                        <span
                                                            className={classNames2(
                                                                'absolute inset-y-0 left-0 flex items-center pl-4',
                                                                active ? 'text-white' : 'text-secondary-500'
                                                            )}
                                                        >
                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    )}
                                                </>
                                            )}
                                        </Combobox.Option>
                                    ))}
                                </Combobox.Options>
                            )}
                        </div>
                    </Combobox>
                    <div onClick={addItem} className='cursor-pointer w-11 h-11 min-w-[44px] rounded-md bg-secondary-500 mr-2 fcc'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M12 4.52527V20.5253M20 12.5253L4 12.5253" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                <div className='flex flex-col w-full'>
                    <span className='flex mb-2 sm:text-base text-sm'>حوزه های انتخابی شما</span>
                    <div className='flex content-start items-start justify-start flex-wrap w-full h-36 border border-cf-300 rounded-md p-2 overflow-hidden overflow-y-auto'>
                        <Image src={Clipboard_check} alt='Clipboard_check' className='ml-2' />
                        {selectedItems.map((item, i) => (
                            <div key={i} className='fcc px-2 py-1 bg-secondary-500 rounded-md mx-1 text-xs text-white mt-1'>
                                {item}
                                <svg onClick={() => { removeItem(i) }} className='mr-2 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.29289 4.31816C4.68342 3.92764 5.31658 3.92764 5.70711 4.31816L10 8.61106L14.2929 4.31816C14.6834 3.92764 15.3166 3.92764 15.7071 4.31816C16.0976 4.70869 16.0976 5.34185 15.7071 5.73238L11.4142 10.0253L15.7071 14.3182C16.0976 14.7087 16.0976 15.3419 15.7071 15.7324C15.3166 16.1229 14.6834 16.1229 14.2929 15.7324L10 11.4395L5.70711 15.7324C5.31658 16.1229 4.68342 16.1229 4.29289 15.7324C3.90237 15.3419 3.90237 14.7087 4.29289 14.3182L8.58579 10.0253L4.29289 5.73238C3.90237 5.34185 3.90237 4.70869 4.29289 4.31816Z" fill="white" />
                                </svg>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <StepController currentStep={currentStep} setCurrentStep={setCurrentStep} onsubmit={submitHandler} />
        </div>
    )
}
