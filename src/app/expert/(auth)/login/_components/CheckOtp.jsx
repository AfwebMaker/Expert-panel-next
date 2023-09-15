import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import OtpInput from 'react-otp-input';

function CheckOtp({ forgetPassword, setPageState }) {
    const [otp, setOtp] = useState('');
    const router = useRouter()

    //check otp length for auto submit
    useEffect(() => {
        otpSubmitHandler()
    }, [otp, otpSubmitHandler])

    //otp submit
    const otpSubmitHandler = () => {
        if (otp.length === 4) {
            if (forgetPassword) {
                setPageState('forgetPassword')
            } else {
                router.push('/user/register')
            }
        }
    }

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
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    inputType='number'
                    renderInput={(props) => <input {...props} />}
                />
                <div className='w-full fcc my-4 text-xs'>
                    <span className='flex ml-1 text-gray-500'>کد را دریافت نکردید:</span>
                    <div className='text-secondary-500 cursor-pointer'>ارسال مجدد کد</div>
                </div>
                <button onClick={otpSubmitHandler} className='mt-2 w-full h-9 sm:h-10 bg-secondary-500 rounded-md text-white'>
                    تایید
                </button>
            </div>
        </div>
    )
}

export default CheckOtp