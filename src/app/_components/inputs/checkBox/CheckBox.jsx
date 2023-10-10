import React, { useRef, useState, useEffect } from 'react'
//react icons
import { HiOutlineChevronDown, HiBadgeCheck } from "react-icons/hi";
// component
import ComboBox from "./ComboBox"
import ComboBoxIcon from "./ComboBoxIcon"

function CheckBox({ state, title, placeholder, className, id, name, required, formik }) {
    const errorCondition = formik.touched[name] && formik.errors[name]
    const activeInputCondition = (required && (state !== 'None' && state !== 'Medium') || !required);
    const inputRef = useRef(null)
    const buttonRef = useRef(null)
    const [focus, setFocus] = useState(false);
    const [selfState, setSelfState] = useState(state);

    const data1 = {
        list: [
            { id: 1, text: 'ضصثیب' },
            { id: 2, text: 'سثیببص' },
            { id: 3, text: 'صثبب' },
            { id: 4, text: 'صثبب' },
            { id: 5, text: 'صثبصثب' },
            { id: 6, text: 'ضصثق' },
        ],
        active: '5'
    }

    const data2 = {
        list: [
            { id: 1, text: '٦۲۷٤ - ۱۲۱۱ - **** - ۱۰۸۲' },
            { id: 2, text: '٦۲۷٤ - ۱۲۱۱ - **** - ۱۰۸۲' },
            { id: 3, text: '٦۲۷٤ - ۱۲۱۱ - **** - ۱۰۸۲' },
            { id: 4, text: '٦۲۷٤ - ۱۲۱۱ - **** - ۱۰۸۲' },
            { id: 5, text: '٦۲۷٤ - ۱۲۱۱ - **** - ۱۰۸۲' },
            { id: 6, text: '٦۲۷٤ - ۱۲۱۱ - **** - ۱۰۸۲' },
        ],
        active: '5'
    }

    //focus handler
    useEffect(() => {
        focus && inputRef.current.focus()
    }, [focus])

    const clickHandler = () => {
        if (state !== 'None' && state !== 'Medium') {
            setSelfState('Low')
        }

        if (activeInputCondition) {
            buttonRef.current.click()
            setFocus(true)
        }
    }

    const getRingStyle = () => {
        if (focus) return errorCondition ? 'ring-2 ring-error' : 'ring-primary-500 ring-2';
        if (!focus && required) {
            switch (selfState) {
                case 'None':
                    return 'ring-primary-500 ring-2';
                case 'Medium':
                    return 'border-dashed border-warning border-2';
                case 'High':
                    return 'ring-error ring-2';
                default:
                    return 'ring-1 ring-cf-200';
            }
        }
        return 'ring-1 ring-cf-200';
    }

    const getIconColor = () => {
        if (formik.values[name] && !focus) {
            if (errorCondition) return 'text-error';
            switch (selfState) {
                case 'Medium':
                    return 'text-warning';
                case 'High':
                    return 'text-error';
                default:
                    return 'text-primary-500';
            }
        }
        return 'text-cf-300';
    }

    const getRequiredIcon = () => {
        if (!required) return <HiOutlineChevronDown className="h-4 w-4 text-gray-400" />;
        switch (selfState) {
            case 'None':
                return <HiBadgeCheck className='text-primary-500' size={20} />;
            case 'Medium':
                return <div className='text-warning'>در انتظار تایید</div>;
            case 'High':
                return <HiOutlineChevronDown className="h-4 w-4 text-error" />;
            default:
                return required === undefined ? '' : <HiOutlineChevronDown className="h-4 w-4 text-gray-400" />;
        }
    }

    return (
        <div className={`${className}`}>
            <div onClick={clickHandler} className={`transition-all duration-200 h-[80px] relative fcc flex-col rounded-md ${getRingStyle()} ${activeInputCondition ? 'cursor-pointer' : 'cursor-not-allowed'} ${activeInputCondition ? 'bg-white' : 'bg-gray-100'}`}>

                <div className={`flex items-center justify-between absolute z-10 right-4 text-cf-300 font-medium text-base ${getIconColor()} ${(formik.values[name] !== '' || focus) ? 'top-2 text-sm font-normal transition-all duration-200' : ''}`}>
                    {title}
                </div>

                <div className={`left-4 absolute font-bold text-xs z-20 ${getIconColor()}`}>
                    {getRequiredIcon()}
                </div>

                {false ?
                    <ComboBox
                        id={id}
                        name={name}
                        activeInput={!activeInputCondition}
                        inputRef={inputRef}
                        buttonRef={buttonRef}
                        className={(formik.values[name] !== '' || focus) ? 'opacity-100' : 'opacity-0'}
                        value={formik.values[name]}
                        placeholder={placeholder}
                        onChange={formik.handleChange}
                        onBlur={(e) => { setFocus(false); formik.handleBlur(e) }}
                        formik={formik}
                        data={data1}
                    /> :
                    <ComboBoxIcon
                        id={id}
                        name={name}
                        activeInput={!activeInputCondition}
                        inputRef={inputRef}
                        buttonRef={buttonRef}
                        className={(formik.values[name] !== '' || focus) ? 'opacity-100' : 'opacity-0'}
                        value={formik.values[name]}
                        placeholder={placeholder}
                        onChange={formik.handleChange}
                        onBlur={(e) => { setFocus(false); formik.handleBlur(e) }}
                        formik={formik}
                        data={data2}
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

export default CheckBox