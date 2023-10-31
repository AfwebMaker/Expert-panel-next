import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Icon } from './Icon'

function Notification({ title, body, resources, action, icon, style }) {
    const [link, setLink] = useState('')
    const [styleTailwind, setStyleTailwind] = useState('')

    //create link
    useEffect(() => {
        const newLink = resources.map((item) => {
            return item.data + '/'
        })
        setLink(newLink.join(''))
    }, [resources])

    useEffect(() => {
        switch (style) {
            case 0:
                setStyleTailwind('blue')
                break;
            case 1:
                setStyleTailwind('green')
                break;
            case 2:
                setStyleTailwind('orange')
                break;
            case 3:
                setStyleTailwind('red')
                break;
            case 4:
                setStyleTailwind('primary')
                break;
            case 5:
                setStyleTailwind('secondary')
                break;
            case 6:
                setStyleTailwind('gray')
                break;
            case 7:
                setStyleTailwind('stone')
                break;
            default:
        }
    }, [style])

    return (
        <div className='border-b border-cf-200 px-5 pl-0 flex justify-between bg-white'>
            <div className='flex py-5'>
                <div>
                    <div className={`w-[60px] h-[60px] rounded-full relative p-4 bg-${styleTailwind}-100`}>
                        {icon && <Icon nameIcon={icon} propsIcon={{ className: `w-full h-full text-${styleTailwind}-500` }} />}
                    </div>
                </div>
                <div className='py-1 flex flex-col px-5'>
                    <div className='font-bold text-base'>{title}</div>
                    {body && <div className='font-medium text-sm text-cf-300 mb-3 mt-2'>{body}</div>}
                    {!!resources.length && action !== 1 && (
                        action === 3 ?
                            <Link className='font-medium text-sm text-blue-600' href={`/expert/${resources[0].resource}/${link}`} >
                                مشاهده
                            </Link> :
                            <Link className='font-medium text-sm text-blue-600' href={`/expert/${resources[0].resource}/${link}`} >
                                مشاهده
                            </Link>
                    )}

                    <span className='font-normal text-xs text-cf-300 mt-4'>۲۸ شهریور ۱۴۰۱ ساعت ۱۸:۵۵</span>
                </div>
            </div>

            {action === 1 &&
                <Link href={`/expert/tickets/${resources[0].data}`} className='font-bold text-base text-blue-600 fcc px-5 border-r border-r-cf-200'>
                    پاسخ
                </Link>
            }
        </div>
    )
}

export default Notification