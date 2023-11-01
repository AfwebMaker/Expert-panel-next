import React from 'react'
//scroll
import ScrollContainer from 'react-indiana-drag-scroll'
// components
import AvatarGroup from "./AvatarGroup"

function Reports() {

    return (
        <div className='my-5 md:mb-5 md:mt-10'>
            <div className='flex justify-between items-center'>
                <div className='text-sm md:text-lg font-bold text-primary-500'>گزارش کاری شما</div>
                {/* <div className='font-bold text-xl text-blue-500 fcc'>...</div> */}
            </div>

            <div className='w-full mt-5 overflow-x-hidden'>
                <ScrollContainer className='scroll-container overflow-x-auto whitespace-nowrap h-full lg:grid lg:grid-cols-12 gap-5 flex' >
                    <div className='flex flex-col col-span-4 min-w-[170px] items-start justify-center bg-[#194D41] rounded-lg text-white p-5'>
                        <div className='flex flex-col lg:flex-row items-center justify-between w-full'>
                            <div className='flex items-center w-full lg:w-auto'>
                                <span className='text-5xl font-bold ml-2'>31</span>
                                <span>عدد</span>
                            </div>
                            <div className='w-full lg:w-auto justify-end flex items-center my-1 lg:my-0'>
                                <svg className='aspect-[6/2]' width="120" height="35" viewBox="0 0 151 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.66663 19.2356L14.7235 24.9928C17.5581 26.2427 20.8713 25.1124 22.7738 22.6675C25.776 18.8095 30.4779 14.3919 34.4633 17.8061C40.898 23.3189 41.2732 0.851512 48.7858 2.49333C52.5222 3.30987 53.3094 13.7727 56.6736 22.5022C58.5289 27.3163 59.6094 30.3677 61.348 31.7828C62.8173 32.9788 64.8134 31.8163 65.9458 30.2974L77.4015 14.9318C77.6513 14.5968 78.1188 14.5142 78.4682 14.7434V14.7434C78.8182 14.9729 79.2864 14.8896 79.5359 14.5536L83.1021 9.74928C85.699 6.25087 91.0412 6.59943 93.1615 10.4056L95.2251 14.11C96.1838 15.8312 98.3325 16.4851 100.088 15.59V15.59C101.544 14.8474 103.316 15.1597 104.43 16.3555L112.272 24.7698C114.485 27.1454 118.187 27.3286 120.625 25.1833L130.395 16.5849C131.384 15.7147 132.794 15.5133 133.987 16.072V16.072C135.388 16.7281 137.056 16.327 138.005 15.1058L145.199 5.85275C146.282 4.45918 148.301 4.23277 149.667 5.35177V5.35177" stroke="#FBBF24" stroke-width="4" />
                                </svg>
                            </div>
                        </div>
                        <div className='text-xs mt-5 w-full md:text-base'>
                            <p>کار های که شما نپذیرفتید</p>
                        </div>
                    </div>
                    <div className='flex flex-col col-span-4 min-w-[170px] items-start justify-center bg-[#FCAD36] rounded-lg text-white p-5'>
                        <div className='flex flex-col lg:flex-row items-center justify-between w-full'>
                            <div className='flex items-center w-full lg:w-auto'>
                                <span className='text-5xl font-bold ml-2'>16</span>
                                <span>عدد</span>
                            </div>
                            <div className='w-full lg:w-auto justify-end flex items-center my-1 lg:my-0'>
                                <AvatarGroup />
                            </div>
                        </div>
                        <div className='text-xs mt-5 w-full md:text-base'>
                            <p>کار های که شما نپذیرفتید</p>
                        </div>
                    </div>
                    <div className='flex flex-col col-span-4 min-w-[170px] items-start justify-center bg-[#ED544C] rounded-lg text-white p-5'>
                        <div className='flex flex-col lg:flex-row items-center justify-between w-full'>
                            <div className='flex items-center w-full lg:w-auto'>
                                <span className='text-5xl font-bold ml-2'>2</span>
                                <span>عدد</span>
                            </div>
                            <div className='w-full lg:w-auto justify-end flex items-center my-1 lg:my-0'>
                                <svg className='aspect-[6/2]' width="120" height="35" viewBox="0 0 151 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.66663 19.2356L14.7235 24.9928C17.5581 26.2427 20.8713 25.1124 22.7738 22.6675C25.776 18.8095 30.4779 14.3919 34.4633 17.8061C40.898 23.3189 41.2732 0.851512 48.7858 2.49333C52.5222 3.30987 53.3094 13.7727 56.6736 22.5022C58.5289 27.3163 59.6094 30.3677 61.348 31.7828C62.8173 32.9788 64.8134 31.8163 65.9458 30.2974L77.4015 14.9318C77.6513 14.5968 78.1188 14.5142 78.4682 14.7434V14.7434C78.8182 14.9729 79.2864 14.8896 79.5359 14.5536L83.1021 9.74928C85.699 6.25087 91.0412 6.59943 93.1615 10.4056L95.2251 14.11C96.1838 15.8312 98.3325 16.4851 100.088 15.59V15.59C101.544 14.8474 103.316 15.1597 104.43 16.3555L112.272 24.7698C114.485 27.1454 118.187 27.3286 120.625 25.1833L130.395 16.5849C131.384 15.7147 132.794 15.5133 133.987 16.072V16.072C135.388 16.7281 137.056 16.327 138.005 15.1058L145.199 5.85275C146.282 4.45918 148.301 4.23277 149.667 5.35177V5.35177" stroke="#FBBF24" stroke-width="4" />
                                </svg>
                            </div>
                        </div>
                        <div className='text-xs mt-5 w-full md:text-base'>
                            <p>کار های که شما نپذیرفتید</p>
                        </div>
                    </div>
                </ScrollContainer>
            </div>

        </div>
    )
}

export default Reports