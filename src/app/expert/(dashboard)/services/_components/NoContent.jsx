import React from 'react'
import Link from 'next/link'

function NoContent({ icon, title, description, textBtn, iconBtn, href }) {
    return (
        <div className='w-full h-[calc(100vh-135px)] md:h-[calc(100vh-270px)]'>
            <div className="w-full h-full fcc flex-col">
                <div className="bg-primary-100 fcc rounded-full text-primary-500 h-20 w-20 relative">
                    <div className='bg-primary-500 rounded-full h-1 w-14 absolute rotate-45'></div>
                    {icon}
                </div>
                <div className="w-full fcc md:hidden gap-x-2 text-primary-500 mt-2">
                    <h1>نماینده من</h1>
                </div>
                <div className="fcc flex-col m-4">
                    <h2 className="text-cf-500 mb-3 font-bold">{title}</h2>
                    <p className="text-cf-300 text-sm text-center w-full flex max-w-2xl leading-7">
                        {description}
                    </p>
                </div>
                <Link href={href} className="fcc bg-primary-100 text-primary-500 gap-x-1 px-4 py-3 rounded-lg mt-3">
                    <span className="text-sm">{textBtn}</span>
                    {iconBtn}
                </Link>
            </div>
        </div>
    )
}

export default NoContent