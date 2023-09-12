import React from 'react'
//components
import Input from '@/app/_components/Input'

function LegalForm() {
    const inputData = [
        {
            id: 0,
            active: true,
            title: 'نام شرکت',
            state: 'required',
            type: 'text',
            className: 'my-5',
            placeholder: 'به طور مثال : مهراز گستر'
        },
        {
            id: 1,
            active: true,
            title: 'شناسه ملی',
            state: 'required',
            type: 'text',
            className: 'my-5',
            placeholder: 'به طور مثال : ۸٤٦۹۷۰۲۸۷'
        },
        {
            id: 2,
            active: true,
            title: 'موضوع فعالیت',
            state: 'required',
            type: 'text',
            className: 'my-5',
            placeholder: 'به طور مثال : پیمانکارا خدمات بازسازی'
        },
        {
            id: 3,
            active: true,
            title: 'نوع شرکت',
            state: 'required',
            type: 'text',
            className: 'my-5',
            placeholder: ''
        },
        {
            id: 4,
            active: true,
            title: 'تاریخ تاسیس',
            state: 'required',
            type: 'text',
            className: 'my-5',
            placeholder: 'به طور مثال : ۱۳۷۱/۰۲/۱٥'
        },
        {
            id: 5,
            active: true,
            title: 'شماره ثبت',
            state: 'required',
            type: 'text',
            className: 'my-5',
            placeholder: 'به طور مثال : ۱۱۳۷۲۱٥'
        }
    ]

    return (
        <div>
            <form>
                {inputData.map(item => (
                    <Input
                        key={item.id}
                        active={item.active}
                        title={item.title}
                        state={item.state}
                        type={item.type}
                        className={item.className}
                        placeholder={item.placeholder}
                    />
                ))}
            </form>
        </div>
    )
}

export default LegalForm