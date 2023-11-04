"use client"
import Image from 'next/image'
import { useState } from 'react'
// components
import Brands from "./_components/Brands"
// images
import phone from "@/public/images/landing/phone.jpg"
import desktop from "@/public/images/landing/desktop.jpg"
// react icons
import { HiOutlineLockClosed, HiOutlineShieldCheck, HiOutlineDocumentText } from 'react-icons/hi';

const primaryFeatures = [
  {
    name: 'احراز هویت و صلاحیت',
    description: 'با پاسخ دادن به چند سوال احراز هویت و صلاحیت آنلاین انجام دهید.',
    icon: <HiOutlineLockClosed size={24} />,
  },
  {
    name: 'رتبه بندی و تایید نهایی',
    description: 'با توجه به پاسخ هایتان رتبه بندی و تایید نهایی می شوید.',
    icon: <HiOutlineShieldCheck size={24} />,
  },
  {
    name: 'ارجاع درخواست',
    description: 'با توجه به تخصص و رتبه خود منتظر درخواست باشید.',
    icon: <HiOutlineDocumentText size={24} />,
  },
]

const secondaryFeatures = [
  {
    name: 'سرویس خدمات فوری',
    description: "این سرویس مخصوص امور اورژانسی ساختمان مانند: ترکیدگی لوله و رفع نشتی آب، تخلیه و رفع گرفتگی چاه، رفع اتصال یا قطع برق، تعمیر موتورخانه و قفل و کلید است. بعد از ثبت درخواست متخصص در کمترین زمان می بایست پاسخگوی مشتری باشد.",
    href: '#',
    icon: <HiOutlineDocumentText size={24} />,
  },
  {
    name: 'سرویس خرده کاری',
    description: "این سرویس به منظور رفع ایرادات، نواقص و تغییرات جزیی در ساختمان از قبیل: دریل کاری(نصب پرده، رگال، تابلو و غیره)، نصب کلید و پریز و تعویض لامپ، تعویض و نصب لوستر و چراغ سقفی، لکه گیری گچ- سیمان- سنگ- سرامیک- کاشی و رنگ است.",
    href: '#',
    icon: <HiOutlineDocumentText size={24} />,
  },
  {
    name: 'تامین نیروی فنی و اجرایی',
    description: "در این سرویس 0 تا 100 خدمات ساختمانی قابل ارائه است. متخصص این سرویس به 2 صورت روزمزد و آیتمی(اعلام قیمت بر اساس مترمربع، مترطول، عدد و غیره) می تواند پاسخگوی درخواست های مشتری باشد. ",
    href: '#',
    icon: <HiOutlineDocumentText size={24} />,
  },
  {
    name: 'پیمانکاران ساخت',
    description: "در این سرویس خدمات ساختمانی در قالب پیمانکاری ارائه می شود. متخصصان این سرویس افراد حقیقی و حقوقی هستند که امکان گرفتن پروژه به صورت پیمانکاری را دارند. ",
    href: '#',
    icon: <HiOutlineDocumentText size={24} />,
  },
  {
    name: 'تعمیرات اساسی(بازسازی)',
    description: "در این سرویس خدمات بازسازی ساختمان قابل ارائه است. متخصصانی که تیم‌های مختلف انجام امور ساختمانی مانند: متخصصان تاسیسات الکتریکی و مکانیکی، مجریان روف‌گاردن و فضای سبز و محوطه و غیره دارند، به منظور رفع نیاز مشتری می توانند در این سرویس قرار بگیرند.",
    href: '#',
    icon: <HiOutlineDocumentText size={24} />,
  },
]

const featuredTestimonial = {
  body: 'سلام بنده برای اجرای روف گاردن از متخصصان کارگشا استفاده کردم به موقع و سریع انجام شد و رفتار پشتیبانی و پرسنل بسیار عالی بود ممنونم.',
  author: {
    name: 'امیرحسین جلالی',
    handle: 'amirxone',
    imageUrl: "",
    logoUrl: '',
  },
}

const testimonials = [
  [
    [
      {
        body: 'از بازسازی کارگشا استفاده کردم و راضی بودم.',
        author: {
          name: 'امیرحسن لشگری',
          handle: 'whh32',
          imageUrl: "",
        },
      },
    ],
    [
      {
        body: 'نقاشی خونه رو آقای محمدی انجام دادن که بسیارخوش قول و خوش اخلاق بودند.',
        author: {
          name: 'سعیدرضا طاهری',
          handle: 'taheri_offical',
          imageUrl: "",
        },
      },
    ],
  ],
  [
    [
      {
        body: 'تغییرکاشی و سرامیک سرویس ها را با آقای سمندرنژاد انجام دادم خوب بود.',
        author: {
          name: 'اردشیر رشیدی',
          handle: 'a_rashidi',
          imageUrl: "",
        },
      },
    ],
    [
      {
        body: 'سلام و عرض ادب میخواستم تشکر کنم از آقای حیدری که لوله کشی منزل بنده رو انجام دادن واقعا کار تمیز تمیزی تحویل دادن و خیلی خوش اخلاق بودن',
        author: {
          name: 'محمدرضا خدامی',
          handle: 'khodami',
          imageUrl: "",
        },
      },
    ],
  ],
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Page() {

  return (
    <div className="bg-white">
      <main>
        {/* Hero section */}
        <div className="relative isolate mb-5">
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
          </svg>
          <div className="mx-auto max-w-7xl px-6 py-10 sm:py-24 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <h1 className="mt-10 max-w-lg text-xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
                کارگشا آغازگر تحول در ارائه خدمات فنی و مهندسی ساختمان
                به موقع و به درستی
              </h1>
              <p className="mt-5 text-base sm:text-lg leading-7 text-gray-600">
                فعالیت حرفه ای خود را به عنوان متخصص در سامانه خدمات کارگشا با پشت سر گذاشتن مراحل ثبت نام آغاز کنید. با مشتریان بیشتری در ارتباط باشید و درآمد بیشتری کسب کنید.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  همین حالا متخصص شو 
                </a>
              </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
              <svg viewBox="0 0 366 729" role="img" className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
                <title>App screenshot</title>
                <defs>
                  <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                    <rect width={316} height={684} rx={36} />
                  </clipPath>
                </defs>
                <path
                  fill="#4B5563"
                  d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                />
                <path
                  fill="#343E4E"
                  d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                />
                <foreignObject
                  width={316}
                  height={684}
                  transform="translate(24 24)"
                  clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                >
                  <Image src={phone} alt="" />
                </foreignObject>
              </svg>
            </div>
          </div>
        </div>

        {/* Logo cloud */}
        <Brands title="یک پلتفرم، برای تمامی نیاز ها" colorTitle="text-primary-500" />

        {/* Feature section */}
        <div className="mx-auto mt-10 sm:mt-32 max-w-7xl sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-16 sm:rounded-3xl sm:px-10 sm:py-24 xl:px-24">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
              <div className="lg:row-start-2 lg:max-w-md">
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                  اپلیکیشن متخصصین
                </h2>
                <p className="mt-6 sm:text-lg leading-7 text-gray-300">
                  با دانلود اپلیکیشن متخصصین کار در دستان شماست.
                </p>
              </div>
              <Image
                src={desktop}
                alt="Product screenshot"
                className="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none"
                width={2432}
                height={1442}
              />
              <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
                <dl className="max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                  {primaryFeatures.map((feature) => (
                    <div key={feature.name} className="relative flex flex-col">
                      <div className="ml-9 font-semibold text-white flex items-center mb-2">
                        <span className='ml-2 text-primary-500 fcc'>
                          {feature.icon}
                        </span>
                        <span className=' fcc'>
                          {feature.name}
                        </span>
                      </div>
                      <div className="">{feature.description}</div>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div
              className="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu"
              aria-hidden="true"
            >
              <div
                className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary-500 to-secondary-500 opacity-25"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto mt-10 sm:mt-32 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              توضیحات مربوط به سرویس ها
            </p>
            {/* <p className="mt-6 text-lg leading-8 text-gray-600">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
              pulvinar et feugiat blandit at. In mi viverra elit nunc.
            </p> */}
          </div>
          <div className="mx-auto mt-10 mb-28 sm:mb-0 max-w-2xl sm:mt-20 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {secondaryFeatures.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center text-base font-semibold leading-7 text-gray-900">
                    <span className='ml-2 text-primary-500 fcc'>
                      {feature.icon}
                    </span>
                    <span>
                      {feature.name}
                    </span>
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <a href={feature.href} className="text-sm font-semibold leading-6 text-primary-500">
                        بیشتر <span aria-hidden="true">...</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>



        {/* Testimonials section */}
        <div className="relative isolate mb-16 sm:mt-32 sm:pt-32">
          <svg
            className="absolute inset-0 -z-10 hidden h-full w-full stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] sm:block"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="55d3d46d-692e-45f2-becd-d8bdc9344f45"
                width={200}
                height={200}
                x="50%"
                y={0}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={0} className="overflow-visible fill-gray-50">
              <path
                d="M-200.5 0h201v201h-201Z M599.5 0h201v201h-201Z M399.5 400h201v201h-201Z M-400.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#55d3d46d-692e-45f2-becd-d8bdc9344f45)" />
          </svg>
          <div className="relative">
            <div
              className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
              aria-hidden="true"
            >
              <div
                className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-primary-500 to-secondary-500"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
            <div
              className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-8 opacity-25 blur-3xl xl:justify-end"
              aria-hidden="true"
            >
              <div
                className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-primary-500 to-secondary-500 xl:ml-0 xl:mr-[calc(50%-12rem)]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-xl sm:text-center">
                <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  نظرات و انتقادات متخصصین
                </p>
              </div>
              <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
                <figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
                  <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
                    <p>{`“${featuredTestimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
                    <Image
                      className="h-10 w-10 flex-none rounded-full bg-gray-50"
                      src={featuredTestimonial.author.imageUrl}
                      alt=""
                    />
                    <div className="flex-auto">
                      <div className="font-semibold">{featuredTestimonial.author.name}</div>
                      <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
                    </div>
                    <Image className="h-10 w-auto flex-none" src={featuredTestimonial.author.logoUrl} alt="" />
                  </figcaption>
                </figure>
                {testimonials.map((columnGroup, columnGroupIdx) => (
                  <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
                    {columnGroup.map((column, columnIdx) => (
                      <div
                        key={columnIdx}
                        className={classNames(
                          (columnGroupIdx === 0 && columnIdx === 0) ||
                            (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                            ? 'xl:row-span-2'
                            : 'xl:row-start-1',
                          'space-y-8'
                        )}
                      >
                        {column.map((testimonial) => (
                          <figure
                            key={testimonial.author.handle}
                            className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                          >
                            <blockquote className="text-gray-900">
                              <p>{`“${testimonial.body}”`}</p>
                            </blockquote>
                            <figcaption className="mt-6 flex items-center gap-x-4">
                              <Image
                                className="h-10 w-10 rounded-full bg-gray-50"
                                src={testimonial.author.imageUrl}
                                alt=""
                              />
                              <div>
                                <div className="font-semibold">{testimonial.author.name}</div>
                                <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                              </div>
                            </figcaption>
                          </figure>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
export default Page;