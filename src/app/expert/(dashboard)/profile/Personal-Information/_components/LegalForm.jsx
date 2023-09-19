import React, { useState } from 'react'
//components
import Input from '@/app/_components/Input'
import SwitchInput from '@/app/_components/SwitchInput'

function LegalForm({ formik, legalFormIsActive, setLegalFormIsActive }) {

    const inputData = [
        {
            id: 'componyName',
            name: 'componyName',
            title: 'نام شرکت',
            state: 'required',
            confirmed: false,
            type: 'text',
            placeholder: 'به طور مثال : مهراز گستر'
        },
        {
            id: 'nationalCodeCompony',
            name: 'nationalCodeCompony',
            title: 'شناسه ملی',
            state: 'required',
            confirmed: false,
            type: 'text',
            placeholder: 'به طور مثال : ۸٤٦۹۷۰۲۸۷'
        },
        {
            id: 'activitySubject',
            name: 'activitySubject',
            title: 'موضوع فعالیت',
            state: 'required',
            confirmed: false,
            type: 'text',
            placeholder: 'به طور مثال : پیمانکارا خدمات بازسازی'
        },
        {
            id: 'companyType',
            name: 'companyType',
            title: 'نوع شرکت',
            state: 'required',
            confirmed: false,
            type: 'text',
            placeholder: ''
        },
        {
            id: 'dateEstablishment',
            name: 'dateEstablishment',
            title: 'تاریخ تاسیس',
            state: 'required',
            confirmed: false,
            type: 'text',
            placeholder: 'به طور مثال : ۱۳۷۱/۰۲/۱٥'
        },
        {
            id: 'registrationNumber',
            name: 'registrationNumber',
            title: 'شماره ثبت',
            state: 'required',
            confirmed: false,
            type: 'text',
            placeholder: 'به طور مثال : ۱۱۳۷۲۱٥'
        }
    ]

    return (
        <div className='flex flex-col my-10 px-1'>
            <span className='flex justify-start items-center font-normal text-xs text-cf-300 mb-5'>در صورتی که شما به عنوان یه شخص حقوقی (شرکت های پیمانکاری، خصوصی و ...) می خواهید اهراز هویت کنید شناسه ملی شرکت خود را در این قسمت وارد کنید.
            </span>
            <div className='flex flex-col'>
                <div className='flex justify-between items-center mb-2'>
                    <div className={`font-medium text-sm ${legalFormIsActive ? 'text-primary-500' : ''}`}>کاربر حقوقی هستم</div>
                    <SwitchInput enabled={legalFormIsActive} setEnabled={setLegalFormIsActive} />
                </div>
                <div className='flex flex-wrap justify-between'>
                    {legalFormIsActive &&
                        inputData.map(item => (
                            <Input
                                key={item.id}
                                title={item.title}
                                state={item.state}
                                confirmed={item.confirmed}
                                type={item.type}
                                className={`${item.className} w-full my-2 lg:w-[49%]`}
                                placeholder={item.placeholder}
                                id={item.id}
                                name={item.name}
                                value={formik.values[item.name]}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors[item.name]}
                                touched={formik.touched[item.name]}
                            />
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default LegalForm