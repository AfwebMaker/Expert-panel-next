"use client"

//react
import React from 'react'
//components
import InputText from '@/app/_components/inputs/InputText'
import CheckBox from '@/app/_components/inputs/checkBox/CheckBox'

function DynamicInputs({ state, title, placeholder, className, onChange, onBlur, value, id, name, touched, error, required, inputType, formik }) {
    return (
        <>
            {inputType === 'text' &&
                <InputText
                    inputType={inputType}
                    title={title}
                    state={state}
                    required={required}
                    className={className}
                    placeholder={placeholder}
                    id={id}
                    name={name}
                    formik={formik}
                />
            }

            {inputType === 'checkBox' &&
                <CheckBox
                    inputType={inputType}
                    title={title}
                    state={state}
                    required={required}
                    className={className}
                    placeholder={placeholder}
                    id={id}
                    name={name}
                    formik={formik}
                />
            }
        </>
    )
}

export default DynamicInputs