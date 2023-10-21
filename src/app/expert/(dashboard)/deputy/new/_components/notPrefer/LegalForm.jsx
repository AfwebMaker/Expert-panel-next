import React from 'react'
//components
import SwitchInput from '@/app/_components/SwitchInput'
import DynamicInputs from '@/src/app/_components/inputs/DynamicInputs'

function LegalForm({ formik }) {

    const inputData = [
        {
            id: "nameFamily",
            name: "nameFamily",
            inputType: "text",
            title: "سمت سازمانی",
            required: true,
            type: "text",
            placeholder: "به طور مثال : محمد",
        },
        {
            id: "mobile",
            name: "mobile",
            inputType: "text",
            title: "آخرین مدرک تحصیلی",
            required: true,
            type: "text",
            placeholder: "به طور مثال : محمد",
        },
        {
            id: "nationalCode",
            name: "nationalCode",
            inputType: "text",
            title: "سوابق کاری نمایندتان را شرح دهید.",
            required: true,
            type: "text",
            placeholder: "به طور مثال : محمد",
        },
        {
            id: "zipCode",
            name: "zipCode",
            inputType: "text",
            title: "تکست",
            required: true,
            type: "text",
            placeholder: "به طور مثال : محمد",
        },
    ]

    return (
        <div className='flex flex-col my-5 px-1'>
            <span className='flex justify-start items-center font-normal text-xs text-cf-300 mb-5'>
                اطلاعات زیر برای احراز صلاحیت نمایندتان می باشد.
            </span>
            <div className='flex flex-wrap justify-between'>
                {
                    inputData.map(item => (
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
                    ))
                }
            </div>
        </div>

    )
}

export default LegalForm