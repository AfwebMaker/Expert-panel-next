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
import Button from '@/app/_components/Button'
// functions
import getExpertInfo from '@/services/person_kg_local/getExpertInfo'
import updateExpertInfo from '@/services/person_kg_local/updateExpertInfo'
import toast from 'react-hot-toast';
import DynamicInputs from '@/src/app/_components/inputs/DynamicInputs';
//loading redux
import { useDispatch } from 'react-redux';
import { loadingHandler } from '@/src/redux/features/layout/layoutConfigSlice';
import Loading from '@/src/app/_components/Loading';

function Forms({ setAvatar, avatar, formState }) {
    const dispatch = useDispatch()
    const [loadingPage, setLoadingPage] = useState(true)
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
        backgroundURL: Yup.mixed()
            .test(
                "required",
                "لطفا یک فایل را انتخاب کنید",
                (value) => value && Object.keys(value).length
            )
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
            registrationNumber: '',
            backgroundURL: {},
        },
        validationSchema,
        onSubmit: values => {
            const data = {
                "mainDataInfo": {
                    "id": 0,
                    "firstName": values.firstName,
                    "lastName": values.lastName,
                    "nationalCode": values.nationalCode,
                    "email": values.email,
                    "fatherName": values.fatherName,
                    "gender": 0,
                    "birthday": values.birthday,
                    "birthPlace": values.birthPlace,
                    "job": "string",
                    "education": 0,
                    "avatarURL": avatar,
                    "date_Create": "2023-10-18T07:28:41.638Z",
                    "date_Update": "2023-10-18T07:28:41.638Z",
                    "idExpert": 0,
                    "idUser": 0,
                    "personUser_Child": {
                        "id": 0,
                        "id_PersonInfo": 0,
                        "mobile": values.mobile,
                        "username": "string",
                        "pass": "string",
                        "accountState": 0
                    },
                    "lst_Address_Child": [
                        {
                            "id": 0,
                            "province": "string",
                            "city": "string",
                            "address": "string",
                            "number": "string",
                            "unit": "string",
                            "telephoneNumber": "string",
                            "zipCode": "string",
                            "addressType": 0,
                            "maoLocation": "string",
                            "date_Create": "2023-10-18T07:28:41.638Z",
                            "date_Update": "2023-10-18T07:28:41.638Z"
                        }
                    ]
                },
                "mainDataCompany": legalFormIsActive ? {
                    "id": 0,
                    "id_expert": 0,
                    "name": values.componyName,
                    "nationalCode": values.nationalCode,
                    "activitySubject": values.activitySubject,
                    "companyType": values.companyType,
                    "dateEstablishment": values.dateEstablishment,
                    "registrationNumber": values.registrationNumber
                } : null,
                "backgroundURL": values.backgroundURL
            }

            dispatch(loadingHandler(true))
            updateExpertInfo(data)
                .then(res => {
                })
                .catch(() => {
                })
                .finally(() => {
                    dispatch(loadingHandler(false))
                })
        },
    });

    //validation field control
    useEffect(() => {
        !legalFormIsActive ?
            setValidation(baseValidation) :
            setValidation({ ...baseValidation, ...legalValidation })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [legalFormIsActive])

    //get initial data from server
    useEffect(() => {
        getExpertInfo()
            .then(res => {
                res.data.data.mainDataInfo.avatarURL && setAvatar(res.data.data.mainDataInfo.avatarURL)
                res.data.data.mainDataCompany ? setLegalFormIsActive(true) : setLegalFormIsActive(false)
                formik.setValues({
                    firstName: res.data.data.mainDataInfo.firstName,
                    lastName: res.data.data.mainDataInfo.lastName,
                    fatherName: res.data.data.mainDataInfo.fatherName,
                    nationalCode: res.data.data.mainDataInfo.nationalCode,
                    mobile: '0' + res.data.data.mainDataInfo.personUser_Child.mobile,
                    birthday: res.data.data.mainDataInfo.birthday ? res.data.data.mainDataInfo.birthday : '',
                    birthPlace: res.data.data.mainDataInfo.birthPlace,
                    email: res.data.data.mainDataInfo.email,
                    componyName: res.data.data.mainDataCompany ? res.data.data.mainDataCompany.componyName : null,
                    nationalCodeCompony: res.data.data.mainDataCompany ? res.data.data.mainDataCompany.nationalCodeCompony : null,
                    activitySubject: res.data.data.mainDataCompany ? res.data.data.mainDataCompany.activitySubject : null,
                    companyType: res.data.data.mainDataCompany ? res.data.data.mainDataCompany.companyType : null,
                    dateEstablishment: res.data.data.mainDataCompany ? res.data.data.mainDataCompany.dateEstablishment : null,
                    registrationNumber: res.data.data.mainDataCompany ? res.data.data.mainDataCompany.registrationNumber : null,
                    backgroundURL: res.data.data.backgroundURL ? res.data.data.backgroundURL : {}
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
        <>
            {loadingPage && <Loading />}
            <form onSubmit={formik.handleSubmit}>
                <InformationForm formik={formik} formState={formState} />

                <LegalForm
                    legalFormIsActive={legalFormIsActive}
                    setLegalFormIsActive={setLegalFormIsActive}
                    formState={formState}
                    formik={formik}
                />

                <div className='font-medium text-sm text-cf-300 mb-10'>
                    <div>
                        <div className='text-cf-500 mb-5'>مدارک سکونتی</div>
                        <div className='mb-5'>تصویر گواهی عدم سو پیشینه</div>
                        <div className='mb-5 font-normal text-xs'>
                            مدارک شامل اسناد تصویری می باشد که شما باید آنها را به صورت یکی از فرمت های JPG , JPEG , PNG آپلود کنید.
                        </div>
                    </div>
                    <DynamicInputs
                        id="backgroundURL"
                        name="backgroundURL"
                        inputType="uploadFile"
                        title="آپلود فایل"
                        required={true}
                        className={'mb-4'}
                        state={formState}
                        formik={formik}
                    />
                </div>
                <Button type='submit' disable={(formState === 0 || formState === 3)} icon={<HiOutlineFingerPrint size={20} />} title='ثبت و احراز هویت' />
            </form>
        </>
    )
}

export default Forms;