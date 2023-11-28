import React, { useState } from "react"
import Image from "next/image";
import Link from "next/link";
//functions
import formatPrice from '@/src/functions/formatPrice'
//react icons
import { HiOutlineExclamationCircle, HiPlusCircle, HiCreditCard, HiCheckCircle } from "react-icons/hi";
//assets
import icon1 from '@/public/icons/wallet/icon1.svg'
import icon2 from '@/public/icons/wallet/icon2.svg'
import icon3 from '@/public/icons/wallet/icon3.svg'
import icon4 from '@/public/icons/wallet/icon4.svg'
import icon5 from '@/public/icons/wallet/icon5.svg'
import icon6 from '@/public/icons/wallet/icon6.svg'
//components
import Modal from "@/src/app/_components/Modal";

export default function Carts() {
  const [isOpen, setIsOpen] = useState(false);

  //cart information
  const carts = [
    {
      title: 'خدمات فوری',
      debt: 3000000,
      debt_ceiling: 123000000,
      state: true,
      icon: icon1
    },
    {
      title: 'خرده کاری',
      debt: 3000000,
      debt_ceiling: 0,
      state: false,
      icon: icon2
    },
    {
      title: 'نیروی فنی و اجرایی روزمزد',
      debt: 3000000,
      debt_ceiling: 123000000,
      state: true,
      icon: icon3
    },
    {
      title: 'نیروی فنی و اجرایی آیتمی',
      debt: 1000000,
      debt_ceiling: 0,
      state: true,
      icon: icon4
    },
    {
      title: 'پیمانکاران ساخت',
      debt: 2000000,
      debt_ceiling: 123000000,
      state: true,
      icon: icon5
    },
    {
      title: 'تعمیرات اساسی',
      debt: 2000000,
      debt_ceiling: 123000000,
      state: true,
      icon: icon6
    }
  ]

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
      <Modal setIsOpen={setIsOpen} isOpen={isOpen} w={'w-full'} h={'h-full'} >
        cart modal
      </Modal>

      {
        carts.map((item, i) => (
          <div key={i} className="relative h-32 rounded-lg border border-gray-200 bg-white p-3 flex overflow-hidden group">
            <div className="fcc duration-200 opacity-0 bg-black/40 backdrop-blur-sm group-hover:opacity-100 w-full h-full absolute inset-0 text-sm font-bold text-white">
              {
                item.state === false ?
                  <Link href='/expert/qualification/general' className="fcc w-full h-full">
                    <span>اضافه کردن شغل در این سرویس</span>
                    <HiPlusCircle size={20} className="mr-2" />
                  </Link> : item.debt_ceiling <= 0 ?
                    <div className="fcc">
                      <span>شما بدهی در این سرویس ندارید</span>
                      <HiCheckCircle size={20} className="mr-2" />
                    </div> :
                    <button onClick={() => { setIsOpen(true) }} className="fcc w-full h-full">
                      <span>تسویه بدهی</span>
                      <HiCreditCard size={20} className="mr-2" />
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
              <div className="fcc">
                <span className="text-sm font-bold whitespace-nowrap">سرویس :</span>
                <span className="mr-1 text-primary-500 text-sm font-bold">{item.title}</span>
              </div>
              <div className="fcc">
                <span className="text-sm font-bold whitespace-nowrap">سقف بدهی :</span>
                <span className="mr-1 text-cf-300 text-sm font-bold">{formatPrice(item.debt) + ' ریال'}</span>
              </div>
              {item.state === true ?
                <div className="fcc">
                  <span className="text-sm font-bold whitespace-nowrap">سرویس :</span>
                  <span className={`mr-1 text-primary-500 text-sm font-bold ${item.debt_ceiling <= 0 ? 'text-primary-500' : 'text-red-500'}`}>
                    {item.debt_ceiling <= 0 ? '۰ ریال - تسویه شده' : formatPrice(item.debt_ceiling) + ' ریال'}
                  </span>
                </div> :
                <div className="fcc text-red-500 text-sm font-bold">
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
