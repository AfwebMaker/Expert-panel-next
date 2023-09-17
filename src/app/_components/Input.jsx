"use client"

//react
import React, { useEffect, useRef, useState } from 'react'
//react icons
import { HiBadgeCheck } from 'react-icons/hi'

function Input({ active, state, title, placeholder, type, className, onChange, onBlur, value, id, name, touched, error }) {
  const inputRef = useRef(null)
  const [focus, setFocus] = useState(false);

  //focus handler
  useEffect(() => {
    focus && inputRef.current.focus()
  }, [focus])

  return (
    <div className={`${className}`}>
      <div onClick={() => { active && setFocus(true) }} className={`cursor-pointer bg-white h-[60px] relative fcc flex-col rounded-md overflow-hidden ${(value !== '' || focus) ? 'ring-primary-500 ring-2' : 'ring-cf-200 ring-1'}`}>

        <div className={`flex items-center justify-between absolute z-10 right-4 text-cf-300 font-medium text-base ${value && !focus ? 'text-primary-500' : 'text-cf-300'} ${(value !== '' || focus) ? 'top-1' : ''}`}>
          {title}
        </div>

        <div className={`left-4 absolute font-bold text-xs z-20 ${state === 'optional' ? 'text-cf-300' : 'text-primary-500'}`}>
          {
            state === 'required' ? 'اجباری' :
              state === 'optional' ? 'اختیاری' :
                state === 'confirmed' ? <HiBadgeCheck size={20} /> : ''
          }
        </div>

        {(value !== '' || focus) &&
          <input
            id={id}
            name={name}
            ref={inputRef}
            value={value}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={(e) => { setFocus(false);onBlur(e) }}
            className='w-full absolute bottom-0 fcc px-4 py-1'
          />}


      </div>
      <div className='flex text-warning rounded-[4px] mt-1 font-medium text-xs'>
        {
          touched && error ? (
            <div>{error}</div>
          ) : null
        }
      </div>
    </div>
  )
}

export default Input