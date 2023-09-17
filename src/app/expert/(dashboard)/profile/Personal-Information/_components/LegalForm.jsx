import React, { useState } from 'react'
//components
import Input from '@/app/_components/Input'
import SwitchInput from '@/app/_components/SwitchInput'

function LegalForm({ formik, legalFormIsActive, setLegalFormIsActive }) {

    const inputData = [
        {
            id: 0,
            name: 0,
            active: true,
            title: 'نام شرکت',
            state: 'required',
            type: 'text',
            className: 'my-5',
            placeholder: 'به طور مثال : مهراز گستر'
        },
        {
            id: 1,
            name: 1,
            active: true,
            title: 'شناسه ملی',
            state: 'required',
            type: 'text',
            className: 'my-5',
            placeholder: 'به طور مثال : ۸٤٦۹۷۰۲۸۷'
        },
        {
            id: 2,
            name: 2,
            active: true,
            title: 'موضوع فعالیت',
            state: 'required',
            type: 'text',
            className: 'my-5',
            placeholder: 'به طور مثال : پیمانکارا خدمات بازسازی'
        },
        {
            id: 3,
            name: 3,
            active: true,
            title: 'نوع شرکت',
            state: 'required',
            type: 'text',
            className: 'my-5',
            placeholder: ''
        },
        {
            id: 4,
            name: 4,
            active: true,
            title: 'تاریخ تاسیس',
            state: 'required',
            type: 'text',
            className: 'my-5',
            placeholder: 'به طور مثال : ۱۳۷۱/۰۲/۱٥'
        },
        {
            id: 5,
            name: 5,
            active: true,
            title: 'شماره ثبت',
            state: 'required',
            type: 'text',
            className: 'my-5',
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
                                active={item.active}
                                title={item.title}
                                state={item.state}
                                type={item.type}
                                className={`${item.className} w-full lg:w-[49%]`}
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