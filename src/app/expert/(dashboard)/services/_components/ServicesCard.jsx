import Image from 'next/image'
import React from 'react'

function ServicesCard({}) {

    const changeUi = (state) => {
        switch (state) {
            case "new":
                return (div);
                break;
            case "tenders":
                // Your code here
                break;
            case "active":
                // Your code here
                break;
        
            default:
                break;
        }
        return
    }
    

    return (
        <div className='w-full h-[170px] p-3 rounded-lg bg-slate-200 mt-10 gap-2 flex items-center'>
            <div className='h-full w-[146px] bg-white rounded-lg'>
                <Image className='rounded-lg' src="" alt='' />
            </div>
            <div className='flex flex-col items-start justify-start bg-orange-200 h-full w-[calc(100%-160px)]'>
                <div className='flex items-center justify-between w-full'>
                    <div>
                        <span className='text-sm'>نصب و اجرای شیشه دو جداره</span>
                        <span className='px-3'>-</span>
                        <span className='text-xs'>
                            <span className='text-cf-300'>نوع سرویس :</span>
                            <span className='mr-1'>خدمات فوری</span>
                        </span>
                    </div>
                    <div>T</div>
                </div>
                {
                    <div className=''></div>
                }
            </div>
        </div>
    )
}

export default ServicesCard