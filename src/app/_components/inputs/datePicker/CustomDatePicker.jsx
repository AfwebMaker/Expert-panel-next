import React, { useEffect, useRef, useState } from 'react'
import { HiExclamation, HiBadgeCheck } from 'react-icons/hi'
//date picker
import Datepicker from "react-tailwindcss-datepicker";

function CustomDatePicker({ state, title, placeholder, type, className, id, name, required, formik }) {
    const errorCondition = formik.touched[name] && formik.errors[name]
    const activeInputCondition = (required && (state !== 'None' && state !== 'Medium') || !required);
    const inputRef = useRef(null)
    const [focus, setFocus] = useState(false);
    const [selfState, setSelfState] = useState(state);

    const [value, setValue] = useState({});


    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    }

    // //when click on custom component focus on html input 
    // useEffect(() => {
    //     focus && inputRef.current.focus()
    // }, [focus])

    //click on custom input body
    const clickHandler = () => {
        if (state !== 'None' && state !== 'Medium') {
            setSelfState('Low')
        }

        if ((required && (state !== 'None' && state !== 'Medium') || !required)) {
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
        if (!required) return 'اختیاری';
        switch (selfState) {
            case 'None':
                return <HiBadgeCheck className='text-primary-500' size={20} />;
            case 'Medium':
                return <div className='text-warning'>در انتظار تایید</div>;
            case 'High':
                return <HiExclamation className='text-error' size={20} />;
            default:
                return required === undefined ? '' : 'اجباری';
        }
    }

    return (
        <div className={className}>
            <div onClick={clickHandler} className={`transition-all duration-200 h-[60px] relative fcc flex-col rounded-md ${getRingStyle()} ${activeInputCondition ? 'cursor-pointer' : 'cursor-not-allowed'} ${activeInputCondition ? 'bg-white' : 'bg-gray-100'}`}>

                <div className={`flex items-center justify-between absolute z-10 right-4 text-cf-300 font-medium text-base ${getIconColor()} ${(formik.values[name] !== '' || focus) ? 'top-2 text-sm font-normal transition-all duration-200' : ''}`}>
                    {title}
                </div>

                <div className={`left-4 absolute font-bold text-xs z-10 ${getIconColor()}`}>
                    {getRequiredIcon()}
                </div>

                {(formik.values[name] !== '' || focus) &&
                    <div className={`w-full absolute bottom-0 fcc px-4 pb-2 pl-16 font-medium text-sm ${activeInputCondition ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                        <Datepicker
                            i18n='fa'
                            placeholder={placeholder}
                            toggleClassName={'flex ml-2'}
                            inputClassName={'flex items-center absolute bottom-0 right-2 mb-10'}
                            containerClassName="w-full flex "
                            value={value}
                            onChange={handleValueChange}
                            asSingle={true}
                            useRange={false}

                        />
                    </div>

                    // <input
                    //     id={id}
                    //     disabled={!activeInputCondition}
                    //     name={name}
                    //     ref={inputRef}
                    //     value={formik.values[name]}
                    //     type={type}
                    //     placeholder={placeholder}
                    //     onChange={formik.handleChange}
                    //     onBlur={(e) => { setFocus(false); formik.handleBlur(e) }}
                    //     className={`w-full absolute bottom-0 fcc px-4 pb-2 pl-16 font-medium text-sm ${activeInputCondition ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                    // />
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

export default CustomDatePicker