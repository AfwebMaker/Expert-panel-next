import React, { useState, useEffect } from 'react'
// react icons
import { HiOutlineSpeakerphone } from "react-icons/hi";
//formik
import { useFormik } from "formik";
import * as Yup from "yup";
//components
import DynamicInputs from '@/src/app/_components/inputs/DynamicInputs'
import Button from '@/app/_components/Button'
// function 
import formatPrice from "@/src/functions/formatPrice"

const inputData = [
    {
        id: "ProposedPrice",
        name: "ProposedPrice",
        inputType: "text",
        title: "قیمت پیشنهادی شما (تومان)",
        required: true,
        type: "text",
        placeholder: "برای مثال : 10,000,000",
    },
    {
        id: "materialsPrice",
        name: "materialsPrice",
        inputType: "text",
        title: "قیمت پیشنهادی شما برای مصالح (تومان)",
        required: true,
        type: "text",
        placeholder: "برای مثال : 20,000,000",
    }
]

function TenderBoxModule({ setIsOpen }) {
    const [step, setStep] = useState(1);
    const [price, setPrice] = useState({});

    useEffect(() => {
        const storedPrice = localStorage.getItem('price');
        if (storedPrice) {
            setPrice(JSON.parse(storedPrice));
        }
    }, []);

    const validationSchema = Yup.object().shape({
        ProposedPrice: Yup.number()
            .typeError('قیمت باید یک عدد باشد')
            .required('لطفا قیمت پیشنهادی خود را وارد کنید.'),
        materialsPrice: Yup.number()
            .typeError('قیمت باید یک عدد باشد')
            .required('لطفا قیمت پیشنهادی برای مصالح خود را وارد کنید.')
    });

    const formik = useFormik({
        initialValues: {
            ProposedPrice: "",
            materialsPrice: "",
        },
        validationSchema,
        onSubmit: (values) => {
            localStorage.setItem('price', JSON.stringify(values));
            setPrice(values);
            setStep(2);
        },
    });

    const reset = () => {
        setIsOpen(false);
        localStorage.removeItem('price');
        setStep(1)
    }

    const confirmationHandler = () => {
        // request Api
        reset();
    }

    const cancelHandler = () => {
        reset();
    }

    return (
        <div className='w-full h-full'>
            <div className='w-full fcc gap-x-1 text-primary-500 mb-7'>
                <h2>اعلام قیمت پیشنهادی</h2>
                <HiOutlineSpeakerphone size={20} />
            </div>
            {
                step === 1 ?
                    (
                        <>
                            <p className='text-xs leading-7 mb-7'>
                                در صورت تمایل به انجام پروژه قیمت پیشنهادی خود و قیمت مصالح مورد نیاز را اعلام کنید را برای این پروژه اعلام کنید.
                            </p>
                            <form onSubmit={formik.handleSubmit}>
                                <div className='flex flex-col w-full justify-between mb-8'>
                                    {inputData.map(item => (
                                        <DynamicInputs
                                            key={item.id}
                                            inputType={item.inputType}
                                            title={item.title}
                                            state={1}
                                            required={item.required}
                                            className={"my-2 w-full"}
                                            placeholder={item.placeholder}
                                            id={item.id}
                                            name={item.name}
                                            formik={formik}
                                        />
                                    ))}
                                </div>
                                <Button type='submit' title='اعلام قیمت' />
                            </form>
                        </>
                    )
                    :
                    (
                        <div>
                            <p className='text-xs leading-7 mb-7'>
                                قیمت پیشنهادی شما برای پروژه {formatPrice(price.ProposedPrice)} تومان
                                {formatPrice(price.materialsPrice) && ` و قیمت پیشنهادی برای مصالح ${formatPrice(price.materialsPrice)}  تومان  `}
                                می باشد. در صورت تایید بر روی دکمه زیر کلیک کنید.
                            </p>
                            <p className='text-xs leading-7 mb-7'>
                                توجه داشته باشید در صورت تایید شما وارد مناقصه می شوید و امکان لغو را ندارید.
                            </p>
                            <div className='w-full h-11 flex items-center justify-around'>
                                <div onClick={confirmationHandler} className='transition-all duration-300 h-full bg-primary-100 hover:bg-primary-200 text-primary-500 rounded-lg fcc w-[200px]'>تایید و اعلام قیمت</div>
                                <div onClick={cancelHandler} className='transition-all duration-300 h-full bg-red-100 hover:bg-red-200 text-red-500 rounded-lg fcc w-[200px]'>لغو و بستن صفحه</div>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

export default TenderBoxModule
