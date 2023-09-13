"use client"

import React from 'react'
//react icons
import { HiOutlineFingerPrint } from 'react-icons/hi'
//components
import InformationForm from './InformationForm'
import LegalForm from './LegalForm'
import UploadForm from './UploadForm'
import Button from '@/app/_components/Button'

function Forms() {
    return (
        <form onSubmit={e => {e.preventDefault()}}>
            <InformationForm />
            <LegalForm />
            <UploadForm />
            <Button type='submit' icon={<HiOutlineFingerPrint size={20} />} title='ثبت و احراز هویت'  />
        </form>
    )
}

export default Forms;