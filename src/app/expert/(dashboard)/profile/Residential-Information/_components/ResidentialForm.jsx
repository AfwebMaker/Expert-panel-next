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
//redux
import { useDispatch } from 'react-redux';
import { loadingHandler } from '@/src/redux/features/layout/layoutConfigSlice';

const validationSchema = Yup.object().shape({
    zipCode: Yup.string()
        .required('لطفا کد پستی خود را وارد کنید.')
        .min(10, 'کد پستی باید شامل 10 رقم باشد.')
        .max(10, 'کد پستی باید شامل 10 رقم باشد.'),

});

function ResidentialForm({ formState, setFormState }) {
    const dispatch = useDispatch()
    const [loadingPage, setLoadingPage] = useState(true)

    const formik = useFormik({
        initialValues: {
            zipCode: '',
            addressDocumentationURL: ''
        },
        validationSchema,
        onSubmit: values => {
            dispatch(loadingHandler(true))
            addressAdd(values)
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
        addressGet()
            .then(res => {
                formik.setValues({
                    zipCode: res.data.data.zipCode,
                    addressDocumentationURL: res.data.data.addressDocumentationURL
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
            <div className='flex flex-wrap justify-between mb-10'>
                <DynamicInputs
                    id='zipCode'
                    name='zipCode'
                    title='کد پستی'
                    state={formState}
                    required={true}
                    inputType="text"
                    placeholder='به طور مثال : ۱۱٥۸۷۹٦۸٤۲'
                    className='my-2 w-full'
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
                    state={formState}
                    required={true}
                    inputType="uploadFile"
                    className='my-2 w-full mb-5'
                    formik={formik}
                />
            </div>
            <Button type='submit' disable={(formState === 0 || formState === 3)} icon={<HiHome size={20} />} title='احراز اطلاعات سکونتی' />
        </form>
    )
}

export default ResidentialForm