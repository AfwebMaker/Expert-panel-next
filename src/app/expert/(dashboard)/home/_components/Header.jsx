import React from 'react'
import Image from 'next/image';
//react icons
import { HiCheckCircle, HiXCircle, HiArchive, HiExclamationCircle } from "react-icons/hi";
//components
import Stars from '@/src/app/_components/Stars'

function Header({ profileData }) {

    return (
        <div className='flex justify-between w-full h-[70px]'>
            <div className='flex'>
                <div className='flex w-[70px] h-[70px] flex-shrink-0 fcc rounded-full overflow-hidden ml-2 md:ml-5 relative bg-black'>
                    {profileData.avatarURL &&
                        <Image
                            className='w-full h-full object-cover'
                            src={profileData.avatarURL.url}
                            fill
                            alt=""
                        />
                    }
                </div>
                <div className='flex flex-col'>
                    <div className='font-bold text-sm md:text-base'>{profileData.name} {profileData.family}</div>
                    <div className='flex'>
                        <div className='font-bold text-xs text-primary-500 my-2'>امتیاز متخصص : </div>
                        <Stars point={profileData.score} />
                    </div>
                    <div className='flex items-center'>
                        <div className='text-primary-500 font-bold text-xs'>وضعیت : </div>
                        <div className='text-cf-300 font-medium text-sm fcc'>
                            <div className='font-bold text-xs mx-1'>{profileData.isActive ? 'فعال' : 'غیر فعال'}</div>
                            <div>
                                {profileData.isActive ?
                                    <HiCheckCircle size={16} className='text-primary-500' /> :
                                    <HiXCircle size={16} className='text-warning' />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative'>
                <HiArchive className='text-primary-500' size={30} />
                <HiExclamationCircle className='absolute text-warning top-[15px] right-[-3px]' size={15} />
            </div>
        </div>
    )
}

export default Header