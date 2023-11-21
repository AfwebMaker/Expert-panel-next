// react icons
import { HiOutlineMinusSm, HiDocumentText } from 'react-icons/hi'

function DescriptionBoxModal({ data }) {
    return (
        <>
            <div className='flex w-full items-center gap-x-2 mb-5'>
                <HiDocumentText className='text-primary-500 text-xl' />
                <span className='text-primary-500 font-bold'>توضیحات پروژه</span>
            </div>
            <ul className='w-full h-[calc(100%-44px)] overflow-y-scroll scroll_custom flex flex-col gap-y-3'>
                {
                    data.map((item => (
                        <li key={item.id} className='flex items-center justify-start w-full text-sm gap-x-1'>
                            <HiOutlineMinusSm size={8} />
                            <span>{item.title}</span>
                            <span>:</span>
                            <span className='text-cf-300'>{item.description}</span>
                        </li>
                    )))
                }
            </ul>
        </>
    )
}

export default DescriptionBoxModal;