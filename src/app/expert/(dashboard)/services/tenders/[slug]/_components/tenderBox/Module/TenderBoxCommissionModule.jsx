import React, { useState, useEffect } from 'react'
import Link from 'next/link';
//components
import RadioBtn from "./RadioBtn"
// react icons
import { HiOutlineCreditCard } from "react-icons/hi";

const plans = [
    {
        name: 'پرداخت کل کمیسیون پروژه',
        price: '50000000',
    },
    {
        name: 'پرداخت یک سوم کمیسیون پروژه',
        price: '314000000',
    },
]


function TenderBoxCommissionModule({ setIsOpen }) {
    const [step, setStep] = useState(1);
    const [selected, setSelected] = useState(plans[0])


    useEffect(() => {
        const storedPrice = localStorage.getItem('price');
        if (storedPrice) {
            setPrice(JSON.parse(storedPrice));
        }
    }, []);

    const walletHandler = () => {
        // request Api
        setStep(2)
    }

    return (
        <div className='w-full h-full'>
            <div className='w-full fcc gap-x-1 text-primary-500 mb-7'>
                <h2>پرداخت کمیسیون پروژه</h2>
                <HiOutlineCreditCard size={20} />
            </div>
            {
                step === 1 ?
                    (
                        <>
                            <p className='text-xs leading-7 mb-7'>
                                در صورت تمایل نهایی شدن پروژه و بستن قرار داد مبلغ مشخص شده زیر را تهت عنوان کمیسیون پروژه پرداخت کنید.
                            </p>
                            <RadioBtn plans={plans} selected={selected} setSelected={setSelected} />
                            <div className='w-full h-11 flex items-center justify-between mt-5 gap-x-5 px-1'>
                                <Link href={"#"} className='transition-all duration-300 h-full bg-primary-100 hover:bg-primary-200 text-primary-500 cursor-pointer rounded-lg fcc w-full'>پرداخت مستقیم</Link>
                                <div onClick={walletHandler} className='transition-all duration-300 h-full bg-indigo-100 hover:bg-indigo-200 text-indigo-500 cursor-pointer rounded-lg fcc w-full'>پرداخت با کیف پول</div>
                            </div>
                        </>
                    )
                    :
                    (
                        <div>
                            <p className='text-xs w-full fcc leading-7 mb-7'>
                                میزان کمیسیون شما به عنوان بدهی از کیف پول شمابا کوفقیت کسر شد.
                            </p>
                            <div className='w-full h-11 fcc'>
                                <div className='transition-all duration-300 h-full bg-indigo-100 hover:bg-indigo-200 cursor-pointer text-indigo-500 rounded-lg fcc w-full'>مطالعه قرارداد</div>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

export default TenderBoxCommissionModule