// react icons
import { HiDocumentDuplicate } from 'react-icons/hi'

function DescriptionBoxModal({ text }) {
    return (
        <>
            <div className='flex w-full items-center gap-x-2 mb-5'>
                <HiDocumentDuplicate className='text-primary-500 text-xl' />
                <span className='text-primary-500 font-bold'>توضیحات تکمیلی پروژه</span>
            </div>
            <div className="w-full h-[calc(100%-44px)] overflow-y-scroll scroll_custom px-2">
                <p className='w-full flex leading-7'>
                    {text}
                </p>
            </div>
        </>
    )
}

export default DescriptionBoxModal;