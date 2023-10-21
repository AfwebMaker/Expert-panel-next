import React, { useEffect, useState } from 'react'
//components
import StepController from './StepController'
//services
import stepInformation from '@/services/register_kg_local/stepInformation'
import Loading from '@/src/app/_components/Loading'

function Step4({ currentStep, setCurrentStep }) {
    const [loadingPage, setLoadingPage] = useState(true)
    const [data, setData] = useState({})

    //get initial data
    useEffect(() => {
        stepInformation(3)
            .then((res) => {
                setData(res.data.data)
            })
            .catch(() => {
            })
            .finally(() => {
                setLoadingPage(false)
            })
    }, [])

    const submitHandler = () => {
        setCurrentStep(currentStep + 1)
    }

    return (
        <div className='w-full'>
            {loadingPage && <Loading />}
            <div className=' sm:px-8 font-medium'>
                <div className='mb-4 flex flex-col'>
                    <span className='flex text-secondary-500 mb-4 text-sm sm:text-base'>اطلاعات اولیه :</span>
                    <div className='flex flex-col sm:flex-row text-cf-400 mr-2'>
                        <div className='ml-8 sm:mb-0 mb-2'>
                            <span className='text-sm sm:text-base'>نام : </span>
                            <span className='text-cf-300 font-normal text-sm sm:text-base'>{data.dInfo && data.dInfo.name}</span>
                        </div>
                        <div>
                            <span className='text-sm sm:text-base'>نام خانوادگی : </span>
                            <span className='text-cf-300 font-normal text-sm sm:text-base'>{data.dInfo && data.dInfo.family}</span>
                        </div>
                    </div>
                </div>

                <div className='mb-4 flex flex-col'>
                    <span className='flex text-secondary-500 mb-4 text-sm sm:text-base'>خدمات درخواستی شما :</span>
                    <div className='flex text-cf-400'>
                        <div className='ml-8 mr-2 flex flex-col sm:flex-row'>
                            <span className='text-sm sm:text-base ml-1 mb-2 sm:mb-0 flex'>خدمات : </span>
                            <div className='flex flex-wrap'>
                                {data.dActivity &&
                                    data.dActivity.activities.map((item, i) => (
                                        <div key={i} className='flex flex-nowrap'>
                                            <span className='text-cf-300 font-normal text-sm sm:text-base flex flex-nowrap'>
                                                {`${item.area} - ${item.part}`}
                                            </span>
                                            {i !== data.dActivity.activities.length - 1 && <span className='mx-2 flex'>,</span>}
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                    </div>
                </div>

                <div className='mb-4 flex flex-col'>
                    <span className='flex text-secondary-500 mb-4 text-sm sm:text-base'>شهر ها و مناطق فعالیت شما :</span>
                    <div className='flex text-cf-400'>
                        <div className='ml-8 mr-2 flex flex-col sm:flex-row'>
                            <span className='text-sm sm:text-base ml-1 mb-2 sm:mb-0 flex flex-nowrap whitespace-nowrap'>شهر ها و مناطق : </span>
                            <div className='flex flex-wrap'>
                                {data.dLocation &&
                                    data.dLocation.workplaces.map((item, i) => (
                                        <div key={i} className='flex flex-nowrap'>
                                            <span className='text-cf-300 font-normal text-sm sm:text-base'>
                                                {`${item.city} - ${item.area}`}
                                            </span>
                                            {i !== data.dLocation.workplaces.length - 1 && <span className='mx-2'>,</span>}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className='text-orange-400 flex items-start text-xs sm:text-base'>
                    <svg className='ml-2 min-w-[24px]' xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
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