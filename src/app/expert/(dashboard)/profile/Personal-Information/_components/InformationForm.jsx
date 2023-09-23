import React from 'react'
//components
import Input from '@/app/_components/Input'

function InformationForm({ formik }) {
    const inputData = [
        {
            id: 'firstName',
            name: 'firstName',
            title: 'نام',
            required: true,
            type: 'text',
            placeholder: 'به طور مثال : محمد'
        },
        {
            id: 'lastName',
            name: 'lastName',
            title: 'نام خانوادگی',
            required: true,
            type: 'text',
            placeholder: 'به طور مثال : جواد زاده'
        },
        {
            id: 'fatherName',
            name: 'fatherName',
            title: 'نام پدر',
            required: true,
            type: 'text',
            placeholder: 'به طور مثال : احمد'
        },
        {
            id: 'nationalCode',
            name: 'nationalCode',
            title: 'کد ملی',
            required: true,
            confirmed: false,
            type: 'text',
            placeholder: 'به طور مثال : ۰۰٥٦۲۷۹۸٤٥'
        },
        {
            id: 'mobile',
            name: 'mobile',
            title: 'شماره تلفن برای احراز هویت',
            required: true,
            confirmed: false,
            type: 'text',
            placeholder: 'به طور مثال : ۰۹۱۲۸٤٦۹۷۸۷'
        },
        {
            id: 'birthday',
            name: 'birthday',
            title: 'تاریخ تولد',
            required: true,
            confirmed: false,
            type: 'date',
            placeholder: 'به طور مثال : ۱۳۷۱/۰۲/۱٥'
        },
        {
            id: 'birthPlace',
            name: 'birthPlace',
            title: 'محل تولد',
            required: false,
            confirmed: false,
            type: 'text',
            placeholder: 'به طور مثال : تهران'
        },
        {
            id: 'email',
            name: 'email',
            title: 'ایمیل',
            required: false,
            confirmed: false,
            type: 'text',
            placeholder: 'به طور مثال : email@example.com'
        },
    ]

    return (
        <div>
            <div className='font-medium text-sm text-cf-400 mb-4'>اطلاعات اولیه</div>
            <div className='flex flex-wrap justify-between'>
                {inputData.map(item => (
                    <Input
                        key={item.id}
                        title={item.title}
                        state='Low'
                        required={item.required}
                        type={item.type}
                        className='my-2 w-full lg:w-[49%]'
                        placeholder={item.placeholder}
                        id={item.id}
                        name={item.name}
                        value={formik.values[item.name]}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors[item.name]}
                        touched={formik.touched[item.name]}
                        formik={formik}
                    />
                ))}
            </div>
        </div>
    )
}

export default InformationForm