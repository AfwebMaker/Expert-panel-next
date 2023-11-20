import React from "react";
import Link from "next/link";
import Image from 'next/image'

//images
import Namad_1 from "/public/images/public/namad/1.png"
import Namad_2 from "/public/images/public/namad/2.png"
import Namad_3 from "/public/images/public/namad/3.png"
import Namad_4 from "/public/images/public/namad/4.png"
import Kargosha_Logo from "/public/images/public/logo/Kargosha_Logo.svg"

const footerContent = [
    {
        id: 1,
        title: "پیوند ها",
        content: [
            "درباره ما",
            "تماس با ما",
            "پشتیبانی",
        ],
    },
    {
        id: 2,
        title: "خدمات",
        content: [
            "وبلاگ",
            "فروشگاه فایل",
            "دیده شو",
            "حقوق و دستمزد",
            "قیمت مصالح و تجهیزات",
        ],
    },
    {
        id: 3,
        title: "راهنما",
        content: [
            "راهنمای ثبت درخواست",
            "راهنمای پذیرش کار برای متخصصین",
            "راهنما و شیوه های پرداخت",
        ],
    },
    {
        id: 4,
        title: "راه های ارتباطی",
        content: [
            "تهران، بلوار قیطریه، نبش خیابان نامی، پلاک ۱، واحد ۵",
            "۰۲۱۲۲۶۷۴۹۵۴ - ۰۲۱۲۲۶۷۵۶۰۵",
            "info@kargosha.com",
        ],
    },
];

const Footer = () => {
    return (
        <footer className="text-center bg-[#EBEFED] flex items-center flex-col">
            <div className="container max-w-[1300px] px-[20px] md:px-[32px]">
                <div className="pt-10 pb-10 w-full flex lg:justify-start text-center justify-center mb-2 lg:m-0 transition-all duration-300">
                    <Link className="" href='#'>
                        <Image
                            src={Kargosha_Logo}
                            alt="Kargosha_Logo"
                            width={120}
                        />
                    </Link>
                </div>
                <div className="grid grid-cols-12">
                    <div className=" grid grid-cols-12 col-span-12 lg:col-span-12 lg:flex justify-between items-start text-right text-[14px] transition-all duration-300">
                        {footerContent.map((item) => (
                            <div key={item.id} className="ml-3 col-span-12 sm:col-span-6 text-center lg:text-right mb-10 transition-all duration-500 ">
                                <h5 className="uppercase font-extrabold mb-2.5 text-cf-400">
                                    {item.title}
                                </h5>

                                <ul className="list-none">
                                    {item.content.map((item, i) => (
                                        <li key={i} className="mb-2">
                                            <Link href="#!" className="text-cf-300 font-normal">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center w-full py-5 gap-x-5">
                <Link
                    href="#!"
                    type="button"
                    className="rounded-full border-2 border-[#395498] text-[#395498] leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition-all duration-300 ease-in-out w-8 h-8 xl:w-10 xl:h-10 m-1 "
                >
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="facebook-f"
                        className="w-2 h-full mx-auto text-color-Text1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                    >
                        <path
                            fill="currentColor"
                            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                        ></path>
                    </svg>
                </Link>

                <Link
                    href="#!"
                    type="button"
                    className="rounded-full border-2 border-[#2BA5DA] text-[#2BA5DA] leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition-all duration-300 ease-in-out w-8 h-8 xl:w-10 xl:h-10 m-1 "
                >
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="twitter"
                        className="w-3 h-full mx-auto text-color-Text1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="currentColor"
                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                        ></path>
                    </svg>
                </Link>

                <Link
                    href="#!"
                    type="button"
                    className="rounded-full border-2 border-[#C7338A] text-[#C7338A] leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition-all duration-300 ease-in-out w-8 h-8 xl:w-10 xl:h-10 m-1 "
                >
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="instagram"
                        className="w-3 h-full mx-auto text-color-Text1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path
                            fill="currentColor"
                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                        ></path>
                    </svg>
                </Link>

                <Link
                    href="#!"
                    type="button"
                    className="rounded-full border-2 border-[#0077B0] text-[#0077B0] leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition-all duration-300 ease-in-out w-8 h-8 xl:w-10 xl:h-10 m-1 "
                >
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="linkedin-in"
                        className="w-3 h-full mx-auto text-color-Text1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path
                            fill="currentColor"
                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                        ></path>
                    </svg>
                </Link>
            </div>

            <div className="px-5 md:px-20 w-full">
                <div className="w-full h-[1px] bg-[#d6d9de]" ></div>
            </div>
            <div className="flex items-center justify-center px-3 gap-x-5 py-8 xl:p-8 ">
                <Link href="#">
                    <Image
                        src={Namad_1}
                        alt="enamad"
                        width={80}
                    />
                </Link>
                <Link href="#">
                    <Image
                        src={Namad_2}
                        alt="enamad"
                        width={80}
                    />
                </Link>
                <Link href="#">
                    <Image
                        src={Namad_3}
                        alt="enamad"
                        width={80}
                    />
                </Link>
                <Link href="#">
                    <Image
                        src={Namad_4}
                        alt="enamad"
                        width={80}
                    />
                </Link>
            </div>
            <div className="flex items-center justify-center w-full bg-[#9D9FA2]">
                <div className="maxLayout flex flex-col md:flex-row items-center justify-between w-full text-right text-[10px] font-bold text-cf-100 px-3 md:px-10 py-3">
                    <div className="flex items-center justify-center">
                        © ۲۰۲۳ کليه حقوق مادی و معنوی این سایت متعلق به شرکت آینده پژوهان نوآور کارگشا است.
                    </div>
                    <div className="flex items-center justify-around md:gap-x-10 mt-3 md:mt-0 md:w-auto w-full">
                        <span>
                            حریم خصوصی
                        </span>
                        <span>
                            شرایط و ظوابط عمومی
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;