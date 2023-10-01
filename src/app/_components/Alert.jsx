import React from 'react'
//toast
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'
//react icons
import { HiCheckCircle, HiExclamation, HiXCircle, HiExclamationCircle } from 'react-icons/hi'
import toast from 'react-hot-toast';

function Alert({ conf, status, title, description }) {
    return (
        <div className={`rounded-md p-4 w-[80%] ${status === 'success' ? 'bg-green-50' : ''} ${status === 'warn' ? 'bg-yellow-50' : ''} ${status === 'err' ? 'bg-red-50' : ''} ${status === 'info' ? 'bg-blue-50' : ''}`}>
            <div className="flex">
                <div className="flex-shrink-0 ml-1">
                    {status === 'success' && <HiCheckCircle className="h-5 w-5 text-green-500" aria-hidden="true" />}
                    {status === 'warn' && <HiExclamation className="h-5 w-5 text-yellow-500" aria-hidden="true" />}
                    {status === 'err' && <HiXCircle className="h-5 w-5 text-red-500" aria-hidden="true" />}
                    {status === 'info' && <HiExclamationCircle className="h-5 w-5 text-blue-500" aria-hidden="true" />}
                </div>
                <div className="ml-3">
                    <h3 className={`text-sm font-medium ${status === 'success' ? 'text-green-700' : ''} ${status === 'warn' ? 'text-yellow-700' : ''} ${status === 'err' ? 'text-red-700' : ''} ${status === 'info' ? 'text-blue-700' : ''}`}> {title}</h3>
                    <div className={`mt-2 text-sm ${status === 'success' ? 'text-green-600' : ''} ${status === 'warn' ? 'text-yellow-600' : ''} ${status === 'err' ? 'text-red-600' : ''} ${status === 'info' ? 'text-blue-600' : ''}`}>
                        {description &&
                            <p>
                                {description}
                            </p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Alert