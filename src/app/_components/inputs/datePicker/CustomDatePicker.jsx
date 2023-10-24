import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { HiExclamation, HiBadgeCheck } from 'react-icons/hi'
//date picker
import Datepicker from "react-tailwindcss-datepicker";
import moment from 'jalali-moment'

function CustomDatePicker({ state, title, placeholder, className, name, required, formik }) {
    const errorCondition = formik.touched[name] && formik.errors[name]
    const activeInputCondition = (required && (state !== 'None' && state !== 'Medium') || !required);
    const [dateInput, setDateInput] = useState({})
    const [container, setContainer] = useState({})
    const parentElem = useRef(null)
    const [focus, setFocus] = useState(false);
    const [selfState, setSelfState] = useState(state);

    //change date input handler
    const handleValueChange = (newValue) => { 
        setTimeout(() => {
            setFocus(false)
            dateInput[0].blur()
        }, 0);

        const gregorianFormat = moment(newValue.startDate, 'jYYYY/jMM/jDD').format('YYYY-MM-DD')
        formik.setFieldValue(name, gregorianFormat);
    }

    //get input element
    useLayoutEffect(() => {
        setDateInput(document.getElementsByClassName(name))
        setContainer(document.getElementsByClassName(`${name}-contain`))
    }, [])

    //click on custom input body 
    const clickHandler = () => {
        if (state !== 'None' && state !== 'Medium') {
            setSelfState('Low')
        }

        if ((required && (state !== 'None' && state !== 'Medium') || !required)) {
            dateInput[0] && dateInput[0].focus()
            setFocus(true)
        }
    }

    //change style of ready component
    useEffect(() => {
        if (focus) {
            container[0] && (container[0].children[2].children[0].style.display = 'none')
            container[0] && (container[0].style.zIndex  = '20')
            container[0] && (container[0].children[2].children[1].children[0].children[0].children[0].children[0].style.direction = 'ltr')
            container[0] && (container[0].children[2].children[1].children[0].children[0].children[0].children[0].children[1].style.direction = 'rtl')
            container[0] && (container[0].children[2].children[1].children[0].children[0].children[0].children[1].children[0].style.display = 'none')
            container[0] && (container[0].children[2].children[0].style.display = 'none')
            container[0] && (container[0].children[2].children[1].children[0].style.padding = "8px 0px 0px 0px")
            container[0] && (container[0].children[2].children[1].children[0].children[0].style.padding = "0px 4px 0px 4px")
            container[0] && (container[0].children[2].children[1].children[0].children[0].children[0].children[1].style.minHeight = 'auto')
        }
    }, [focus])

    //focus on input element when focus on parent element
    useEffect(() => {
        focus && dateInput[0].focus()
    }, [focus])

    //get click out side of element
    useEffect(() => {
        if (focus) {
            const handleClickOutside = (event) => {
                if (parentElem.current && !parentElem.current.contains(event.target)) {
                    setFocus(false)
                    formik.setFieldTouched(name, true)
                }
            };

            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }
    }, [focus]);

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
        <div ref={parentElem} className={className}>
            <div onClick={clickHandler} className={`transition-all duration-200 h-[60px] relative fcc flex-col rounded-md ${getRingStyle()} ${activeInputCondition ? 'cursor-pointer' : 'cursor-not-allowed'} ${activeInputCondition ? 'bg-white' : 'bg-gray-100'}`}>

                <div className={`flex items-center justify-between absolute z-10 right-4 text-cf-300 font-medium text-base ${getIconColor()} ${(!!formik.values[name] || focus) ? 'top-2 text-sm font-normal transition-all duration-200' : ''}`}>
                    {title}
                </div>

                <div className={`left-4 absolute font-bold text-xs z-10 ${getIconColor()}`}>
                    {getRequiredIcon()}
                </div>

                {(!!formik.values[name] || focus) &&
                    <div className={`absolute bottom-1 w-full pl-16`}>
                        <Datepicker
                            i18n='fa'
                            startFrom={new Date().toLocaleDateString('fa-IR-u-nu-latn')}
                            displayFormat={"YYYY/MM/DD"}
                            primaryColor='green'
                            placeholder={placeholder}
                            toggleClassName="hidden"
                            inputClassName={`${name} pr-4 w-full relative text-cf-400 flex flex ${activeInputCondition ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                            containerClassName={`${name}-contain relative z-10 font-bold text-sm `}
                            value={{
                                startDate: formik.values[name] && moment(formik.values[name], 'YYYY-MM-DD').format('jYYYY/jMM/jDD'),
                                endDate: formik.values[name] && moment(formik.values[name], 'YYYY-MM-DD').format('jYYYY/jMM/jDD')
                            }}
                            onChange={handleValueChange}
                            asSingle={true}
                            useRange={false}
                            disabled={!activeInputCondition}
                        />
                    </div>
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