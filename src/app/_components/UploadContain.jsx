import React, { useState, useRef } from 'react'
//react icons
import { HiOutlineCloudUpload } from 'react-icons/hi'

function UploadContain({ multiple, accept }) {
    const [ImageUploaded, setImageUploaded] = useState(false)
    const previewImageBox = useRef()

    const inputFileHandler = (e) => {
        const [file] = e.target.files

        if (file) {
            setImageUploaded(true)
            previewImageBox.current.style.display = 'flex'
            previewImageBox.current.src = URL.createObjectURL(file)
        }
    }

    return (
        <div className={`uploadBorder w-full cursor-pointer h-[150px] rounded-lg border-cf-400 relative overflow-hidden fcc ${!ImageUploaded ? 'text-gray-400' : 'text-white'}`}>
            <input
                onChange={inputFileHandler}
                className='absolute z-10 w-full h-full opacity-0 cursor-pointer right-0'
                type="file"
                multiple={multiple}
                accept={accept}
            />
            <img ref={previewImageBox} className='hidden brightness-75 fcc w-[98%] h-[95%] absolute object-cover rounded-lg' src='' alt="" />
            <div className='absolute flex justify-start items-center w-full h-full top-0 p-5'>
                <div className='ml-2'>
                    <HiOutlineCloudUpload strokeWidth={1} size={70} />
                </div>
                <div>
                    <div className='mb-2 font-bold text-sm'>آپلود کردن عکس</div>
                    <div className='font-medium text-xs'>
                        عکس را به صورت یکی از فرمت ها PNG , JPG , JPEG , Tiff در این قسمت آپلود کنید.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadContain