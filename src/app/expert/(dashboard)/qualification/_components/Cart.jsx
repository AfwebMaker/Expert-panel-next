//react icons
import { HiCheckCircle, HiXCircle, HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";

const products = [
    {
        id: 1,
        name: 'سوالات نظام وظیفه',
        state: true,
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg',
        imageAlt:
            'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
    },
    {
        id: 2,
        name: 'سوالات نظام وظیفه',
        state: false,
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg',
        imageAlt:
            'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
    },
    {
        id: 2,
        name: 'سوالات نظام وظیفه',
        state: false,
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg',
        imageAlt:
            'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
    },
    {
        id: 2,
        name: 'سوالات نظام وظیفه',
        state: false,
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg',
        imageAlt:
            'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
    }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Cart({ general }) {
    return (
        <div>
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto space-y-8 lg:max-w-4xl lg:px-0">
                    {/* Products */}
                    <ul role="list">
                        {products.map((product, i) => (
                            <li key={product.id} className={`p-4 md:p-6 sm:h-40 bg-white mt-6 md:mt-0 rounded-md border border-cf-200 md:border-x-0 md:border-t-0 ${products.length - 1 === i ? 'md:border-b-0' : ''}`}>
                                <div className="flex items-center sm:items-start flex-col sm:flex-row h-full">
                                    <div className="relative sm:ml-6 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100 sm:h-full h-40 w-full sm:w-auto">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-full w-full object-contain object-center"
                                        />
                                    </div>
                                    <div className="w-full justify-between sm:items-end h-full text-sm flex flex-col">
                                        <div className='my-6 sm:my-0 w-full fcc sm:justify-start'>
                                            <div className="font-medium fcc text-gray-900 sm:flex sm:justify-between flex-col sm:items-start">
                                                <div className='flex'>
                                                    <span className='ml-1'>فرم :</span>
                                                    <div className='text-primary-500'>{product.name}</div>
                                                </div>
                                                <div className='flex mt-2'>
                                                    <span className='ml-1'>وضعیت :</span>
                                                    {product.state ?
                                                        <div className='flex items-center'>
                                                            <span>تایید صلاحیت شده</span>
                                                            <HiCheckCircle size={16} className='mr-1 text-primary-500' />
                                                        </div> :
                                                        <div className='flex items-center'>
                                                            <span>تایید صلاحیت نشده</span>
                                                            <HiXCircle size={16} className='mr-1 text-red-500' />
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-4 divide-x divide-gray-200 border-t border-gray-200 pt-4 text-sm font-medium sm:mt-0 sm:border-none sm:pt-0 flex-row-reverse w-full sm:w-1/3">
                                            {general ?
                                                <div className="flex flex-1 justify-center pl-4">
                                                    <a href="#" className="whitespace-nowrap flex items-center text-blue-500 hover:text-blue-400">
                                                        مشاهده و ویرایش فرم
                                                        <HiOutlinePencilAlt size={18} className="mr-2" />
                                                    </a>
                                                </div> :
                                                <>
                                                    <div className="flex flex-1 justify-center">
                                                        <a href="#" className="whitespace-nowrap flex items-center text-blue-500 hover:text-blue-400">
                                                            حذف سرویس
                                                            <HiOutlineTrash size={18} className="mr-2" />
                                                        </a>
                                                    </div>
                                                    <div className="flex flex-1 justify-center pl-4">
                                                        <a href="#" className="whitespace-nowrap flex items-center text-blue-500 hover:text-blue-400">
                                                            مشاهده سرویس
                                                            <HiOutlinePencilAlt size={18} className="mr-2" />
                                                        </a>
                                                    </div>
                                                </>
                                            }
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
