"use client"

import React from 'react'
//formik
import { useFormik } from 'formik';
import * as Yup from 'yup';
//components
import DynamicInputs from '../../../_components/inputs/DynamicInputs'

function Page() {
    const validationSchema = Yup.object({
        textInput: Yup.string()
            .required('لطفا نام خود را وارد کنید.')
            .matches(/^[\u0600-\u06FF\s]+$/, 'نام باید با حروف فارسی نوشته شود.')
            .min(3, 'لطفا نام خود را به درستی وارد کنید.'),
        lastName: Yup.string()
            .required('لطفا نام خانوادگی خود را به درستی وارد کنید.'),
    })

    const inputObjects = [
        {
            id: 'textInput',
            name: 'textInput',
            inputType: 'text',
            title: 'تکست',
            required: true,
            type: 'text',
            placeholder: 'به طور مثال : محمد'
        },
        {
            id: 'test',
            name: 'test',
            inputType: 'text',
            title: 'اختیاری',
            required: false,
            type: 'text',
            placeholder: 'به طور مثال : محمد'
        },
        {
            id: 'lastName',
            name: 'lastName',
            inputType: 'checkBox',
            title: 'نام خانوادگی',
            required: true,
            type: 'text',
            placeholder: 'به طور مثال : جواد زاده'
        },
        {
            id: 'checkBoxMultipleInput',
            name: 'checkBoxMultipleInput',
            inputType: 'checkBoxMultiple',
            title: 'نام خانوادگی',
            required: true,
            type: 'text',
            placeholder: 'به طور مثال : جواد زاده'
        }
    ]

    const formik = useFormik({
        initialValues: {
            textInput: 'یییی',
            lastName: '',
            test: '',
            checkBoxMultipleInput:''
        },
        validationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} >
            <div className='fcc flex-col pt-6'>
                {
                    inputObjects.map((item) => (
                        <DynamicInputs
                            key={item.id}
                            inputType={item.inputType}
                            title={item.title}
                            state=''
                            required={item.required}
                            className='my-2 w-full lg:w-[49%]'
                            placeholder={item.placeholder}
                            id={item.id}
                            name={item.name}
                            formik={formik}
                        />
                    ))
                }
            </div>

            <button type='submit' >submit</button>
        </form>

    )
}

export default Page