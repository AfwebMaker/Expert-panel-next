"use client"

import React from 'react'
//formik
import { useFormik } from 'formik';
import * as Yup from 'yup';
//react icons
import { HiLibrary } from 'react-icons/hi'
//components
import Input from '@/app/_components/Input'
import Button from '@/app/_components/Button'

function BankForm() {
    const validationSchema = Yup.object().shape({
        cart: Yup.string()
            .required('لطفا شماره شبا خود را وارد کنید.')
            .matches(/^[0-9]*$/,'شماره شبا فقط باید شامل اعداد باشد!')
            .min(26,'به نظر می رسد شماره شبا وارده از ۲٦ کارکتر کمتر می باشد!')
            .max(26,'به نظر می رسد شماره شبا وارده از ۲٦ کارکتر بیشتر می باشد!'),
    });

    const formik = useFormik({
        initialValues: {
            cart: ''
        },
        validationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className='my-5'>
            <Input
                active={true}
                title='شماره شبا'
                state='required'
                type='text'
                placeholder='به طور مثال : ۱۲٦٥٤۸۷۹۸٦٥۳۲۳۳۳۱۰۰۰۰۱۰۲۳٥۱'
                className='mb-10'

                id='cart'
                name='cart'
                value={formik.values.cart}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.cart}
                touched={formik.touched.cart}
            />

            <Button type='submit' disable={false} icon={<HiLibrary size={20} />} title='احراز حساب بانکی' />
        </form>
    )
}

export default BankForm