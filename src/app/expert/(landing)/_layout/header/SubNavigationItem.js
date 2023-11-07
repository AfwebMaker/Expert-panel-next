import React from 'react'
import Link from 'next/link'

function SubNavigationItem({ items, setSunNavIsActive }) {
    return (
        <div className={`flex flex-col h-full`}>
            <Link onClick={() => { setSunNavIsActive(false) }} href={`/categories/${items.main.slug}`} className='text-color-font-3 text-sm'>{items.main.title}</Link>
            <div>
                <ul className='flex flex-col'>
                    {items.child.map((item, i) => (
                        <li key={item.main.id} className='my-3 text-xs hover:text-primary-500'>
                            <Link onClick={() => { setSunNavIsActive(false) }} href={`/categories/${items.main.slug}`}>
                                {item.main.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SubNavigationItem