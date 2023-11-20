import React, { useEffect, useState } from 'react'
//formik
import { useFormik } from 'formik';
import * as Yup from 'yup';
//react icons
import { HiLibrary } from 'react-icons/hi'
//components
import Button from '/src/app/_components/Button'
import DynamicInputs from '/src/app/_components/inputs/DynamicInputs';
import Loading from '/src/app/_components/Loading';
//services
import bankAdd from '/src/services/person_kg_local/bankAdd'
import bankGet from '/src/services/person_kg_local/bankGet'
//redux
import { loadingHandler } from '/src/redux/features/layout/layoutConfigSlice';
import { useDispatch } from 'react-redux';

const validationSchema = Yup.object().shape({
    BankID: Yup.string()
        .required('لطفا شماره شبا خود را وارد کنید.')
        .matches(/^[0-9]*$/, 'شماره شبا فقط باید شامل اعداد باشد!')
        .min(24, 'به نظر می رسد شماره شبا وارده از 24 کارکتر کمتر می باشد!')
        .max(24, 'به نظر می رسد شماره شبا وارده از 24 کارکتر بیشتر می باشد!'),
});

function BankForm({ formState, setFormState }) {
    const dispatch = useDispatch()
    const [loadingPage, setLoadingPage] = useState(true)

    const formik = useFormik({
        initialValues: {
            BankID: ''
        },
        validationSchema,
        onSubmit: values => {
            dispatch(loadingHandler(true))
            bankAdd({ BankID: `IR${values.BankID}` })
                .then(() => {
                    setFormState(3)
                })
                .catch(() => {
                })
                .finally(() => {
                    dispatch(loadingHandler(false))
                })
        },
    });

    useEffect(() => {
        //get initial bank data
        bankGet()
            .then(res => {
                formik.setValues({
                    BankID: res.data.data.slice(2)
                })
            })
            .catch(() => {
            })
            .finally(() => {
                setLoadingPage(false)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <form onSubmit={formik.handleSubmit} className='mt-5'>
            {loadingPage && <Loading />}
            <DynamicInputs
                id='BankID'
                name='BankID'
                title='شماره شبا'
                state={formState}
                required={true}
                inputType="text"
                placeholder='به طور مثال : ۱۲٦٥٤۸۷۹۸٦٥۳۲۳۳۳۱۰۰۰۰۱۰۲۳٥۱'
                className='mb-10'
                formik={formik}
            />

            <Button type='submit' disable={(formState === 0 || formState === 3)} icon={<HiLibrary size={20} />} title='احراز حساب بانکی' />
        </form>
    )
}

export default BankForm