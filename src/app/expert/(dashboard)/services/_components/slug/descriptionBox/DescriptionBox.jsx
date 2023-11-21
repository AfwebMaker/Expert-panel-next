import React, { useState } from 'react'
// components
import Modal from "@/app/_components/Modal"
import DescriptionBoxModal from "./DescriptionBoxModal"
// react icons
import { HiDocumentText, HiOutlineChevronLeft, HiOutlineMinusSm } from 'react-icons/hi'

function DescriptionBox({ data }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='bg-white lg:shadow-lg w-full p-5 border-b border-gray-300 lg:border-none lg:rounded-xl flex flex-col items-start justify-center gap-y-2 lg:mt-5'>
            <div className='flex w-full items-center gap-x-2'>
                <HiDocumentText className='text-primary-500 text-xl' />
                <span className='text-cf-300 text-base'>توضیحات پروژه</span>
            </div>
            <ul className='w-full my-6 flex flex-col gap-y-4'>
                {
                    data && data.slice(0, 7).map((item => (
                        <li key={item.id} className='flex items-center justify-start w-full text-sm gap-x-1'>
                            <HiOutlineMinusSm size={8} />
                            <span>{item.title}</span>
                            <span>:</span>
                            <span className='text-cf-300'>{item.description}</span>
                        </li>
                    )))
                }
            </ul>
            <div className='flex items-center justify-end w-full'>
                <div onClick={() => setIsOpen(true)} className='h-full cursor-pointer flex items-center text-xs text-cf-300 hover:text-primary-500 transition-all duration-300 gap-x-1'>
                    <span>مشاهده بیشتر</span>
                    <HiOutlineChevronLeft />
                </div>
            </div>
            
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} h={"h-screen md:h-[400px]"} w={"w-screen md:w-[400px]"} >
                <DescriptionBoxModal data={data} />
            </Modal>
        </div>
    )
}

export default DescriptionBox