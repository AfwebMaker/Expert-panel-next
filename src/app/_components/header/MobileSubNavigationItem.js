import React from 'react'
import Link from 'next/link'

function MobileSubNavigationItem({ item, setHamburgerMenuIsActive }) {
    return (
        <li className='px-10 flex justify-start items-center h-[45px] cursor-pointer w-full'>
            <Link onClick={() => { setHamburgerMenuIsActive(false) }} className='h-full w-full flex justify-start items-center' href={`/categories/${item.slug}/`}>
                {item.name}
            </Link>
        </li>
    )
}

export default MobileSubNavigationItem