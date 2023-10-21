import React from 'react'
//components
import DynamicInputs from '@/src/app/_components/inputs/DynamicInputs'

function InformationForm({ formik }) {
    const inputData = [
        {
            id: "nameFamily",
            name: "nameFamily",
            inputType: "text",
            title: "نام و نام خانوادگی نماینده",
            required: true,
            type: "text",
            placeholder: "به طور مثال : محمد",
        },
        {
            id: "mobile",
            name: "mobile",
            inputType: "text",
            title: "شماره تلفن نماینده",
            required: true,
            type: "text",
            placeholder: "به طور مثال : محمد",
        },
        {
            id: "nationalCode",
            name: "nationalCode",
            inputType: "text",
            title: "کد ملی نماینده",
            required: true,
            type: "text",
            placeholder: "به طور مثال : محمد",
        },
        {
            id: "zipCode",
            name: "zipCode",
            inputType: "text",
            title: "کد پستی نماینده",
            required: true,
            type: "text",
            placeholder: "به طور مثال : محمد",
        },
        {
            id: "Description",
            name: "Description",
            inputType: "inputTextarea",
            title: "علت تغییر یا اضافه کردن نماینده تان را بنویسید.",
            required: true,
            type: "text",
            placeholder: "به طور مثال : سلام روز بخیر ..",
        },
        //   {
        //     id: "uploadFile",
        //     name: "uploadFile",
        //     inputType: "uploadFile",
        //     title: "آپلود فایل",
        //     required: true,
        //     type: "file",
        //     placeholder: "به طور مثال : سلام روز بخیر ..",
        //   },
    ]

    return (
        <div className='flex flex-wrap justify-between'>
            {inputData.map(item => (
                <DynamicInputs
                    key={item.id}
                    inputType={item.inputType}
                    title={item.title}
                    state="Low"
                    required={item.required}
                    className="my-2 w-full lg:w-[49%]"
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