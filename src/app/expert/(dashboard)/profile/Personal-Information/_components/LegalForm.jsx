import React from 'react'
//components
import SwitchInput from '/src/app/_components/SwitchInput'
import DynamicInputs from '/src/app/_components/inputs/DynamicInputs'

function LegalForm({ formik, formState, legalFormIsActive, setLegalFormIsActive }) {

    const inputData = [
        {
            id: 'componyName',
            name: 'componyName',
            inputType: "text",
            title: 'نام شرکت',
            required: true,
            placeholder: 'به طور مثال : مهراز گستر'
        },
        {
            id: 'nationalCodeCompony',
            name: 'nationalCodeCompony',
            inputType: "text",
            title: 'شناسه ملی',
            required: true,
            placeholder: 'به طور مثال : ۸٤٦۹۷۰۲۸۷'
        },
        {
            id: 'activitySubject',
            name: 'activitySubject',
            inputType: "text",
            title: 'موضوع فعالیت',
            required: true,
            placeholder: 'به طور مثال : پیمانکارا خدمات بازسازی'
        },
        {
            id: 'companyType',
            name: 'companyType',
            inputType: "dropDown",
            title: 'نوع شرکت',
            required: true,
            placeholder: ''
        },
        {
            id: 'dateEstablishment',
            name: 'dateEstablishment',
            inputType: "datePicker",
            title: 'تاریخ تاسیس',
            required: true,
            placeholder: 'به طور مثال : ۱۳۷۱/۰۲/۱٥'
        },
        {
            id: 'registrationNumber',
            name: 'registrationNumber',
            inputType: "text",
            title: 'شماره ثبت',
            required: true,
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
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default LegalForm