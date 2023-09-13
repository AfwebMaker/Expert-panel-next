import React from 'react'
//components
import CartForm from './_components/CartForm'

function page() {
  return (
    <div className='py-5 lg:px-5 lg:bg-white rounded-lg flex flex-col w-full xl:max-w-[1000px]'>
      <div>
        <div className='mb-5 font-medium text-sm text-cf-500'>اطلاعات حساب</div>
        <div className='font-normal text-xs text-cf-300'>
          شبا یک کد ۲٦ رقمی است که به هر حساب بانکی شما به صورت اختصاص تعلق دارد. هر حساب دارای یک شماره منحصر به فرد است و طبق استانداردهای بین المللی در شماره حساب بانکی درج می شود.
        </div>
      </div>

      <CartForm />
    </div>
  )
}

export default page