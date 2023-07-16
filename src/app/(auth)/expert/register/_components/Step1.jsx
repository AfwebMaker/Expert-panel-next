import React from 'react'
import Image from 'next/image';
//formik
import { useFormik } from 'formik';
import * as Yup from 'yup';
//components
import StepController from './StepController'
//assets
import X_circle from '@/../public/icons/X_circle.svg'
import User from '@/../public/icons/User.svg'
import User_group from '@/../public/icons/User_group.svg'

//validation
const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('لطفا نام خود را وارد کنید.')
        .matches(/^[\u0600-\u06FF\s]+$/, 'نام باید با حروف فارسی نوشته شود.')
        .min(3, 'لطفا نام خود را به درستی وارد کنید.'),
    lastName: Yup.string()
        .required('لطفا نام خانوادگی خود را وارد کنید.')
        .matches(/^[\u0600-\u06FF\s]+$/, 'نام خانوادگی باید با حروف فارسی نوشته شود.')
        .min(3, 'لطفا نام خانوادگی خود را به درستی وارد کنید.')

});

function Step1({ currentStep, setCurrentStep }) {
    //step1 submit handler
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: ''
        },
        validationSchema,
        onSubmit: values => {
            setCurrentStep(currentStep + 1)
            console.log(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className='w-full'>
            <form className='flex'>
                <div className='w-1/2 font-medium ml-1'>
                    <label htmlFor="firstName" className="block text-cf-300 text-sm leading-6">
                        نام
                    </label>
                    <div className="mt-2 relative flex items-center">
                        <Image
                            src={User}
                            alt='User'
                            className='absolute right-3 text-color-2'
                        />
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder='به طور مثال : علی'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                            className="w-full h-10 rounded-md border border-cf-400 text-sm placeholder:text-gray-400 px-10"
                        />
                        <Image
                            src={X_circle}
                            alt='X_circle'
                            onClick={() => { formik.setFieldValue("firstName", '') }}
                            className='absolute left-3 text-color-2 cursor-pointer'
                        />
                    </div>
                    {formik.touched.firstName && formik.errors.firstName &&
                        <span className='bg-[#fb923c1a] text-[#FB923C] rounded-[4px] mt-2 text-xs'>
                            {formik.errors.firstName}
                        </span>
                    }
                </div>

                <div className='w-1/2 font-medium mr-2'>
                    <label htmlFor="lastName" className="block text-cf-300 text-sm leading-6">
                        نام خانوادگی
                    </label>
                    <div className="mt-2 relative flex items-center">
                        <Image
                            src={User_group}
                            alt='User_group'
                            className='absolute right-3 text-color-2'
                        />
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder='به طور مثال : جواد زاده آملی'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                            className="w-full h-10 rounded-md border border-cf-400 text-sm placeholder:text-gray-400 px-10"
                        />
                        <Image
                            src={X_circle}
                            alt='X_circle'
                            onClick={() => { formik.setFieldValue("lastName", '') }}
                            className='absolute left-3 text-color-2 cursor-pointer'
                        />
                    </div>
                    {formik.touched.lastName && formik.errors.lastName &&
                        <span className='bg-[#fb923c1a] text-[#FB923C] rounded-[4px] mt-2 text-xs'>
                            {formik.errors.lastName}
                        </span>
                    }
                </div>
            </form>
            <StepController currentStep={currentStep} setCurrentStep={setCurrentStep} onsubmit={formik.handleSubmit} />
        </div>
    )
}

export default Step1