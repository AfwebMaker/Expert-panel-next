"use client"

//react
import React, { useEffect, useRef, useState } from 'react'
//react icons
import { HiBadgeCheck } from 'react-icons/hi'

function Input({ active, state, title, placeholder, type, className }) {
  const inputRef = useRef(null)
  const [value, setValue] = useState('');
  const [focus, setFocus] = useState(false);

  //focus handler
  useEffect(() => {
    focus && inputRef.current.focus()
  }, [focus])

  return (
    <div onClick={() => { active && setFocus(true) }} className={`h-[60px] relative fcc flex-col rounded-md overflow-hidden ${(value !== '' || focus) ? 'ring-primary-500 ring-2' : 'ring-cf-200 ring-1'} ${className}`}>

      <div className={`flex items-center justify-between w-full absolute z-10 right-4 text-cf-300 font-medium text-base ${value && !focus ? 'text-primary-500' : 'text-cf-300'} ${(value !== '' || focus) ? 'top-1' : ''}`}>
        {title}
      </div>

      <div className={`left-4 absolute z-20 ${state === 'optional' ? 'text-cf-300' : 'text-primary-500'}`}>
        {
          state === 'required' ? 'اجباری' :
            state === 'optional' ? 'اختیاری' :
              state === 'confirmed' ? <HiBadgeCheck size={20} /> : ''
        }
      </div>

      {(value !== '' || focus) &&
        <input
          ref={inputRef}
          value={value}
          type={type}
          placeholder={placeholder}
          onChange={(e) => { setValue(e.target.value) }}
          onBlur={() => { setFocus(false) }}
          className='w-full absolute bottom-0 fcc px-4 py-1'
        />}
    </div>
  )
}

export default Input