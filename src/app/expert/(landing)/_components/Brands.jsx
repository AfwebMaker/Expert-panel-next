import React from "react";
import Link from "next/link";
import Image from "next/image";

// assets
import AcademyMedium from "@/public/images/public/brands/Academy Medium.svg";
import AutoSazeMedium from "@/public/images/public/brands/Auto Saze Medium.svg";
import MekaMedium from "@/public/images/public/brands/Meka Medium.svg";
import MetriChandMedium from "@/public/images/public/brands/Metri Chand Medium.svg";
import SindbadMedium from "@/public/images/public/brands/Sindbad Medium.svg";

function Brands(props) {
  const { title, colorTitle } = props
  return (
    <div className="text-center flex items-center flex-col">
      <div className="maxLayout px-3 md:px-[32px] w-full flex flex-col items-center justify-center max-w-7xl">
        <span className={`${colorTitle} font-bold text-lg md:text-xl mb-8`}>
          {title}
        </span>
        <div className="grid grid-cols-10 sm:grid-cols-9 lg:grid-cols-10 items-center justify-between w-full h-full">
          <Link
            href="#"
            className="h-16 col-span-5 sm:col-span-3 lg:col-span-2 fcc mb-5 hover:animate-pulse"
          >
            <Image src={AcademyMedium} alt="Academy" width={120} />
          </Link>
          <Link
            href="#"
            className="h-16 col-span-5 sm:col-span-3 lg:col-span-2 fcc mb-5 hover:animate-pulse"
          >
            <Image src={AutoSazeMedium} alt="Automotive" width={120} />
          </Link>
          <Link
            href="#"
            className="h-16 col-span-5 sm:col-span-3 lg:col-span-2 fcc mb-5 hover:animate-pulse"
          >
            <Image src={MekaMedium} alt="Meka" width={120} />
          </Link>
          <Link
            href="#"
            className="h-16 col-span-5 sm:col-span-3 lg:col-span-2 fcc mb-5 hover:animate-pulse"
          >
            <Image src={MetriChandMedium} alt="MetriChand" width={120} />
          </Link>
          <Link
            href="#"
            className="h-16 col-span-5 sm:col-span-3 lg:col-span-2 fcc mb-5 hover:animate-pulse"
          >
            <Image src={SindbadMedium} alt="Sindbad" width={120} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Brands;
