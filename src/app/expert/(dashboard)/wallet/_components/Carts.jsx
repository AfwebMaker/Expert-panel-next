import React, { useEffect, useState } from "react"
import Image from "next/image";
import Link from "next/link";
//formik 
import { useFormik } from "formik";
import * as Yup from "yup";
//functions
import formatPrice from '@/src/functions/formatPrice'
//react icons
import { HiOutlineExclamationCircle, HiPlusCircle, HiCreditCard, HiCheckCircle, HiOutlineCreditCard } from "react-icons/hi";
//assets
import icon1 from '@/public/icons/wallet/icon1.svg'
import icon2 from '@/public/icons/wallet/icon2.svg'
import icon3 from '@/public/icons/wallet/icon3.svg'
import icon4 from '@/public/icons/wallet/icon4.svg'
import icon5 from '@/public/icons/wallet/icon5.svg'
import icon6 from '@/public/icons/wallet/icon6.svg'
//components
import Modal from "@/src/app/_components/Modal";
import DynamicInputs from '@/app/_components/inputs/DynamicInputs';
import customToast from "@/src/functions/customToast";
import { useSelector } from "react-redux";

export default function Carts({ walletDataState }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeBox, setActiveBox] = useState(0);
  const [activeCart, setActiveCart] = useState(null);
  const [continueModal, setContinueModal] = useState(false);
  const [carts, setCarts] = useState([])

  const validationSchema = Yup.object({
    debt:
      activeBox === 1 ?
        Yup.string().required("لطفا مبلغ بدهی خود را وارد کنید.").matches(/\d/, "مبلغ بدهی باید شامل اعداد باشد.") :
        Yup.string()
  });

  //static cart information
  const staticCartInfo = [
    {
      title: 'نیروی فنی و اجرایی آیتمی',
      debt: 1000000,
      state: true,
      icon: icon4
    },
    {
      title: 'نیروی فنی و اجرایی روزمزد',
      debt: 3000000,
      state: true,
      icon: icon3
    },
    {
      title: 'خدمات فوری',
      debt: 3000000,
      state: true,
      icon: icon1
    },
    {
      title: 'خرده کاری',
      debt: 3000000,
      state: true,
      icon: icon2
    },
    {
      title: 'پیمانکاران ساخت',
      debt: 2000000,
      state: true,
      icon: icon5
    },
    {
      title: 'تعمیرات اساسی',
      debt: 2000000,
      state: true,
      icon: icon6
    }
  ]

  useEffect(() => {
    const createNewCarts = [];
    walletDataState && walletDataState.lst_walletDetails_Child.filter((item, i) => {
      i < 6 && createNewCarts.push({ ...item, ...staticCartInfo[i] })
    })

    setCarts(createNewCarts)
  }, [walletDataState])

  const formik = useFormik({
    initialValues: {
      debt: ''
    },
    validationSchema,
    onSubmit: (values) => {
      if (activeBox === 1) {
        if (values.debt <= walletDataState.balance) {
          setContinueModal('wallet')
        } else {
          customToast('err', 'موجودی کیف پول شما کافی نمی‌ باشد.')
        }
      } else {
        if (activeCart.balance <= walletDataState.balance) {
          setContinueModal('wallet')
        } else {
          customToast('err', 'موجودی کیف پول شما کافی نمی‌ باشد.')
        }
      }
    },
  });

  const cartClickHandler = (item) => {
    setActiveCart(item);
    setIsOpen(true);
    setActiveBox(0)
    setContinueModal(false)
    formik.resetForm()
  }

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      <Modal setIsOpen={setIsOpen} isOpen={isOpen} w={'w-full md:w-[500px]'} h={'h-full md:h-auto'} >
        <div>
          <div className="text-primary-500 fcc font-bold" >
            <span>پرداخت بدهی این سرویس</span>
            <HiOutlineCreditCard size={20} className="mr-2" />
          </div>
          {!continueModal ?
            <>
              <div className="my-6 font-medium text-sm">
                در صورتی پرادخت بدهیتان در این سرویس سرویس شما از حالت غیر فعال در خواهد آمد و کار به شما ارجاع خواهد شد.
              </div>

              <div onClick={() => { setActiveBox(0); formik.resetForm() }} className={`border-[2px] rounded-lg p-4 mb-4 cursor-pointer ${activeBox === 1 ? 'border-gray-200' : 'border-primary-500 bg-primary-100'}`}>
                <div className={`font-bold mb-4 fcc justify-between ${activeBox === 1 ? 'text-cf-300' : 'text-primary-500'}`}>
                  <span>
                    پرداخت کل بدهی این سرویس
                  </span>
                  {activeBox === 0 && <HiCheckCircle size={20} />}
                </div>
                {activeCart &&
                  <span className="text-cf-300 text-sm">معادل {formatPrice(Math.abs(activeCart.balance))} ریال</span>
                }
              </div>

              <div onClick={() => { setActiveBox(1) }} className={`border-[2px] rounded-lg p-4 mb-4 cursor-pointer ${activeBox === 0 ? 'border-gray-200' : 'border-primary-500 bg-primary-100'}`}>
                <div className={`font-bold fcc justify-between ${activeBox === 0 ? 'text-cf-300' : 'text-primary-500'}`}>
                  <span>
                    پرداخت بخشی از بدهی این سرویس
                  </span>
                  {activeBox === 1 && <HiCheckCircle size={20} />}
                </div>
                <div className="text-sm my-4 text-cf-300">میزان پرداختی خود را در این بخش وارد کنید :</div>
                <DynamicInputs
                  inputType='text'
                  title='میزان پرداختی (ریال)'
                  state="Low"
                  required={true}
                  className="my-2 w-full"
                  placeholder='به طور مثال : ۲،۰۰۰،۰۰۰'
                  id='debt'
                  name='debt'
                  formik={formik}
                />
              </div>
              <div className="fcc gap-4 pt-4">
                <button className="w-full py-2 px-4 fcc font-medium bg-primary-100 text-primary-500 rounded-md">
                  پرداخت مستقیم
                </button>
                <button onClick={formik.submitForm} className="w-full py-2 px-4 fcc font-medium bg-blue-100 text-blue-500 rounded-md">
                  پرداخت با کیف پول
                </button>
              </div>
            </> : continueModal === 'wallet' ?
              <div className="my-5 fcc text-cf-400">
                میزان بدهی شما از اعتبار کیف پول شما با موفقیت کسر شد.
              </div> :
              <div className="my-5 text-cf-400">
                پرداخت شما با موفقیت انجام شد.
              </div>
          }
        </div>
      </Modal>

      {carts.length &&
        carts.map((item) => (
          <div key={item.id} className="relative h-32 rounded-lg border border-gray-200 bg-white p-3 flex overflow-hidden group">
            <div className="fcc duration-200 opacity-0 bg-black/40 backdrop-blur-sm group-hover:opacity-100 w-full h-full absolute inset-0 text-sm font-bold text-white">
              {
                item.state === false ?
                  <Link href='/expert/qualification/general' className="fcc w-full h-full">
                    <span>اضافه کردن شغل در این سرویس</span>
                    <HiPlusCircle size={20} className="mr-2" />
                  </Link> : item.balance >= 0 ?
                    <div className="fcc">
                      <span>شما بدهی در این سرویس ندارید</span>
                      <HiCheckCircle size={20} className="mr-2 text-primary-500" />
                    </div> :
                    <button onClick={() => { cartClickHandler(item) }} className="fcc w-full h-full">
                      <div className="hover:text-primary-400 fcc duration-300">
                      <span>تسویه بدهی</span>
                      <HiCreditCard size={20} className="mr-2" />
                      </div>
                    </button>
              }
            </div>

            <div className="h-full w-[102px] bg-gray-100 ml-5 rounded-lg overflow-hidden flex-shrink-0 fcc">
              <Image
                src={item.icon}
                alt='job icon'
                sizes="50px"
              />
            </div>
            <div className="flex items-start justify-between flex-col h-full py-2">
              <div className="fcc items-start">
                <span className="text-xs sm:text-sm font-bold whitespace-nowrap">سرویس :</span>
                <span className="mr-1 text-primary-500 text-xs sm:text-sm font-bold">{item.title}</span>
              </div>
              <div className="fcc items-start">
                <span className="text-xs sm:text-sm font-bold whitespace-nowrap">سقف بدهی :</span>
                <span className="mr-1 text-cf-300 text-xs sm:text-sm font-bold">{formatPrice(item.debt) + ' ریال'}</span>
              </div>
              {item.state === true ?
                <div className="fcc items-start">
                  <span className="text-xs sm:text-sm font-bold whitespace-nowrap">میزان بدهی :</span>
                  <span className={`mr-1 text-primary-500 text-xs sm:text-sm font-bold ${item.balance >= 0 ? 'text-primary-500' : 'text-red-500'}`}>
                    {item.balance >= 0 ? '۰ ریال - تسویه شده' : formatPrice(Math.abs(item.balance)) + ' ریال'}
                  </span>
                </div> :
                <div className="fcc items-start text-red-500 text-sm font-bold">
                  <HiOutlineExclamationCircle size={20} className="ml-2" />
                  <span>این سرویس برای شما فعال نیست.</span>
                </div>
              }
            </div>
          </div>
        ))
      }
    </div>
  )
}
