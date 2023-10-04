import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
//formik
import { useFormik } from 'formik';
import * as Yup from 'yup';
//assets
import Eye from '@/public/icons/Eye.svg'
import check from '@/public/icons/check.svg'
//services
import auth from '@/services/person_kg_local/auth'
import forgetPhoneNumber from '@/services/register_kg_local/forgetPhoneNumber'
//functions
import setCookie from '@/src/functions/setCookie';
//toast
import toast from 'react-hot-toast';

//validation
const validationSchema = Yup.object().shape({
    password: Yup.string()
        .required('لطفا رمز عبور خود را وارد کنید!')
        .min(8, 'رمز عبور باید حداقل شامل ۸ کاراکتر باشد!')
        .matches(/[A-Z]/, 'رمز عبور باید شامل حداقل یک حرف بزرگ باشد!')
        .matches(/[a-z]/, 'رمز عبور باید شامل حداقل یک حرف کوچک باشد!')
        .matches(/[0-9]/, 'رمز عبور باید شامل حداقل یک عدد باشد!')
        .matches(/[@$!%*?&]/, 'رمز عبور باید شامل کاراکترهای خاص (!@#$%...) باشد!'),
});

function CheckPassword({ phoneNumber, setPageState, setForgetPassword }) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [rememberMe, setRememberMe] = useState(false)
    const router = useRouter()

    const formik = useFormik({
        initialValues: {
            password: ''
        },
        validationSchema,
        onSubmit: values => {
            auth({ "mobile": phoneNumber, "pass": values.password, "appRequest": "expert" })
                .then((res) => {
                    console.log(res)
                    setCookie('TOKEN', res.data.data)
                    router.push('/expert/home/')
                })
                .catch(err => {
                    if (err.response.status === 404) {
                        toast.error('شماره تلفن یا رمز عبور اشتباه است.')
                    }
                })
        },
    });

    const checkOtpHandler = () => {
        forgetPhoneNumber(phoneNumber)
            .then(res => {
                console.log(res)
                setForgetPassword(true)
                setPageState('checkOtp')
            })
            .catch(() => {

            })
    }

    return (
        <div className='w-full p-5 text-sm font-medium'>
            <span className='flex justify-center text-cf-400 my-4 font-medium text-sm sm:text-base sm:justify-start'>ورود کاربران</span>
            <form onSubmit={formik.handleSubmit} className='flex flex-col'>
                <label className='flex justify-center sm:justify-start text-xs sm:text-sm my-2 text-gray-500' htmlFor="password">برای ورود رمز خود را وارد کنید.</label>
                <div className="mt-2 relative flex flex-col items-start my-2">
                    <div className='relative fcc mt-2 px-4 w-full h-9 sm:h-11 border border-black rounded-md'>
                        <input
                            id='password'
                            name='password'
                            dir='ltr'
                            className='w-full h-full focus:outline-0 text-right text-xs sm:text-sm'
                            type={isPasswordVisible ? 'text' : 'password'}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            autoComplete="off"
                            placeholder='••••••••••'
                        />
                        <Image
                            src={Eye}
                            alt='Eye'
                            onClick={() => { setIsPasswordVisible(isPasswordVisible => !isPasswordVisible) }}
                            className='absolute left-4 cursor-pointer w-4 sm:w-5'
                        />
                    </div>
                    {formik.touched.password && formik.errors.password &&
                        <span className='bg-[#fb923c1a] text-[#FB923C] rounded-[4px] mt-2 text-xs'>
                            {formik.errors.password}
                        </span>
                    }
                </div>
                <div className='w-full flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between my-4'>
                    <div className='flex items-center mt-3 sm:mt-0'>
                        <div
                            onClick={() => { setRememberMe(!rememberMe) }}
                            className={`fcc w-4 h-4 rounded-[4px] ml-2 cursor-pointer ${rememberMe ? 'bg-secondary-500' : 'bg-white border border-black'}`}>
                            <Image
                                src={check}
                                alt='check'
                            />
                        </div>
                        <span className='text-gray-500 text-xs sm:sm'>مرا به خاطر بسپار</span>
                    </div>
                    <button type='button' onClick={checkOtpHandler} className='text-secondary-500 text-xs sm:sm' href='/'>رمز عبور خود را فراموش کردید؟
                    </button>
                </div>
                <button type='submit' className='mt-2 w-full h-9 sm:h-10 bg-secondary-500 rounded-md text-white'>ورود</button>
            </form>
        </div>
    )
}

export default CheckPassword