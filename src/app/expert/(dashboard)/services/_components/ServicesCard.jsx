import React from 'react'
import Image from 'next/image'
// components
import TimerDown from "./TimerDown"
import DetailsCardNew from '../new-orders/_components/DetailsCardNew'
import DetailsCardTenders from '../tenders/_components/DetailsCardTenders'
import DetailsCardActive from '../active-orders/_components/DetailsCardActive'
import Link from 'next/link'


function ServicesCard({ state, src, slug, title, serviceType, address, meterage, description, price, time, totalTime, avatar, name, startDate, startTime }) {
    console.log("startTime",startTime)

    return (
        <li className='col-span-12 w-full h-[410px] sm:h-[170px] rounded-lg border border-gray-200 bg-white shadow-lg fcc overflow-hidden'>
            <Link className='w-full h-full flex-col sm:flex-row flex sm:items-center p-3 sm:gap-2' href={`/expert/services/new-orders/${slug}`}>
                <div className='h-[200px] w-full sm:h-[146px] sm:w-[146px] bg-gray-100 rounded-lg'>
                    <Image className='rounded-lg w-full h-full object-cover' quality={100} src={src} alt={title} width={146} height={146} />
                </div>
                <div className='flex flex-col items-start justify-center mt-3 sm:mt-0 sm:h-full w-full sm:w-[calc(100%-160px)]'>
                    <div className='flex flex-wrap sm:flex-nowrap items-start gap-y-2 sm:gap-y-0 justify-between w-full'>
                        <div className='flex flex-col sm:flex-wrap sm:flex-row items-center gap-y-1'>
                            <span className='text-sm'>{title}</span>
                            <span className='px-3 hidden sm:block'>-</span>
                            <span className='text-xs flex items-center justify-start w-full sm:w-auto'>
                                <span className='text-cf-300 flex'>نوع سرویس :</span>
                                <span className='mr-1'>{serviceType}</span>
                            </span>
                        </div>
                        {
                            state === "New" &&
                            <div className='bg-primary-100 h-6 mr-0 sm:mr-1 sm:mr text-primary-500 text-xs font-bold rounded-full px-2 py-1 fcc gap-x-1'>
                                <TimerDown time={time} />
                                {/* 2 * 24 * 60 * 60 * 1000 */}
                                <span className='flex w-10 flex-nowrap h-full'>تا پایان</span>
                            </div>
                        }
                    </div>
                    {
                        state === "New" &&
                        <DetailsCardNew
                            address={address}
                            meterage={meterage}
                            description={description}
                        />
                    }
                    {
                        state === "Tenders" &&
                        <DetailsCardTenders
                            address={address}
                            price={price}
                            time={time}
                            totalTime={""}
                        />
                    }
                    {
                        state === "Active" &&
                        <DetailsCardActive
                            avatar={""}
                            name={"سید میثاق حمزه زاده موسوی"}
                            address={address}
                            startDate={startDate}
                            startTime={startTime}
                        />
                    }
                </div>
            </Link>
        </li>
    )
}

export default ServicesCard