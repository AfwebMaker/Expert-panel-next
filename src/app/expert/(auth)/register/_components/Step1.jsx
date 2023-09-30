import React from 'react'
import Image from 'next/image';
//formik
import { useFormik } from 'formik';
import * as Yup from 'yup';
//components
import StepController from './StepController'
//assets
import X_circle from '@/public/icons/X_circle.svg'
import User from '@/public/icons/User.svg'
import User_group from '@/public/icons/User_group.svg'
import Key from '@/public/icons/Key.svg'
//services
import information from '@/services/register_kg_local/information'
//functions
import getCookie from '@/src/functions/getCookie'

//validation
const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('لطفا نام خود را وارد کنید.')
        .matches(/^[\u0600-\u06FF\s]+$/, 'نام باید با حروف فارسی نوشته شود.')
        .min(3, 'لطفا نام خود را به درستی وارد کنید.'),
    lastName: Yup.string()
        .required('لطفا نام خانوادگی خود را وارد کنید.')
        .matches(/^[\u0600-\u06FF\s]+$/, 'نام خانوادگی باید با حروف فارسی نوشته شود.')
        .min(3, 'لطفا نام خانوادگی خود را به درستی وارد کنید.'),
    password: Yup.string()
        .required('لطفا رمز عبور خود را وارد کنید!')
        .min(8, 'رمز عبور باید حداقل شامل ۸ کاراکتر باشد!')
        .matches(/[A-Z]/, 'رمز عبور باید شامل حداقل یک حرف بزرگ باشد!')
        .matches(/[a-z]/, 'رمز عبور باید شامل حداقل یک حرف کوچک باشد!')
        .matches(/[0-9]/, 'رمز عبور باید شامل حداقل یک عدد باشد!')
        .matches(/[@$!%*?&]/, 'رمز عبور باید شامل کاراکترهای خاص (!@#$%...) باشد!'),
    confirmPassword: Yup.string()
        .required('لطفا تکرار رمز عبور خود را وارد کنید!')
        .oneOf([Yup.ref('password'), null], 'به نظر می رسد رمز عبورتان را یکسان وارد نکرده اید!')

});

function Step1({ currentStep, setCurrentStep }) {
    //step1 submit handler
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema,
        onSubmit: values => {
            const data = {
                guid: getCookie('guid'),
                name: values.firstName,
                family: values.lastName,
                pass1: values.password,
                pass2: values.confirmPassword
            }

            information(data)
                .then(res => {
                    setCurrentStep(currentStep + 1)
                })
                .catch(() => {

                })
        },
    });

    return (
        <div className='w-full'>
            <form className='flex flex-col'>
                <div className='flex flex-col sm:flex-row mb-2'>
                    <div className='w-full sm:w-1/2 font-medium ml-1 mb-2 sm:mb-0'>
                        <label htmlFor="firstName" className="block text-cf-300 text-sm sm:text-base leading-6">
                            نام
                        </label>
                        <div className="mt-2 relative flex items-center">
                            <Image
                                src={User}
                                alt='User'
                                className='absolute right-3 text-color-2 w-4 sm:w-5'
                            />
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                placeholder='به طور مثال : علی'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.firstName}
                                className="w-full h-9 sm:h-10 rounded-md border border-cf-400 sm:text-sm text-xs placeholder:text-gray-400 px-10"
                            />
                            <Image
                                src={X_circle}
                                alt='X_circle'
                                onClick={() => { formik.setFieldValue("firstName", '') }}
                                className='absolute left-3 text-color-2 cursor-pointer w-4 sm:w-5'
                            />
                        </div>
                        {formik.touched.firstName && formik.errors.firstName &&
                            <span className='bg-[#fb923c1a] text-[#FB923C] rounded-[4px] mt-2 text-xs'>
                                {formik.errors.firstName}
                            </span>
                        }
                    </div>
                    <div className='w-full sm:w-1/2 font-medium sm:mr-2'>
                        <label htmlFor="lastName" className="block text-cf-300 text-sm sm:text-base leading-6">
                            نام خانوادگی
                        </label>
                        <div className="mt-2 relative flex items-center">
                            <Image
                                src={User_group}
                                alt='User_group'
                                className='absolute right-3 text-color-2 w-4 sm:w-5'
                            />
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                placeholder='به طور مثال : جواد زاده آملی'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.lastName}
                                className="w-full h-9 sm:h-10 rounded-md border border-cf-400 sm:text-sm text-xs placeholder:text-gray-400 px-10"
                            />
                            <Image
                                src={X_circle}
                                alt='X_circle'
                                onClick={() => { formik.setFieldValue("lastName", '') }}
                                className='absolute left-3 text-color-2 cursor-pointer w-4 sm:w-5'
                            />
                        </div>
                        {formik.touched.lastName && formik.errors.lastName &&
                            <span className='bg-[#fb923c1a] text-[#FB923C] rounded-[4px] mt-2 text-xs'>
                                {formik.errors.lastName}
                            </span>
                        }
                    </div>
                </div>

                <div className='flex flex-col sm:flex-row'>
                    <div className='w-full sm:w-1/2 mb-2 sm:mb-0 font-medium ml-1'>
                        <label htmlFor="firstName" className="block text-cf-300 text-sm sm:text-base leading-6">
                            رمز عبور
                        </label>
                        <div className="mt-2 relative flex items-center">
                            <Image
                                src={Key}
                                alt='Key'
                                className='absolute right-3 text-color-2 w-4 sm:w-5'
                            />
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete='off'
                                placeholder='••••••••••••'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                className="w-full h-9 sm:h-10 rounded-md border border-cf-400 sm:text-sm text-xs placeholder:text-gray-400 px-10"
                            />
                            <Image
                                src={X_circle}
                                alt='X_circle'
                                onClick={() => { formik.setFieldValue("password", '') }}
                                className='absolute left-3 text-color-2 cursor-pointer w-4 sm:w-5'
                            />
                        </div>
                        {formik.touched.password && formik.errors.password &&
                            <span className='bg-[#fb923c1a] text-[#FB923C] rounded-[4px] mt-2 text-xs'>
                                {formik.errors.password}
                            </span>
                        }
                    </div>
                    <div className='w-full sm:w-1/2 font-medium sm:mr-2'>
                        <label htmlFor="lastName" className="block text-cf-300 text-sm sm:text-base leading-6">
                            تکرار رمز عبور
                        </label>
                        <div className="mt-2 relative flex items-center">
                            <Image
                                src={Key}
                                alt='Key'
                                className='absolute right-3 text-color-2 w-4 sm:w-5'
                            />
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                autoComplete='off'
                                placeholder='••••••••••••'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.confirmPassword}
                                className="w-full h-9 sm:h-10 rounded-md border border-cf-400 sm:text-sm text-xs placeholder:text-gray-400 px-10"
                            />
                            <Image
                                src={X_circle}
                                alt='X_circle'
                                onClick={() => { formik.setFieldValue("confirmPassword", '') }}
                                className='absolute left-3 text-color-2 cursor-pointer w-4 sm:w-5'
                            />
                        </div>
                        {formik.touched.confirmPassword && formik.errors.confirmPassword &&
                            <span className='bg-error/10 text-error rounded-[4px] mt-2 text-xs'>
                                {formik.errors.confirmPassword}
                            </span>
                        }
                    </div>
                </div>

            </form>
            <StepController currentStep={currentStep} setCurrentStep={setCurrentStep} onsubmit={formik.handleSubmit} />
        </div>
    )
}

export default Step1