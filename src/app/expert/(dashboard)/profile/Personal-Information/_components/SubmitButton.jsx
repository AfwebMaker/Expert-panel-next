import React from 'react'
//react icons
import { HiOutlineFingerPrint } from 'react-icons/hi'

function SubmitButton() {
  return (
    <button className='bg-primary-500 rounded-md w-full fcc text-white h-11'>
      <div>
        <HiOutlineFingerPrint size={20} />
      </div>
      <div className='mr-2 font-bold text-base'>ثبت و احراز هویت</div>
    </button>
  )
}

export default SubmitButton