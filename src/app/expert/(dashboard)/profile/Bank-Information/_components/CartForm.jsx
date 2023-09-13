"use client"

import React from 'react'
//react icons
import { HiLibrary } from 'react-icons/hi'
//components
import Input from '@/app/_components/Input'
import Button from '@/app/_components/Button'

function CartForm() {
    return (
        <form onSubmit={e => {e.preventDefault()}} className='my-5'>
            <Input
                active={true}
                title='شماره شبا'
                state='required'
                type='number'
                placeholder='به طور مثال : ۱۲٦٥٤۸۷۹۸٦٥۳۲۳۳۳۱۰۰۰۰۱۰۲۳٥۱'
                className='mb-10'
            />

            <Button icon={<HiLibrary size={20} />} title='احراز حساب بانکی' />
        </form>
    )
}

export default CartForm