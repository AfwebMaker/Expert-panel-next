// react icons
import { HiDocumentText, HiOutlineChevronLeft, HiOutlineMinusSm } from 'react-icons/hi'

function DescriptionBoxModal({ data }) {
    return (
        <ul className='w-full h-full overflow-y-scroll flex flex-col gap-y-3'>
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
    )
}

export default DescriptionBoxModal;