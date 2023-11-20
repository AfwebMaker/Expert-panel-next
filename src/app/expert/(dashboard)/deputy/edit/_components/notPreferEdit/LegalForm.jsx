import React from 'react'
//components
import SwitchInput from '/src/app/_components/SwitchInput'
import DynamicInputs from '/src/app/_components/inputs/DynamicInputs'

function LegalForm({ formik, stateForm }) {

    const inputData = [
        {
            id: "company_OrganizationLevel",
            name: "company_OrganizationLevel",
            inputType: "text",
            title: "سمت سازمانی",
            required: true,
            type: "text",
            placeholder: "به طور مثال : معاون",
        },
        {
            id: "company_LastEducationalCertificate",
            name: "company_LastEducationalCertificate",
            inputType: "dropDown",
            title: "آخرین مدرک تحصیلی",
            required: true,
            type: "text",
            placeholder: "به طور مثال : لیسانس",
        },
        {
            id: "company_Resume",
            name: "company_Resume",
            inputType: "inputTextarea",
            title: "سوابق کاری نمایندتان را شرح دهید.",
            required: true,
            type: "text",
            placeholder: "به طور مثال : سلام روز بخیر ..",
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
                            state={stateForm ? 1 : 0}
                            required={item.required}
                            className={item.id === "company_Resume" ? "my-2 w-full" : "my-2 w-full lg:w-[49%]"}
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