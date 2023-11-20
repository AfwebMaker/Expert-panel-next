"use client"

import React, { useState } from 'react'
//formik
import { useFormik } from 'formik';
import * as Yup from 'yup';
//react icons
import { HiLockClosed } from 'react-icons/hi'
//components
import Button from '@/app/_components/Button'
import DynamicInputs from '@/src/app/_components/inputs/DynamicInputs';
import ForgetPassword from './ForgetPassword';
import CheckOtp from './CheckOtp';
//redux
import { loadingHandler } from '@/src/redux/features/layout/layoutConfigSlice';
import { useDispatch, useSelector } from 'react-redux';
//services
import changePassword from '@/services/person_kg_local/changePassword';
import forgetPhoneNumber from '@/src/services/register_kg_local/forgetPhoneNumber';
//toast
import customToast from '@/src/functions/customToast';

const validationSchema = Yup.object().shape({
    oldPass: Yup.string()
        .required('لطفا رمز عبور قدیمی خود را وارد کنید'),
    pass1: Yup.string()
        .required('لطفا رمز عبور جدید خود را وارد کنید')
        .min(8, 'رمز عبور باید حداقل شامل ۸ کاراکتر باشد')
        .matches(/[A-Z]/, 'رمز عبور باید شامل حداقل یک حرف بزرگ باشد')
        .matches(/[a-z]/, 'رمز عبور باید شامل حداقل یک حرف کوچک باشد')
        .matches(/[0-9]/, 'رمز عبور باید شامل حداقل یک عدد باشد')
        .matches(/[@$!%*?&]/, 'رمز عبور باید شامل کاراکترهای خاص (!@#$%...) باشد'),
    pass2: Yup.string()
        .required('لطفا تکرار رمز عبور خود را وارد کنید')
        .oneOf([Yup.ref('pass1'), null], 'رمز عبور با تکرار آن مطابقت ندارد')
});

function PasswordForm() {
    const [forgetPassword, setForgetPassword] = useState(false)
    const dispatch = useDispatch()
    const phoneNumber = useSelector(state => state.getExpertInfo.user.mainDataInfo ? state.getExpertInfo.user.mainDataInfo.personUser_Child.username : '')

    const formik = useFormik({
        initialValues: {
            oldPass: '',
            pass1: '',
            pass2: ''
        },
        validationSchema,
        onSubmit: values => {
            dispatch(loadingHandler(true))
            changePassword(values)
                .then(() => {
                    customToast('success', 'رمز شما با موفقیت تغییر کرد.')
                    formik.resetForm()
                })
                .catch(() => {
                })
                .finally(() => {
                    dispatch(loadingHandler(false))
                })
        }
    });

    const forgetPasswordHandler = () => {
        dispatch(loadingHandler(true))
        forgetPhoneNumber(phoneNumber)
            .then(res => {
                setForgetPassword('checkOtp')
            })
            .catch(() => {
            })
            .finally(() => {
                dispatch(loadingHandler(false))
            })
    }

    return (
        <>
            {forgetPassword === 'checkOtp' &&
                <div className='w-full h-full fixed bg-black/50 inset-0 z-[50] fcc'>
                    <div className='w-[85%] sm:w-[80%] max-w-[480px] bg-white rounded-lg'>
                        <CheckOtp phoneNumber={phoneNumber} setForgetPassword={setForgetPassword} />
                    </div>
                </div>
            }

            {forgetPassword === 'changePassword' &&
                <div className='w-full h-full fixed bg-black/50 inset-0 z-[50] fcc'>
                    <div className='w-[85%] sm:w-[80%] max-w-[480px] bg-white rounded-lg'>
                        <ForgetPassword setForgetPassword={setForgetPassword} />
                    </div>
                </div>
            }

            <form onSubmit={formik.handleSubmit} className='mt-5'>
                <DynamicInputs
                    id='oldPass'
                    name='oldPass'
                    title='رمز عبور قدیمی'
                    state="Low"
                    required={true}
                    inputType="text"
                    placeholder='••••••••••••'
                    className='my-2 w-full'
                    formik={formik}
                />

                <div className='flex flex-wrap justify-between mb-10'>
                    <DynamicInputs
                        id='pass1'
                        name='pass1'
                        title='رمز عبور جدید'
                        state="Low"
                        required={true}
                        inputType="text"
                        placeholder='••••••••••••'
                        className='my-2 w-full lg:w-[49%]'
                        formik={formik}
                    />

                    <DynamicInputs
                        id='pass2'
                        name='pass2'
                        title='تکرار رمز عبور جدید'
                        state="Low"
                        required={true}
                        inputType="text"
                        placeholder='••••••••••••'
                        className='my-2 w-full lg:w-[49%]'
                        formik={formik}
                    />

                    <button
                        onClick={forgetPasswordHandler}
                        type='button'
                        className='font-medium text-xs text-primary-500 mt-7 cursor-pointer'
                    >
                        رمز عبور خود را فراموش کردید؟
                    </button>
                </div>

                <Button type='submit' disable={false} icon={<HiLockClosed size={20} />} title='تغییر رمز عبور' />
            </form>
        </>
    )
}

export default PasswordForm