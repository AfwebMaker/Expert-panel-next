'use client'

import React, { useState, useEffect } from 'react';
//react icons
import { HiOutlineNewspaper } from 'react-icons/hi'

function StickyElement() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        console.log(window.scrollY)
        const handleScroll = () => {
            console.log(window.scrollY)
            if (window.scrollY > 300) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='flex w-full items-center justify-between bg-white font-bold px-5 border-y border-gray-400 shadow-lg'>
            <div className='h-[71px] flex items-center text-lg text-cf-300'>
                <HiOutlineNewspaper size={24} />
                <div className='mr-2'>
                    خوانده شده ها
                </div>
            </div>
        </div>
    );
}

export default StickyElement;