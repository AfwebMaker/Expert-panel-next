import React, { useState } from 'react'
import Image from 'next/image';
//formik
import { useFormik } from 'formik';
import * as Yup from 'yup';
//assets
import Eye from '@/public/icons/Eye.svg'
import Key from '@/public/icons/Key.svg'
//services
import forgetChangePassword from '@/services/register_kg_local/forgetChangePassword'
//toast
import customToast from '@/src/functions/customToast';
//redux loading
import { useDispatch } from 'react-redux';
import { loadingHandler } from '@/src/redux/features/layout/layoutConfigSlice';

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

function ForgetPassword({ setForgetPassword }) {
    const dispatch = useDispatch()
    const [isPasswordVisible1, setIsPAsswordVisible1] = useState(false)
    const [isPasswordVisible2, setIsPAsswordVisible2] = useState(false)

    //step1 submit handler
    const formik = useFormik({
        initialValues: {
            password: '',
            confirmPassword: ''
        },
        validationSchema,
        onSubmit: values => {
            dispatch(loadingHandler(true))
            forgetChangePassword(values.password)
                .then((res) => {
                    customToast('success', 'رمز شما با موفقیت تغییر کرد.')
                    setForgetPassword(false)
                })
                .catch(() => {

                })
                .finally(() => {
                    dispatch(loadingHandler(false))
                })
        }
    });

    return (
        <div className='w-full p-5  text-sm font-medium'>
            <span className='fcc my-4 font-medium sm:text-base text-sm text-cf-400'>فراموش کردن رمز</span>
            <form onSubmit={formik.handleSubmit} className='relative fcc flex-col mt-4'>
                <div className='w-full font-medium mb-2'>
                    <label htmlFor="password" className="block sm:text-base text-xs text-cf-400 leading-6 mb-3">
                        رمز عبور جدید خود را وارد کنید :
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
                            type={isPasswordVisible1 ? "text" : "password"}
                            autoComplete='off'
                            placeholder='••••••••••••'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            className="w-full h-9 sm:h-10 text-xs rounded-md border border-cf-400 sm:text-sm placeholder:text-gray-400 px-10"
                        />
                        <Image
                            src={Eye}
                            alt='Eye'
                            onClick={() => { setIsPAsswordVisible1(!isPasswordVisible1) }}
                            className='absolute left-3 text-color-2 cursor-pointer sm:w-5 w-4'
                        />
                    </div>
                    {formik.touched.password && formik.errors.password &&
                        <span className='bg-error/10 text-error rounded-[4px] mt-2 text-xs'>
                            {formik.errors.password}
                        </span>
                    }
                </div>

                <div className='w-full font-medium mb-2'>
                    <label htmlFor="confirmPassword" className="block sm:text-base text-xs text-cf-400 leading-6 mt-1 mb-3">
                        تکرار رمز عبور جدید :
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
                            type={isPasswordVisible2 ? "text" : "password"}
                            autoComplete='off'
                            placeholder='••••••••••••'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.confirmPassword}
                            className="w-full h-9 sm:h-10 text-xs rounded-md border border-cf-400 sm:text-sm placeholder:text-gray-400 px-10"
                        />
                        <Image
                            src={Eye}
                            alt='Eye'
                            onClick={() => { setIsPAsswordVisible2(!isPasswordVisible2) }}
                            className='absolute left-3 text-color-2 cursor-pointer sm:w-5 w-4'
                        />
                    </div>
                    {formik.touched.confirmPassword && formik.errors.confirmPassword &&
                        <span className='bg-error/10 text-error rounded-[4px] mt-2 text-xs'>
                            {formik.errors.confirmPassword}
                        </span>
                    }
                </div>

                <div className='my-4 flex justify-start flex-col text-cf-300 font-normal text-xs'>
                    <div className='flex items-start'>
                        •
                        <span className='flex mb-2 mr-2'>کلمه عبور باید حداقل از 8 کاراکتر تشکیل شده باشد.</span>
                    </div>
                    <div className='flex items-start'>
                        •
                        <span className='flex mr-2'>رمز عبور میبایست ترکیبی از حروف، اعداد و کاراکترهای خاص (نمادها) باشد. (به طور مثال : !@#$%...)</span>
                    </div>
                </div>

                <button type='submit' className='mt-2 text-sm w-full h-9 sm:h-10 bg-secondary-500 rounded-md text-white'>
                    ثبت رمز جدید
                </button>
            </form>
        </div >
    )
}

export default ForgetPassword