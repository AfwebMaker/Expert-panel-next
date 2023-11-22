import React from 'react'
//react-loader-spinner
import { ThreeDots } from 'react-loader-spinner'

function LoadingBox() {
    return (
        <div className='w-full h-full fcc min-h-[150px]'>
            <ThreeDots
                height="60"
                width="60"
                radius="9"
                color="#45B649"
                ariaLabel="three-dots-loading"
                visible={true}
            />
        </div>
    )
}

export default LoadingBox;