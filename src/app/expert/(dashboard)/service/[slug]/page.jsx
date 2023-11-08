import React from 'react'
// components
import MasterCarousel from "./_components/carousel/MasterCarousel"

function page() {
    return (
        <div className="flex w-full flex-col pb-20 lg:pb-0 text bg-orange-300">
            <div className="w-full h-full bg-red-400 flex flex-col items-center justify-start">
                <MasterCarousel />
            </div>
        </div>
    )
}

export default page;