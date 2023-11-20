//react icons
import Link from "next/link";
import { HiCheckCircle, HiXCircle, HiOutlinePencilAlt, HiExclamationCircle, HiOutlineClipboardList } from "react-icons/hi";
import Image from "next/image";

export default function Services({ products }) {
    return (
        <div>
            <div className="mx-auto">
                <div className="mx-auto space-y-8 lg:px-0">
                    <ul role="list">
                        {products.map((product, i) => (
                            <li key={product.id} className={`p-4 md:p-6 sm:h-auto bg-white mt-6 md:mt-0 rounded-md border border-cf-200 md:border-x-0 md:border-t-0 ${products.length - 1 === i ? 'md:border-b-0' : ''}`}>
                                <div className="h-full flex flex-col sm:flex-row items-center sm:items-start">
                                    <div className="relative sm:ml-6 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100 sm:h-40 h-40 w-full sm:w-auto">
                                        <Image
                                            width={600}
                                            height={600}
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-full ms:h-40 w-full object-contain object-center"
                                        />
                                    </div>
                                    <div className='my-6 sm:my-2 w-full fcc sm:justify-start'>
                                        <div className={`font-medium fcc text-gray-900 sm:flex sm:justify-between flex-col sm:items-start ${product.state === 0 ? 'text-primary-500' : product.state === 1 ? 'text-warning' : product.state === 2 ? 'text-red-500' : 'text-cf-300'}`}>
                                            <div className='flex'>
                                                <span className='ml-1 text-cf-300'>سرویس :</span>
                                                <div>{product.name}</div>
                                            </div>
                                            <div className='flex mt-4'>
                                                <span className='ml-1 text-cf-300'>نوع سرویس :</span>
                                                <div>{product.name}</div>
                                            </div>
                                            <div className='flex mt-4'>
                                                <span className='ml-1 text-cf-300'>سطح شما در این سرویس :</span>
                                                <div>{product.name}</div>
                                            </div>
                                            <div className='flex mt-4 sm:hidden'>
                                                <span className='ml-1 text-cf-300'>وضعیت :</span>
                                                {product.state === 0 ?
                                                    <div className='flex items-center'>
                                                        <span className='text-cf-200'>تایید صلاحیت شده</span>
                                                        <HiCheckCircle size={16} className='mr-1 text-primary-500' />
                                                    </div> :
                                                    product.state === 1 ?
                                                        <div className='flex items-center'>
                                                            <span className='text-cf-200'>در انتظار تایید</span>
                                                            <HiExclamationCircle size={16} className='mr-1 text-warning' />
                                                        </div> :
                                                        product.state === 2 ?
                                                            <div className='flex items-center'>
                                                                <span className='text-cf-300'>تایید صلاحیت نشده</span>
                                                                <HiXCircle size={16} className='mr-1 text-red-500' />
                                                            </div> : ''
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 sm:flex sm:justify-between">
                                    <div className="hidden items-center sm:flex">
                                        {product.state === 0 ?
                                            <div className='flex items-center'>
                                                <HiCheckCircle size={18} className='ml-2 text-primary-500' />
                                                <span>تایید صلاحیت شده</span>
                                            </div> :
                                            product.state === 1 ?
                                                <div className='flex items-center'>
                                                    <HiExclamationCircle size={18} className='ml-2 text-warning' />
                                                    <span>در انتظار تایید</span>
                                                </div> :
                                                product.state === 2 ?
                                                    <div className='flex items-center'>
                                                        <HiXCircle size={18} className='ml-2 text-red-500' />
                                                        <span>تایید صلاحیت نشده</span>
                                                    </div> : ''
                                        }
                                    </div>

                                    <div className="mt-6 flex flex-row-reverse items-center space-x-4 divide-x divide-gray-200 border-t border-gray-200 pt-4 text-sm font-medium sm:mt-0 sm:border-none sm:pt-0">
                                        <div className="flex flex-1 justify-center">
                                            <Link href="#" className="whitespace-nowrap flex items-center text-blue-500 hover:text-blue-400">
                                                مشاهده قرار داد
                                                <HiOutlineClipboardList size={18} className="mr-2" />
                                            </Link>
                                        </div>
                                        <div className="flex flex-1 justify-center">
                                            <Link href={product.href} className="whitespace-nowrap flex items-center text-blue-500 hover:text-blue-400">
                                                مشاهده سرویس
                                                <HiOutlinePencilAlt size={18} className="mr-2" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
