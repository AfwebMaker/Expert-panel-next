"use client"

import React, { useEffect, useState } from 'react'
//formik
import { useFormik } from 'formik';
import * as Yup from 'yup';
//react icons
import { HiOutlineFingerPrint } from 'react-icons/hi'
//components
import InformationForm from './InformationForm'
import LegalForm from './LegalForm'
import UploadFile from './UploadFile'
import Button from '@/app/_components/Button'

function Forms() {
    const [legalFormIsActive, setLegalFormIsActive] = useState(false);
    const [validation, setValidation] = useState(false);
    const baseValidation = {
        firstName: Yup.string()
            .required('لطفا نام خود را وارد کنید.')
            .matches(/^[\u0600-\u06FF\s]+$/, 'نام باید با حروف فارسی نوشته شود.')
            .min(3, 'لطفا نام خود را به درستی وارد کنید.'),
        lastName: Yup.string()
            .required('لطفا نام خانوادگی خود را وارد کنید.')
            .matches(/^[\u0600-\u06FF\s]+$/, 'نام خانوادگی باید با حروف فارسی نوشته شود.')
            .min(3, 'لطفا نام خانوادگی خود را به درستی وارد کنید.'),
        fatherName: Yup.string()
            .required('لطفا نام پدر خود را وارد کنید.')
            .matches(/^[\u0600-\u06FF\s]+$/, 'نام پدر باید با حروف فارسی نوشته شود.')
            .min(3, 'لطفا نام پدر خود را به درستی وارد کنید.'),
        nationalCode: Yup.string()
            .required('لطفا کد ملی خود را وارد کنید.')
            .min(10, 'کد ملی باید شامل 10 رقم باشد.')
            .max(10, 'کد ملی باید شامل 10 رقم باشد.'),
        mobile: Yup.string()
            .required('لطفا شماره تلفن خود را وارد کنید.')
            .min(11, 'شماره تلفن باید شامل 11 رقم باشد.')
            .max(11, 'شماره تلفن باید شامل 11 رقم باشد.'),
        birthday: Yup.string()
            .required('لطفا تاریخ تولد خود را وارد کنید.'),
    }

    const legalValidation = {
        componyName: Yup.string()
            .required('لطفا نام شرکت خود را وارد کنید.')
            .matches(/^[\u0600-\u06FF\s]+$/, 'نام شرکت باید با حروف فارسی نوشته شود.')
            .min(3, 'لطفا نام شرکت خود را به درستی وارد کنید.'),
        nationalCodeCompony: Yup.string()
            .required('لطفا شناسه ملی خود را وارد کنید.')
            .min(11, 'شناسه ملی باید شامل 11 رقم باشد.')
            .max(11, 'شناسه ملی باید شامل 11 رقم باشد.'),
        activitySubject: Yup.string()
            .required('لطفا موضوع فعالیت خود را وارد کنید.')
            .matches(/^[\u0600-\u06FF\s]+$/, 'موضوع فعالیت باید با حروف فارسی نوشته شود.'),
        dateEstablishment: Yup.string()
            .required('لطفا تاریخ تاسیس شرکت خود را وارد کنید.'),
        companyType: Yup.string()
            .required("لطفا نوع شرکت خود را وارد کنید."),
        registrationNumber: Yup.string()
            .required("لطفا شماره ثبت شرکت خود را وارد کنید."),
    }

    const validationSchema = Yup.object().shape(validation);

    //validation field control
    useEffect(() => {
        !legalFormIsActive ?
            setValidation(baseValidation) :
            setValidation({ ...baseValidation, ...legalValidation })
    }, [legalFormIsActive])

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            fatherName: '',
            nationalCode: '',
            mobile: '',
            birthday: '',
            birthPlace: '',
            email: '',
            componyName: '',
            nationalCodeCompony: '',
            activitySubject: '',
            companyType: '',
            dateEstablishment: '',
            registrationNumber: ''
        },
        validationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <InformationForm formik={formik} />
            <LegalForm legalFormIsActive={legalFormIsActive} setLegalFormIsActive={setLegalFormIsActive} formik={formik} />
            <UploadFile />
            <Button type='submit' icon={<HiOutlineFingerPrint size={20} />} title='ثبت و احراز هویت' />
        </form>
    )
}

export default Forms;