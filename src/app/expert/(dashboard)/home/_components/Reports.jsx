import React from 'react'
//images
import report1 from '@/public/images/Report1.png'
import report2 from '@/public/images/Report2.png'
import report3 from '@/public/images/Report3.png'
import Image from 'next/image'
//scroll
import ScrollContainer from 'react-indiana-drag-scroll'

function Reports() {
    const images = [report1, report2, report3]
    return (
        <div className='mb-5'>
            <div className='flex justify-between'>
                <div className='text-lg font-bold text-primary-500'>گزارش کاری شما</div>
                <div className='font-bold text-xl text-blue-500'>...</div>
            </div>

            <div className='w-[100vw] -right-5 lg:w-full h-[200px] mt-2 relative overflow-x-auto'>
                <ScrollContainer className='scroll-container min-w-full whitespace-nowrap h-full absolute top-0 right-0 flex px-5' >
                    {
                        images.map((image, i) => (
                            <div key={i} className='h-full flex flex-shrink-0'>
                                <Image
                                    className='flex h-full object-contain'
                                    src={image}
                                />
                            </div>
                        ))
                    }
                </ScrollContainer>
            </div>

        </div>
    )
}

export default Reports