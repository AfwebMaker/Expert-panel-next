"use client"

import React from 'react'
//components
import InformationForm from './InformationForm'
import LegalForm from './LegalForm'
import UploadForm from './UploadForm'
import SubmitButton from './SubmitButton'

function Forms() {
    return (
        <form onSubmit={e => {e.preventDefault()}}>
            <InformationForm />
            <LegalForm />
            <UploadForm />
            <SubmitButton />
        </form>
    )
}

export default Forms;