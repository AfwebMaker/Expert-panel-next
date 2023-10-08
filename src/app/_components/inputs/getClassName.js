// function getClassName({selfState, focus, error, touched, required, value}) {
//     let className = 'bg-white h-[60px] relative fcc flex-col rounded-md overflow-hidden ring-1 ring-cf-200';

//     if (selfState !== 'None') {
//         className += ' cursor-pointer';
//     }

//     if (focus) {
//         className += error && touched ? ' ring-2 ring-error' : ' ring-primary-500 ring-2';
//     } else if (required) {
//         switch (selfState) {
//             case 'None':
//                 className += ' ring-primary-500 ring-2';
//                 break;
//             case 'Medium':
//                 className += ' border-dashed border-warning border-2';
//                 break;
//             case 'High':
//                 className += ' ring-error ring-2';
//                 break;
//             default:
//                 break;
//         }
//     }

//     return className;
// }

//--------------------------------------------------------

// function InputText({ state, title, placeholder, type, className, id, name, required, formik }) {
//     // ... rest of your code ...

//     const baseClass = 'bg-white h-[60px] relative fcc flex-col rounded-md overflow-hidden';
//     const cursorClass = selfState !== 'None' ? 'cursor-pointer' : '';
//     const focusClass = focus ? errorCondition ? 'ring-2 ring-error' : 'ring-primary-500 ring-2' : '';
//     const requiredClass = !focus && required ? selfState === 'None' ? 'ring-primary-500 ring-2' : selfState === 'Medium' ? 'border-dashed border-warning border-2' : selfState === 'High' ? 'ring-error ring-2' : 'ring-1 ring-cf-200' : 'ring-1 ring-cf-200';

//     return (
//         <div className={`${className}`}>
//             <div onClick={clickHandler} className={`${baseClass} ${cursorClass} ${focusClass} ${requiredClass}`}>

//                 {/* ... rest of your code ... */}

//             </div>
//             {/* ... rest of your code ... */}
//         </div>
//     )
// }



//--------------------------------------------------------------------------------


import React, { useEffect, useRef, useState } from 'react'
import { HiExclamation, HiBadgeCheck } from 'react-icons/hi'

function InputText({ state, title, placeholder, type, className, id, name, required, formik }) {
    const errorCondition = formik.touched[name] && formik.errors[name]
    const inputRef = useRef(null)
    const [focus, setFocus] = useState(false);
    const [selfState, setSelfState] = useState(state);

    useEffect(() => {
        focus && inputRef.current.focus()
    }, [focus])

    const clickHandler = () => {
        state !== 'None' && setSelfState('Low')
        if ((required && state !== 'None' || !required)) {
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
        if (!required) return '';
        switch (selfState) {
            case 'None':
                return <HiBadgeCheck size={20} />;
            case 'Medium':
                return 'در انتظار تایید';
            case 'High':
                return <HiExclamation size={20} />;
            default:
                return required === undefined ? '' : 'اختیاری';
        }
    }

    return (
        <div className={`${className}`}>
            <div onClick={clickHandler} className={`bg-white h-[60px] relative fcc flex-col rounded-md overflow-hidden ${getRingStyle()} ${selfState !== 'None' ? 'cursor-pointer' : ''}`}>

                <div className={`flex items-center justify-between absolute z-10 right-4 text-cf-300 font-medium text-base ${getIconColor()} ${(formik.values[name] !== '' || focus) ? 'top-1' : ''}`}>
                    {title}
                </div>

                <div className={`left-4 absolute font-bold text-xs z-20 ${getIconColor()}`}>
                    {getRequiredIcon()}
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

