import React from "react";
//components
import MobileTickets from "./_components/MobileTickets";
// react icons
import { HiOutlineTicket, HiOutlineChat } from "react-icons/hi";

function Page() {
  return (
    <div className="flex flex-col mb-10 xl:mb-0">
      <div className="flex md:hidden text-primary-500 text-base px-[3%] md:px-0 fcc my-10">
        <h2>پشتیبانی و ارسال تیکت</h2>
        <HiOutlineTicket className="mr-1 text-lg" />
      </div>
      <div className="flex md:hidden text-cf-300 text-sm px-[3%] md:px-0 mb-5">
        <HiOutlineChat className="ml-1 text-base" />
        <h2>تیکت های من</h2>
      </div>
      <div className="h-[calc(100vh-280px)] w-full flex md:hidden">
        <ul className="h-full w-full overflow-y-scroll hideScroll font-medium text-lg flex flex-col items-center px-[3%] md:px-0">
          <MobileTickets />
        </ul>
      </div>
      <div className="hidden md:flex w-[100%] h-[calc(100vh-190px)] rounded-lg bg-white flex-col items-center justify-start py-10 px-5 overflow-y-scroll hideScroll">
        <div className="w-full h-auto flex flex-col items-center justify-start">
          <div className="rounded-full bg-primary-200 w-20 h-20 fcc text-5xl text-primary-500">
            <HiOutlineTicket />
          </div>
          <h1 className="text-lg text-primary-500 mt-3">
            پشتیبانی و ارسال تیکت
          </h1>
          <p className="text-sm mt-10 leading-6">
            احراز هویت در گارگشا قدم اول شما برای مشغول شدن به کار می باشد شما
            ابتدا باید به احراز اطلاعات کاربریتان سپس یک شماره شبا برای احراز
            بانکی و در نهایت احراز محل سکونتتان بپردازید.
          </p>
          <ul className="w-full marker:text-green list-outside list-disc ml-6 text-sm text-cf-300 pr-10 space-y-6 mt-8 leading-6">
            <li>
              توجه داشته باشید این پرسه در سیستم کارپشا محفوظ می باشد و برای
              احراز هویت شما از ارکان ها و سازمان های دولتی استفاده می کند این
              امر برای راحت شدن کار شما می باشد.
            </li>
            <li>
              برای گرفتن مدرک سوء پیشینه خود باید به دفاتر پلیس +۱۰ مراجعه
              بفرماید و سپس عکس آنرا با کیفیت خوب در قسمت احراز هویت اطلاعات
              کاربری مدارک گواهی عدم سوء پیشینه بارگزاری کنید و منتظر بمانید که
              از سمت ادمین تایدد بشود و احراز هویت شما انجام شود.
            </li>
            <li>
              توجه داشته باشید که اطلاعات کاربری شما چون غیر قابل تغییر می باشد
              بعد از احراز هویت امکان تغییر ندارند و شما فقط امکان ویرایش
              اطلاعات بانکی و سکونتی را دارید زیرا ممکن است با گذشت زمان تغییر
              کنند.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Page;
