import React, { useState } from 'react'
// components
import Modal from "@/app/_components/Modal"
import FurtherDetailsBoxModal from "./FurtherDetailsBoxModal"
import InfoCard from "@/app/_components/InfoCard"
// react icons
import { HiDocumentDuplicate , HiOutlineChevronLeft } from 'react-icons/hi'
// function 
import shortText from "@/src/functions/shortText"

function FurtherDetailsBox({ text }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='bg-white w-full p-5 rounded-xl flex flex-col items-start justify-center gap-y-2 mt-5'>
            <div className='flex w-full items-center gap-x-2 mb-7'>
                <HiDocumentDuplicate  className='text-primary-500 text-xl' />
                <span className='text-cf-300 text-xs'>توضیحات تکمیلی پروژه</span>
            </div>
            <InfoCard styleCustom="text-blue-600 w-full">
                ارتفاع پنجره ها ۳ متر می باشد و طبق برسی های ما نیاز به نردبان بلند می باشد همپنین برای نصب قسمت های فوقانی نیاز به هولدر شیشه های سکوریت می باشد.
            </InfoCard>
            <p className='w-full my-6 flex text-sm text-cf-400'>
                {shortText(text, 60)}
            </p>
            <div className='flex items-center justify-end w-full'>
                <div onClick={() => setIsOpen(true)} className='h-full cursor-pointer flex items-center text-xs text-cf-300 hover:text-primary-500 transition-all duration-300 gap-x-1'>
                    <span>مشاهده بیشتر</span>
                    <HiOutlineChevronLeft />
                </div>
            </div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} h={"400px"} w={"400px"} >
                <FurtherDetailsBoxModal text={text} />
            </Modal>
        </div>
    )
}

export default FurtherDetailsBox;