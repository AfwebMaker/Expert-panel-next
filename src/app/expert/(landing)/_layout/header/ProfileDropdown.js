import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { RiArrowDownSLine } from 'react-icons/ri';
// react router dom
import Link from 'next/link';
import { useRouter } from 'next/navigation';
//react icons
import { HiClipboardList, HiUserCircle, HiLogin, HiPresentationChartLine } from 'react-icons/hi'
import Cookies from 'js-cookie'
import Image from "next/image";

function ProfileDropDown({ data }) {
    const router = useRouter()

    return (
        <div className="w-auto text-right">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="flex items-center justify-around w-full text-sm font-medium focus:outline-none focus-visible:ring-2 hover:hover:text-color-font-3">
                        <div className='bg-black w-10 h-10 rounded-full overflow-hidden'>
                            <Image
                                width={400}
                                height={400}
                                className="inline-block h-full w-full object-cover rounded-full"
                                src="https://kargosha.com/assets/avatar.png"
                                alt=""
                            />
                        </div>
                        <span className='mx-2 text-sm text-color-font-1 hover:text-color-font-3'>
                            {data.name} {data.family}
                        </span>
                        <RiArrowDownSLine
                            className="h-5 w-5 text-color-font-2 hover:text-color-font-3"
                            aria-hidden="true"
                        />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute left-0 px-2 whitespace-nowrap mt-2 w-auto origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <Link href="/expert/profile"
                                        className={`${active ? 'text-primary-500' : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        {active ? (
                                            <HiUserCircle size={18} className='ml-2 text-primary-500' />
                                        ) : (
                                            <HiUserCircle size={18} className='ml-2 text-gray-700' />
                                        )}
                                        پروفایل کاربری
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        href="#"
                                        className={`${active ? 'text-primary-500' : 'text-color-font-1'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        {active ? (
                                            <HiClipboardList size={18} className='ml-2 text-primary-500' />
                                        ) : (
                                            <HiClipboardList size={18} className='ml-2 text-gray-700' />
                                        )}
                                        مدیریت سفارشات
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        href="#"
                                        className={`${active ? 'text-primary-500' : 'text-color-font-1'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        {active ? (
                                            <HiPresentationChartLine size={18} className='ml-2 text-primary-500' />
                                        ) : (
                                            <HiPresentationChartLine size={18} className='ml-2 text-gray-700' />
                                        )}
                                        گزارش سفارشات
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={() => { Cookies.remove('TOKEN'); router.push('/expert/login/') }}
                                        className={`cursor-pointer ${active ? 'text-red-500' : 'text-color-font-1'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        {active ? (
                                            <HiLogin size={18} className='ml-2 text-red-500' />
                                        ) : (
                                            <HiLogin size={18} className='ml-2 text-red-500' />
                                        )}
                                        خروج از حساب
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}

export default ProfileDropDown;
