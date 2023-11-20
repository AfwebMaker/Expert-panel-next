import React from 'react'
//components
import DynamicInputs from '/src/app/_components/inputs/DynamicInputs'

function InformationForm({ formik, formState }) {
    const inputData = [
        {
            id: "firstName",
            name: "firstName",
            inputType: "text",
            title: "نام",
            required: true,
            placeholder: 'به طور مثال : محمد',
        },
        {
            id: 'lastName',
            name: 'lastName',
            inputType: "text",
            title: 'نام خانوادگی',
            required: true,
            placeholder: 'به طور مثال : جواد زاده'
        },
        {
            id: 'fatherName',
            name: 'fatherName',
            inputType: "text",
            title: 'نام پدر',
            required: true,
            placeholder: 'به طور مثال : احمد'
        },
        {
            id: 'nationalCode',
            name: 'nationalCode',
            inputType: "text",
            title: 'کد ملی',
            required: true,
            placeholder: 'به طور مثال : ۰۰٥٦۲۷۹۸٤٥'
        },
        {
            id: 'mobile',
            name: 'mobile',
            inputType: "text",
            title: 'شماره تلفن برای احراز هویت',
            required: true,
            placeholder: 'به طور مثال : ۰۹۱۲۸٤٦۹۷۸۷'
        },
        {
            id: 'birthday',
            name: 'birthday',
            inputType: "datePicker",
            title: 'تاریخ تولد',
            required: true,
            type: 'date',
            placeholder: 'به طور مثال : ۱۳۷۱/۰۲/۱٥'
        },
        {
            id: 'birthPlace',
            name: 'birthPlace',
            inputType: "text",
            title: 'محل تولد',
            required: false,
            placeholder: 'به طور مثال : تهران'
        },
        {
            id: 'email',
            name: 'email',
            inputType: "text",
            title: 'ایمیل',
            required: false,
            placeholder: 'به طور مثال : email@example.com'
        },
    ]

    return (
        <div>
            <div className='font-medium text-sm text-cf-400 mb-4'>اطلاعات اولیه</div>
            <div className='flex flex-wrap justify-between'>
                {inputData.map(item => (
                    <DynamicInputs
                        key={item.id}
                        inputType={item.inputType}
                        title={item.title}
                        state={formState}
                        required={item.required}
                        className="my-2 w-full lg:w-[49%]"
                        placeholder={item.placeholder}
                        id={item.id}
                        name={item.name}
                        formik={formik}
                    />
                ))}
            </div>
        </div>
    )
}

export default InformationForm