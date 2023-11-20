import Image from 'next/image'
import React from 'react'
//formik
import { useFormik } from 'formik';
import * as Yup from 'yup';
//assets
import X_circle from '/public/icons/X_circle.svg'
import Link from 'next/link'
//services
import searchNumber from '/src/services/person_kg_local/search'
import sendOtp from '/src/services/register_kg_local/phoneNumber'
//functions
import setCookie from '/src/functions/setCookie'
//redux loading
import { useDispatch } from 'react-redux';
import { loadingHandler } from '/src/redux/features/layout/layoutConfigSlice';

//validation
const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string()
        .required('لطفا شماره خود را وارد کنید.')
        .matches(/^\d+$/, 'شماره باید فقط شامل اعداد باشد.')
        .min(10, 'لطفا نام خود را به درستی وارد کنید.'),
});

function CheckNumber({ setPhoneNumber, setPageState }) {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            phoneNumber: ''
        },
        validationSchema,
        onSubmit: values => {
            setPhoneNumber(values.phoneNumber)
            //check number exists 
            dispatch(loadingHandler(true))
            searchNumber(values.phoneNumber)
                .then(() => {
                    setPageState('checkPassword')
                })
                .catch(err => {
                    if (err.response && err.response.status === 404) {
                        //send otp
                        sendOtp(values.phoneNumber)
                            .then(res => {
                                setCookie('guid', res.data.data)
                                setPageState('checkOtp')
                            })
                            .catch(() => {
                            })
                            .finally(() => {
                                dispatch(loadingHandler(false))
                            })
                    }
                })
                .finally(() => {
                    dispatch(loadingHandler(false))
                })
        },
    });

    return (
        <div className='w-full p-5 text-sm font-medium'>
            <span className='flex my-4 font-medium text-sm text-cf-400 sm:text-base justify-center sm:justify-start'>ورود | ثبت نام کاربران</span>
            <form onSubmit={formik.handleSubmit} className='flex flex-col my-2'>
                <label className='flex text-center text-xs sm:text-sm my-2 text-gray-500 justify-center sm:justify-start' htmlFor="phoneNumber">
                    برای ورود یا ثبت نام شماره تلفن خود را وارد کنید.
                </label>
                <div className="mt-2 relative flex flex-col items-start my-2">
                    <div className='relative fcc w-full text-xs sm:text-sm h-9 sm:h-11'>
                        <input
                            id='phoneNumber'
                            name='phoneNumber'
                            dir='ltr'
                            className='w-full h-full focus:outline-0 text-right px-4 border border-black rounded-md'
                            type='number'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phoneNumber}
                            placeholder='به طور مثال : ۰۹۱۲۸٤٦۳٥۱۲'
                        />
                        <Image
                            src={X_circle}
                            alt='X_circle'
                            onClick={() => { formik.setFieldValue("phoneNumber", '') }}
                            className='absolute left-4 cursor-pointer w-4 sm:w-5'
                        />
                    </div>
                    {formik.touched.phoneNumber && formik.errors.phoneNumber &&
                        <span className='bg-[#fb923c1a] text-[#FB923C] rounded-[4px] mt-2 text-xs'>
                            {formik.errors.phoneNumber}
                        </span>
                    }
                </div>
                <button type='submit' className='my-2 w-full text-xs sm:text-sm h-9 sm:h-10 bg-secondary-500 rounded-md text-white'>
                    ورود و ثبت نام
                </button>
            </form>
            <div className='flex justify-center sm:justify-start flex-wrap text-center text-xs text-gray-500'>
                ورود و ثبت نام شما به منزله پذیرفتن <Link href='/' className='text-secondary-500 mx-1'>شرایط و ضوابط</Link> ما می باشد.
            </div>
        </div>
    )
}

export default CheckNumber