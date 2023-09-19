"use client"

import React from 'react'
//formik
import { useFormik } from 'formik';
import * as Yup from 'yup';
//react icons
import { HiHome } from 'react-icons/hi'
//components
import Input from '@/app/_components/Input'
import Button from '@/app/_components/Button'
import UploadFile from './UploadFile'

function ResidentialForm() {
    const validationSchema = Yup.object().shape({
        address: Yup.string()
            .required('لطفا آدرس خود را وارد کنید.'),
        postId: Yup.string()
            .required('لطفا کد پستی خود را وارد کنید.'),
    });

    const formik = useFormik({
        initialValues: {
            address: '',
            postId: ''
        },
        validationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className='my-5'>
            <div className='flex flex-wrap justify-between mb-10'>
                <Input
                    title='آدرس'
                    state='required'
                    confirmed={false}
                    type='text'
                    placeholder='به طور مثال : تهران، پونک، خیابان لاله..'
                    className='my-2 w-full lg:w-[49%]'
                    id='address'
                    name='address'
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.address}
                    touched={formik.touched.address}
                />

                <Input
                    active={true}
                    title='کد پستی'
                    state='required'
                    type='text'
                    placeholder='به طور مثال : ۱۱٥۸۷۹٦۸٤۲'
                    className='my-2 w-full lg:w-[49%]'
                    id='postId'
                    name='postId'
                    value={formik.values.postId}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.postId}
                    touched={formik.touched.postId}
                />
            </div>
            <UploadFile />
            <Button type='submit' disable={false} icon={<HiHome size={20} />} title='احراز اطلاعات سکونتی' />
        </form>
    )
}

export default ResidentialForm