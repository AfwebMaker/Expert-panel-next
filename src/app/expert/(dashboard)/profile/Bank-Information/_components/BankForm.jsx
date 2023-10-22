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
import Loading from '@/src/app/_components/Loading';
//services
import bankAdd from '@/services/person_kg_local/bankAdd'
import bankGet from '@/services/person_kg_local/bankGet'
//redux
import { loadingHandler } from '@/src/redux/features/layout/layoutConfigSlice';
import { useDispatch } from 'react-redux';
//toast
import toast from 'react-hot-toast';

const validationSchema = Yup.object().shape({
    BankID: Yup.string()
        .required('لطفا شماره شبا خود را وارد کنید.')
        .matches(/^[0-9]*$/, 'شماره شبا فقط باید شامل اعداد باشد!')
        .min(24, 'به نظر می رسد شماره شبا وارده از 24 کارکتر کمتر می باشد!')
        .max(24, 'به نظر می رسد شماره شبا وارده از 24 کارکتر بیشتر می باشد!'),
});

function BankForm() {
    const dispatch = useDispatch()
    const [loadingPage, setLoadingPage] = useState(true)

    useEffect(() => {
        bankGet()
            .then(res => {
                formik.setValues({
                    BankID: res.data.data.BankID
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
            BankID: ''
        },
        validationSchema,
        onSubmit: values => {
            dispatch(loadingHandler(true))
            bankAdd(values)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    if (err.response.status === 400) {
                        toast.error(err.response.data.message)
                    }
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
                id='BankID'
                name='BankID'
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