"use client"

import React from 'react'
//formik
import { useFormik } from 'formik';
import * as Yup from 'yup';
//react icons
import { HiLockClosed } from 'react-icons/hi'
//components
import Input from '@/app/_components/Input'
import Button from '@/app/_components/Button'

function PasswordForm() {
    const validationSchema = Yup.object().shape({
        oldPassword: Yup.string()
            .required('لطفا رمز عبور قدیمی خود را وارد کنید'),
        newPassword: Yup.string()
            .required('لطفا رمز عبور جدید خود را وارد کنید')
            .min(8, 'رمز عبور باید حداقل شامل ۸ کاراکتر باشد')
            .matches(/[A-Z]/, 'رمز عبور باید شامل حداقل یک حرف بزرگ باشد')
            .matches(/[a-z]/, 'رمز عبور باید شامل حداقل یک حرف کوچک باشد')
            .matches(/[0-9]/, 'رمز عبور باید شامل حداقل یک عدد باشد')
            .matches(/[@$!%*?&]/, 'رمز عبور باید شامل کاراکترهای خاص (!@#$%...) باشد'),
        confirmNewPassword: Yup.string()
            .required('لطفا تکرار رمز عبور خود را وارد کنید')
            .oneOf([Yup.ref('newPassword'), null], 'رمز عبور با تکرار آن مطابقت ندارد')
    });

    const formik = useFormik({
        initialValues: {
            oldPassword: '',
            newPassword: '',
            confirmNewPassword: ''
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
                title='رمز عبور قدیمی'
                state='required'
                type='text'
                placeholder='••••••••••••'
                className='my-2 w-full'
                id='oldPassword'
                name='oldPassword'
                value={formik.values.oldPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.oldPassword}
                touched={formik.touched.oldPassword}
            />

            <div className='flex flex-wrap justify-between mb-10'>
                <Input
                    active={true}
                    title='رمز عبور جدید'
                    state='required'
                    type='text'
                    placeholder='••••••••••••'
                    className='my-2 w-full lg:w-[49%]'
                    id='newPassword'
                    name='newPassword'
                    value={formik.values.newPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.newPassword}
                    touched={formik.touched.newPassword}
                />

                <Input
                    active={true}
                    title='تکرار رمز عبور جدید'
                    state='required'
                    type='text'
                    placeholder='••••••••••••'
                    className='my-2 w-full lg:w-[49%]'
                    id='confirmNewPassword'
                    name='confirmNewPassword'
                    value={formik.values.confirmNewPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.confirmNewPassword}
                    touched={formik.touched.confirmNewPassword}
                />

                <button type='button' className='font-medium text-xs text-primary-500 mt-7 cursor-pointer'>
                    رمز عبور خود را فراموش کردید؟
                </button>
            </div>

            <Button type='submit' disable={false} icon={<HiLockClosed size={20} />} title='تغییر رمز عبور' />
        </form>
    )
}

export default PasswordForm