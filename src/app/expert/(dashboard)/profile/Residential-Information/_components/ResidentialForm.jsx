"use client"

import React, { useEffect, useState } from 'react'
//formik
import { useFormik } from 'formik';
import * as Yup from 'yup';
//react icons
import { HiHome } from 'react-icons/hi'
//components
import Button from '@/app/_components/Button'
import Loading from '@/src/app/_components/Loading';
import DynamicInputs from '@/src/app/_components/inputs/DynamicInputs';
//services
import addressAdd from '@/services/person_kg_local/addressAdd';
import addressGet from '@/services/person_kg_local/addressGet';
//toast
import toast from 'react-hot-toast';

const validationSchema = Yup.object().shape({
    address: Yup.string()
        .required('لطفا آدرس خود را وارد کنید.'),
    zipCode: Yup.string()
        .required('لطفا کد پستی خود را وارد کنید.'),

});

function ResidentialForm() {
    const [loadingPage, setLoadingPage] = useState(true)

    useEffect(() => {
        addressGet()
            .then(res => {
                console.log(res)
                formik.setValues({
                    address: res.data.data.addressRawText,
                    zipCode: res.data.data.zipCode,
                    addressDocumentationURL: res.data.data.addressDocumentationURL
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
            address: '',
            zipCode: '',
            addressDocumentationURL: ''
        },
        validationSchema,
        onSubmit: values => {
            addressAdd(values)
                .then(res => {
                    console.log(res)
                })
                .catch((err) => {
                    if (err.response.status === 400) {
                        toast.error(err.response.data.message)
                    }
                })
                .finally(() => {
                    setLoadingPage(false)
                })
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className='mt-5'>
            {loadingPage && <Loading />}
            <div className='flex flex-wrap justify-between mb-10'>
                <DynamicInputs
                    id='address'
                    name='address'
                    title='آدرس'
                    state='Low'
                    required={true}
                    inputType="text"
                    placeholder='به طور مثال : تهران، پونک، خیابان لاله..'
                    className='my-2 w-full lg:w-[49%]'
                    formik={formik}
                />

                <DynamicInputs
                    id='zipCode'
                    name='zipCode'
                    title='کد پستی'
                    state="Low"
                    required={true}
                    inputType="text"
                    placeholder='به طور مثال : ۱۱٥۸۷۹٦۸٤۲'
                    className='my-2 w-full lg:w-[49%]'
                    formik={formik}
                />
            </div>

            <div className='font-medium text-sm text-cf-300 mb-10'>
                <div>
                    <div className='text-cf-500 mb-5'>مدارک سکونتی</div>
                    <div className='mb-5'>تصویر سند خانه یا اجاره نامه</div>
                    <div className='mb-5 font-normal text-xs'>
                        مدارک شامل اسناد تصویری می باشد که شما باید آنها را به صورت یکی از فرمت های JPG , JPEG , PNG آپلود کنید.
                    </div>
                </div>

                <DynamicInputs
                    id='addressDocumentationURL'
                    name='addressDocumentationURL'
                    state="Low"
                    required={true}
                    inputType="uploadFile"
                    className='my-2 w-full mb-5'
                    formik={formik}
                />
            </div>
            <Button type='submit' disable={false} icon={<HiHome size={20} />} title='احراز اطلاعات سکونتی' />
        </form>
    )
}

export default ResidentialForm