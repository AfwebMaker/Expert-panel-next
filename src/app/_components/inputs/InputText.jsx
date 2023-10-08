import React, { useEffect, useRef, useState } from 'react'
//react icons
import { HiExclamation, HiBadgeCheck } from 'react-icons/hi'

function InputText({ state, title, placeholder, type, className, id, name, required, formik }) {
    const errorCondition = formik.touched[name] && formik.errors[name]
    const inputRef = useRef(null)
    const [focus, setFocus] = useState(false);
    const [selfState, setSelfState] = useState(state);

    //focus handler
    useEffect(() => {
        focus && inputRef.current.focus()
    }, [focus])

    const clickHandler = () => {
        state !== 'None' && setSelfState('Low')

        if ((required && state !== 'None' || !required)) {
            setFocus(true)
        }
    }

    return (
        <div className={`${className}`}>
            <div onClick={clickHandler} className={`${selfState !== 'None' ? 'cursor-pointer' : ''} bg-white h-[60px] relative fcc flex-col rounded-md overflow-hidden ${focus ? errorCondition ? 'ring-2 ring-error' : 'ring-primary-500 ring-2' : ''} ${!focus && required ? selfState === 'None' ? 'ring-primary-500 ring-2' : selfState === 'Medium' ? 'border-dashed border-warning border-2' : selfState === 'High' ? 'ring-error ring-2' : 'ring-1 ring-cf-200' : 'ring-1 ring-cf-200'}`}>

                <div className={`flex items-center justify-between absolute z-10 right-4 text-cf-300 font-medium text-base ${formik.values[name] && !focus ? errorCondition ? 'text-error' : selfState === 'Medium' ? 'text-warning' : selfState === 'High' ? 'text-error' : 'text-primary-500' : 'text-cf-300'} ${(formik.values[name] !== '' || focus) ? 'top-1' : ''}`}>
                    {title}
                </div>

                <div className={`left-4 absolute font-bold text-xs z-20 ${!required ? 'text-cf-300' : selfState === 'Medium' ? 'text-warning' : selfState === 'High' ? 'text-error' : errorCondition ? 'text-error' : 'text-primary-500'}`}>
                    {
                        required ?
                            selfState === 'None' ?
                                <HiBadgeCheck size={20} /> :
                                selfState === 'Medium' ?
                                    'در انتظار تایید' :
                                    selfState === 'High' ?
                                        <HiExclamation size={20} /> :
                                        'اجباری' :
                            required === undefined ? '' : 'اختیاری'
                    }
                </div>

                {(formik.values[name] !== '' || focus) &&
                    <input
                        id={id}
                        disabled={!(required && state !== 'None' || !required)}
                        name={name}
                        ref={inputRef}
                        value={formik.values[name]}
                        type={type}
                        placeholder={placeholder}
                        onChange={formik.handleChange}
                        onBlur={(e) => { setFocus(false); formik.handleBlur(e) }}
                        className='w-full absolute bottom-0 fcc px-4 py-1 bg-white'
                    />
                }

            </div>
            <div className='flex text-error rounded-[4px] mt-2 pr-2 font-bold text-xs'>
                {
                    errorCondition ? (
                        <div>{formik.errors[name]}</div>
                    ) : null
                }
            </div>
        </div>
    )
}

export default InputText