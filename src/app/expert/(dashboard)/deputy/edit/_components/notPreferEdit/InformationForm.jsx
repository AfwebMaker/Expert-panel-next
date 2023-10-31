import React from 'react'
//components
import DynamicInputs from '@/src/app/_components/inputs/DynamicInputs'

function InformationForm({ formik, stateForm }) {
    const inputData = [
        {
            id: "nameFamily",
            name: "nameFamily",
            inputType: "text",
            title: "نام و نام خانوادگی نماینده",
            required: true,
            type: "text",
            placeholder: "به طور مثال : محمد جوادی",
        },
        {
            id: "mobile",
            name: "mobile",
            inputType: "text",
            title: "شماره تلفن نماینده",
            required: true,
            type: "text",
            placeholder: "به طور مثال : 09102186156",
        },
        {
            id: "nationalCode",
            name: "nationalCode",
            inputType: "text",
            title: "کد ملی نماینده",
            required: true,
            type: "text",
            placeholder: "به طور مثال : 0023076410",
        },
        {
            id: "zipCode",
            name: "zipCode",
            inputType: "text",
            title: "کد پستی نماینده",
            required: true,
            type: "text",
            placeholder: "به طور مثال : 1765423187",
        },
        {
            id: "description",
            name: "description",
            inputType: "inputTextarea",
            title: "علت تغییر یا اضافه کردن نماینده تان را بنویسید.",
            required: true,
            type: "text",
            placeholder: "به طور مثال : سلام روز بخیر ..",
        },
    ]

    return (
        <div className='flex flex-wrap justify-between'>
            {inputData.map(item => (
                <DynamicInputs
                    key={item.id}
                    inputType={item.inputType}
                    title={item.title}
                    state={stateForm ? 1 : 0}
                    required={item.required}
                    className={item.id === "description" ? "my-2 w-full" : "my-2 w-full lg:w-[49%]"}
                    placeholder={item.placeholder}
                    id={item.id}
                    name={item.name}
                    formik={formik}
                />
            ))}
        </div>
    )
}

export default InformationForm