import React from 'react'
import Image from 'next/image';
//formik
import { useFormik } from 'formik';
import * as Yup from 'yup';
//components
import StepController from './StepController'
//assets
import X_circle from '@/../public/icons/X_circle.svg'
import Key from '@/../public/icons/Key.svg'

//validation
const validationSchema = Yup.object().shape({
    password: Yup.string()
        .required('لطفا رمز عبور خود را وارد کنید')
        .min(8, 'رمز عبور باید حداقل شامل ۸ کاراکتر باشد')
        .matches(/[A-Z]/, 'رمز عبور باید شامل حداقل یک حرف بزرگ باشد')
        .matches(/[a-z]/, 'رمز عبور باید شامل حداقل یک حرف کوچک باشد')
        .matches(/[0-9]/, 'رمز عبور باید شامل حداقل یک عدد باشد')
        .matches(/[@$!%*?&]/, 'رمز عبور باید شامل کاراکترهای خاص (!@#$%...) باشد'),
    confirmPassword: Yup.string()
        .required('لطفا تکرار رمز عبور خود را وارد کنید')
        .oneOf([Yup.ref('password'), null], 'رمز عبور با تکرار آن مطابقت ندارد')

});

function Step3({ currentStep, setCurrentStep }) {
    //step1 submit handler
    const formik = useFormik({
        initialValues: {
            password: '',
            confirmPassword: ''
        },
        validationSchema,
        onSubmit: values => {
            setCurrentStep(currentStep + 1)
            console.log(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className='w-full'>
            <form className='flex flex-col sm:flex-row'>
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
            </form>
            <div className='flex flex-col text-cf-300 font-normal text-xs sm:text-sm mt-4'>
                <div className='flex items-start'>
                    •
                    <span className='flex mb-2 mr-1'>کلمه عبور باید حداقل از 8 کاراکتر تشکیل شده باشد.</span>
                </div>
                <div className='flex items-start'>
                    •
                    <span className='flex mr-1'>
                        رمز عبور میبایست ترکیبی از حروف، اعداد و کاراکترهای خاص (نمادها) باشد.
                        (به طور مثال : !@#$%...)
                    </span>
                </div>
            </div>
            <StepController currentStep={currentStep} setCurrentStep={setCurrentStep} onsubmit={formik.handleSubmit} />
        </div>
    )
}

export default Step3