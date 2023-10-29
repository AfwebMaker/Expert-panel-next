import React, { useRef, useState, useEffect } from 'react'
//react icons
import { HiOutlineChevronDown, HiBadgeCheck } from "react-icons/hi";
// component
import CustomComboBox from "./CustomComboBox"
import ComboBoxIcon from "./ComboBoxIcon"

function CheckBox({ state, title, placeholder, className, name, required, formik, inputType }) {
    const [cartNumbers, setCartNumbers] = useState([])
    const errorCondition = (formik.touched[name] && formik.errors[name])
    const activeInputCondition = (required && (state !== 'None' && state !== 'Medium') || !required);
    const inputRef = useRef(null)
    const buttonRef = useRef(null)
    const parentElem = useRef(null)
    const [focus, setFocus] = useState(false);
    const [selfState, setSelfState] = useState('Low');

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
            { id: 1, text: '12344321****6789' },
            { id: 2, text: '12344321****6789' },
            { id: 3, text: '12344321****6789' },
            { id: 4, text: '43572352****3526' }
        ],
        active: '5'
    }

    useEffect(() => {
        setSelfState(state)
    }, [state])

    //edit input format
    const cartNumberFormat = (cartNum) => {
        return String(cartNum.match(/.{1,4}/g).join(" - "))
    }

    //bankCart edit format
    useEffect(() => {
        const newData = data2.list.map((item) => {
            return { ...item, text: cartNumberFormat(item.text) }
        })
        setCartNumbers(newData)
    }, [])

    //input blur handler
    const onBlurHandler = (e) => {
        formik.handleBlur(e);
        setTimeout(() => {
            if (focus) {
                inputRef.current.blur()
                setFocus(false)
            }
        }, 120);
    }

    const clickHandler = () => {
        if (state !== 'None' && state !== 'Medium') {
            setSelfState('Low')
        }

        if (activeInputCondition) {
            buttonRef.current.click()
            !focus ? inputRef.current.focus() : inputRef.current.blur()
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
        <div ref={parentElem} className={`${className}`}>
            <div onClick={clickHandler} className={`transition-all duration-200 min-h-[60px] relative fcc flex-col rounded-md ${getRingStyle()} ${activeInputCondition ? 'cursor-pointer' : 'cursor-not-allowed'} ${activeInputCondition ? 'bg-white' : 'bg-gray-100'}`}>

                <div className={`flex items-center justify-between absolute z-10 right-4 text-cf-300 font-medium text-base ${getIconColor()} ${(!!formik.values[name] || focus) ? 'top-2 text-sm font-normal transition-all duration-200' : ''}`}>
                    {title}
                </div>

                <div className={`left-4 absolute font-bold text-xs z-10 ${getIconColor()}`}>
                    {getRequiredIcon()}
                </div>

                {inputType === 'dropDown' ?
                    <CustomComboBox
                        name={name}
                        activeInput={!activeInputCondition}
                        inputRef={inputRef}
                        buttonRef={buttonRef}
                        className={(!!formik.values[name] || focus) ? 'opacity-100' : 'opacity-0'}
                        value={formik.values[name]}
                        placeholder={placeholder}
                        onChange={formik.handleChange}
                        onBlur={onBlurHandler}
                        formik={formik}
                        data={data1}
                        focus={focus}
                    /> :
                    <ComboBoxIcon
                        name={name}
                        activeInput={!activeInputCondition}
                        inputRef={inputRef}
                        buttonRef={buttonRef}
                        className={(!!formik.values[name] || focus) ? 'opacity-100' : 'opacity-0'}
                        value={formik.values[name]}
                        placeholder={placeholder}
                        onChange={formik.handleChange}
                        onBlur={onBlurHandler}
                        formik={formik}
                        items={cartNumbers}
                        focus={focus}
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