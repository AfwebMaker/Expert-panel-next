import React from 'react'
//components
import Input from '@/app/_components/Input'

function InformationForm({ formik }) {
    const inputData = [
        {
            id: 'firstName',
            name: 'firstName',
            active: true,
            title: 'نام',
            state: 'required',
            type: 'type',
            placeholder: 'به طور مثال : محمد'
        },
        {
            id: 'lastName',
            name: 'lastName',
            active: true,
            title: 'نام خانوادگی',
            state: 'required',
            type: 'type',
            placeholder: 'به طور مثال : جواد زاده'
        },
        {
            id: 'fatherName',
            name: 'fatherName',
            active: true,
            title: 'نام پدر',
            state: 'required',
            type: 'type',
            placeholder: 'به طور مثال : احمد'
        },
        {
            id: 'personalId',
            name: 'personalId',
            active: true,
            title: 'کد ملی',
            state: 'required',
            type: 'type',
            placeholder: 'به طور مثال : ۰۰٥٦۲۷۹۸٤٥'
        },
        {
            id: 'phoneNumber',
            name: 'phoneNumber',
            active: true,
            title: 'شماره تلفن برای احراز هویت',
            state: 'required',
            type: 'type',
            placeholder: 'به طور مثال : ۰۹۱۲۸٤٦۹۷۸۷'
        },
        {
            id: 'birthDay',
            name: 'birthDay',
            active: true,
            title: 'تاریخ تولد',
            state: 'required',
            type: 'type',
            placeholder: 'به طور مثال : ۱۳۷۱/۰۲/۱٥'
        },
        {
            id: 'placeBirth',
            name: 'placeBirth',
            active: true,
            title: 'محل تولد',
            state: 'optional',
            type: 'type',
            placeholder: 'به طور مثال : تهران'
        },
        {
            id: 'email',
            name: 'email',
            active: true,
            title: 'ایمیل',
            state: 'optional',
            type: 'type',
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
                        active={item.active}
                        title={item.title}
                        state={item.state}
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
                    />
                ))}
            </div>
        </div>
    )
}

export default InformationForm