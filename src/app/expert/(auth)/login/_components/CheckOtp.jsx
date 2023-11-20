import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import OtpInput from 'react-otp-input';
//services
import checkOtp from '@/services/register_kg_local/checkOtp'
import sendOtp from '@/services/register_kg_local/phoneNumber'
import forgetCheckOtp from '@/services/register_kg_local/forgetCheckOtp'
import forgetPhoneNumber from '@/services/register_kg_local/forgetPhoneNumber'
//functions
import setCookie from '@/functions/setCookie'
import toast from 'react-hot-toast';
//redux loading
import { useDispatch } from 'react-redux';
import { loadingHandler } from '@/src/redux/features/layout/layoutConfigSlice';

function CheckOtp({ forgetPassword, setPageState, phoneNumber }) {
    const dispatch = useDispatch()
    const [otp, setOtp] = useState('');
    const router = useRouter()

    //otp submit
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const otpSubmitHandler = () => {
        if (otp.length === 4) {
            dispatch(loadingHandler(true))
            if (forgetPassword) {
                forgetCheckOtp({ phoneNumber: phoneNumber, otp: otp })
                    .then((res) => {
                        setCookie('guid', res.data.data)
                        setPageState('forgetPassword')
                    })
                    .catch((error) => {
                        if (error.response.status === 502) {
                            toast.error('کد پیامکی اشتباه است.')
                        }
                    })
                    .finally(() => {
                        dispatch(loadingHandler(false))
                    })

            } else {
                checkOtp(otp)
                    .then(() => {
                        router.push('/expert/register/')
                    })
                    .catch((error) => {
                        if (error.response.status === 502) {
                            toast.error('کد پیامکی اشتباه است.')
                        }
                    })
                    .finally(() => {
                        dispatch(loadingHandler(false))
                    })
            }

        }
    }

    const resendOtp = () => {
        dispatch(loadingHandler(true))
        if (forgetPassword) {
            forgetPhoneNumber(phoneNumber)
                .then(res => {
                })
                .catch(() => { 
                })
                .finally(() => {
                    dispatch(loadingHandler(false))
                })
        } else {
            sendOtp(phoneNumber)
                .then(res => {
                    setCookie('guid', res.data.data)
                })
                .catch(() => {
                })
                .finally(() => {
                    dispatch(loadingHandler(false))
                })
        }

    }

    //check otp length for auto submit
    useEffect(() => {
        otpSubmitHandler()
    }, [otp, otpSubmitHandler])

    return (
        <div className='w-full p-5 text-sm font-medium'>
            <span className='fcc my-4 font-medium text-sm sm:text-base'>تایید شماره تلفن</span>
            <div className='relative fcc flex-col'>
                <span className='fcc my-2 text-xs sm:text-sm text-center text-gray-500'>
                    کد پیامک شده به حسابتان را در این قسمت وارد کنید
                </span>
                <OtpInput
                    placeholder='____'
                    containerStyle={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '8px', direction: 'ltr', textAlign: 'right' }}
                    inputStyle={{ border: '#808080 solid 1px', margin: '6px', borderRadius: '6px', height: '59px', width: '44px' }}

                    shouldAutoFocus={true}
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    inputType='number'
                    renderInput={(props) => <input {...props} />}
                />
                <div className='w-full fcc my-4 text-xs'>
                    <span className='flex ml-1 text-gray-500'>کد را دریافت نکردید:</span>
                    <div onClick={resendOtp} className='text-secondary-500 cursor-pointer'>ارسال مجدد کد</div>
                </div>
                <button type='submit' onClick={otpSubmitHandler} className='mt-2 w-full h-9 sm:h-10 bg-secondary-500 rounded-md text-white'>
                    تایید
                </button>
            </div>
        </div>
    )
}

export default CheckOtp