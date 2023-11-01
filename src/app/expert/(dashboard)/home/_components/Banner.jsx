import React from 'react'
//components
import Carousel from "./carousel/Carousel"

function Banner() {
    return (
        <div className='mb-5 md:mt-5 md:mb-10'>
            <div className='flex justify-between items-center'>
                <div className='text-sm md:text-lg font-bold text-primary-500'>پیشنهادات ویژه</div>
                {/* <div className='font-bold text-xl text-blue-500 fcc h-full'>...</div> */}
            </div>
            <div className='w-full bg-green-300 rounded-xl overflow-hidden mt-5'>
                <Carousel />
            </div>
        </div>
        // className='w-full aspect-[3.9/2] md:h-[300px] md:aspect-auto bg-green-300 rounded-xl overflow-hidden mt-5'
    )
}

export default Banner