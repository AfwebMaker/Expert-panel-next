"use client"

import React, { useEffect, useState } from 'react'
//formik
import { useFormik } from 'formik';
import * as Yup from 'yup';
//react icons
import { HiLibrary } from 'react-icons/hi'
//components
import Button from '@/app/_components/Button'
import DynamicInputs from '@/src/app/_components/inputs/DynamicInputs';
import { useDispatch } from 'react-redux';
//services
import bankAdd from '@/services/person_kg_local/bankAdd'
import bankGet from '@/services/person_kg_local/bankGet'
import Loading from '@/src/app/_components/Loading';
import { loadingHandler } from '@/src/redux/features/layout/layoutConfigSlice';

const validationSchema = Yup.object().shape({
    cart: Yup.string()
        .required('لطفا شماره شبا خود را وارد کنید.')
        .matches(/^[0-9]*$/, 'شماره شبا فقط باید شامل اعداد باشد!')
        .min(26, 'به نظر می رسد شماره شبا وارده از ۲٦ کارکتر کمتر می باشد!')
        .max(26, 'به نظر می رسد شماره شبا وارده از ۲٦ کارکتر بیشتر می باشد!'),
});

function BankForm() {
    const dispatch = useDispatch()
    const [loadingPage, setLoadingPage] = useState(true)

    useEffect(() => {
        bankGet()
            .then(res => {
                formik.setValues({
                    cart: res.data.data
                })
            })
            .catch(() => {
            })
            .finally(() => {
                setLoadingPage(false)
            })
    }, [])

    const formik = useFormik({
        initialValues: {
            cart: ''
        },
        validationSchema,
        onSubmit: values => {
            dispatch(loadingHandler(true))
            bankAdd()
                .then(res => {
                    console.log(res)
                    formik.values({
                        cart: values.cart
                    })
                })
                .catch(() => {
                })
                .finally(() => {
                    dispatch(loadingHandler(false))
                })
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className='mt-5'>
            {loadingPage && <Loading />}
            <DynamicInputs
                id='cart'
                name='cart'
                title='شماره شبا'
                state="Low"
                required={true}
                inputType="text"
                placeholder='به طور مثال : ۱۲٦٥٤۸۷۹۸٦٥۳۲۳۳۳۱۰۰۰۰۱۰۲۳٥۱'
                className='mb-10'
                formik={formik}
            />

            <Button type='submit' disable={false} icon={<HiLibrary size={20} />} title='احراز حساب بانکی' />
        </form>
    )
}

export default BankForm