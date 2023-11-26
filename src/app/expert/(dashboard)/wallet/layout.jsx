import Link from "next/link";
import React from "react";
//react icons
import { HiHome, HiOutlineChevronLeft } from 'react-icons/hi'

function RootLayout({ children }) {
  return (
    <div className="px-5 pt-5 h-[calc(100vh-157px)]">
      <Link href='/expert/wallet/' className='hidden w-full max-w-[1605px] m-auto md:mb-8 lg:flex justify-start items-center font-medium text-base'>
        <HiHome size={20} />
        <HiOutlineChevronLeft className='mx-2' size={15} />
        <div className='ml-2'>کیف پول</div>
      </Link>
      <div className="fcc">
        <div className="flex w-full max-w-[1605px] flex-col xl:flex-row xl:justify-center py-0 xl:items-start">
          {children}
        </div>
      </div>
    </div>
  );
}

export default RootLayout;
