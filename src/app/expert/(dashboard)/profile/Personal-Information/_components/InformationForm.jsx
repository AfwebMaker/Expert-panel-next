import React from 'react'
//components
import Input from '@/app/_components/Input'

function InformationForm() {
    const inputData = [
        {
            id: 0,
            active: true,
            title: 'نام',
            state: 'required',
            type: 'type',
            className: 'my-2',
            placeholder: 'به طور مثال : محمد'
        },
        {
            id: 1,
            active: true,
            title: 'نام خانوادگی',
            state: 'required',
            type: 'type',
            className: 'my-2',
            placeholder: 'به طور مثال : جواد زاده'
        },
        {
            id: 2,
            active: true,
            title: 'نام پدر',
            state: 'required',
            type: 'type',
            className: 'my-2',
            placeholder: 'به طور مثال : احمد'
        },
        {
            id: 3,
            active: true,
            title: 'کد ملی',
            state: 'required',
            type: 'type',
            className: 'my-2',
            placeholder: 'به طور مثال : ۰۰٥٦۲۷۹۸٤٥'
        },
        {
            id: 4,
            active: true,
            title: 'شماره تلفن برای احراز هویت',
            state: 'required',
            type: 'type',
            className: 'my-2',
            placeholder: 'به طور مثال : ۰۹۱۲۸٤٦۹۷۸۷'
        },
        {
            id: 5,
            active: true,
            title: 'تاریخ تولد',
            state: 'required',
            type: 'type',
            className: 'my-2',
            placeholder: 'به طور مثال : ۱۳۷۱/۰۲/۱٥'
        },
        {
            id: 6,
            active: true,
            title: 'محل تولد',
            state: 'optional',
            type: 'type',
            className: 'my-2',
            placeholder: 'به طور مثال : تهران'
        },
        {
            id: 7,
            active: true,
            title: 'ایمیل',
            state: 'optional',
            type: 'type',
            className: 'my-2',
            placeholder: 'به طور مثال : email@example.com'
        },
    ]

    return (
        <div>
            <div className='font-medium text-sm text-cf-400 mb-4'>اطلاعات اولیه</div>

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

export default InformationForm