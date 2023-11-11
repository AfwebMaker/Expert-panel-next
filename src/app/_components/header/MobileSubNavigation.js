import React from 'react'
//react icon
import { HiOutlineChevronLeft } from 'react-icons/hi'
import MobileSubNavigationItem from './MobileSubNavigationItem'

function MobileSubNavigation({ items, subNavClickHandler, id, setHamburgerMenuIsActive }) {
    return (
        <>
            <li onClick={() => { subNavClickHandler(id) }} className='navItem px-4 flex justify-between items-center h-[45px] cursor-pointer relative mr-[26px] gap-3'>
                <div className='w-[1.5px] h-3 bg-primary-500 rounded-full'></div>
                {items.main.title}
                <div className='transition-all arrowItem flex items-center'>
                    <HiOutlineChevronLeft className='text-primary-500' size={16} />
                </div>
            </li>
            <ul className='mobileSubNav w-full justify-center items-start hidden flex-col pr-3'>
                {items.child.map((item) => (
                    <MobileSubNavigationItem
                        key={item.main.id}
                        item={item.main}
                        setHamburgerMenuIsActive={setHamburgerMenuIsActive}
                    />
                ))}
            </ul>
        </>
    )
}

export default MobileSubNavigation