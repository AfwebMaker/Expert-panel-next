import React, { useRef, useState, useEffect } from 'react'
//react icons
import { HiOutlineChevronDown } from "react-icons/hi";
// component
import ComboBox from "./Combobox"

function CheckBox({ state, title, placeholder, className, id, name, error, required, formik }) {
    const errorCondition = formik.touched[name] && formik.errors[name]
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
            <div onClick={clickHandler} className={`${selfState !== 'None' ? 'cursor-pointer' : ''} bg-white h-[60px] relative fcc flex-col rounded-md ${focus ? errorCondition ? 'ring-2 ring-error' : 'ring-primary-500 ring-2' : ''} ${!focus && required ? selfState === 'None' ? 'ring-primary-500 ring-2' : selfState === 'Medium' ? 'border-dashed border-warning border-2' : selfState === 'High' ? 'ring-error ring-2' : 'ring-1 ring-cf-200' : 'ring-1 ring-cf-200'}`}>

                <div className={`flex items-center justify-between absolute z-10 right-4 text-cf-300 font-medium text-base ${formik.values[name] && !focus ? errorCondition ? 'text-error' : selfState === 'Medium' ? 'text-warning' : selfState === 'High' ? 'text-error' : 'text-primary-500' : 'text-cf-300'} ${(formik.values[name] !== '' || focus) ? 'top-1' : ''}`}>
                    {title}
                </div>

                <div className={`left-4 absolute font-bold text-xs z-20 ${!required ? 'text-cf-300' : selfState === 'Medium' ? 'text-warning' : selfState === 'High' ? 'text-error' : errorCondition ? 'text-error' : 'text-primary-500'}`}>
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
                    className={(formik.values[name] !== '' || focus) ? 'opacity-100' : 'opacity-0'}
                    value={formik.values[name]}
                    placeholder={placeholder}
                    onChange={formik.handleChange}
                    onBlur={(e) => { setFocus(false); formik.handleBlur(e) }}
                    formik={formik}
                />


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

export default CheckBox