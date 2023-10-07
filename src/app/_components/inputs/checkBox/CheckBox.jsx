import React, { useRef, useState, useEffect } from 'react'
//react icons
import { HiOutlineChevronDown } from "react-icons/hi";
// component
import ComboBox from "./Combobox"

function CheckBox({ state, title, placeholder, className, onChange, onBlur, value, id, name, touched, error, required, formik }) {
    const inputRef = useRef(null)
    const buttonRef = useRef(null)
    const [focus, setFocus] = useState(false);
    const [selfState, setSelfState] = useState(state);

    //focus handler
    useEffect(() => {
        focus && inputRef.current.focus()
    }, [focus])

    const clickHandler = () => {
        state !== 'None' && setSelfState('Low')
        console.log(buttonRef)
        buttonRef.current.click()
        if ((required && state !== 'None' || !required)) {
            setFocus(true)
        }
    }

    return (
        <div className={`${className}`}>
            <div onClick={clickHandler} className={`${selfState !== 'None' ? 'cursor-pointer' : ''} bg-white h-[60px] relative fcc flex-col rounded-md ${focus ? error && touched ? 'ring-2 ring-error' : 'ring-primary-500 ring-2' : ''} ${!focus && required ? selfState === 'None' ? 'ring-primary-500 ring-2' : selfState === 'Medium' ? 'border-dashed border-warning border-2' : selfState === 'High' ? 'ring-error ring-2' : 'ring-1 ring-cf-200' : 'ring-1 ring-cf-200'}`}>

                <div className={`flex items-center justify-between absolute z-10 right-4 text-cf-300 font-medium text-base ${value && !focus ? error && touched ? 'text-error' : selfState === 'Medium' ? 'text-warning' : selfState === 'High' ? 'text-error' : 'text-primary-500' : 'text-cf-300'} ${(value !== '' || focus) ? 'top-1' : ''}`}>
                    {title}
                </div>

                <div className={`left-4 absolute font-bold text-xs z-20 ${!required ? 'text-cf-300' : selfState === 'Medium' ? 'text-warning' : selfState === 'High' ? 'text-error' : (touched && error) ? 'text-error' : 'text-primary-500'}`}>
                </div>

                <HiOutlineChevronDown
                    className="h-4 w-4 text-gray-400 absolute left-4"
                />

                <ComboBox
                    id={id}
                    name={name}
                    state={selfState === 'None' ? true : false}
                    inputRef={inputRef}
                    buttonRef={buttonRef}
                    className={(value !== '' || focus) ? 'opacity-100' : 'opacity-0'}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    onBlur={(e) => { setFocus(false); console.log(error); onBlur(e) }}
                    formik={formik}
                />


            </div>
            <div className='flex text-error rounded-[4px] mt-2 pr-2 font-bold text-xs'>
                {
                    touched && error ? (
                        <div>{error}</div>
                    ) : null
                }
            </div>
        </div>
    )
}

export default CheckBox