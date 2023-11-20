import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState, useRef } from 'react'
//react icons
import { HiOutlineSearch, HiFire, HiOutlineChevronLeft, HiSearchCircle, HiClipboardList, HiArrowUp } from 'react-icons/hi'
//scroll
import ScrollContainer from 'react-indiana-drag-scroll'
//services
import mainPageSearch from '@/services/category_kg_local/mainPageSearch'

function SearchBox({ mobile }) {
    const [activeSearchBox, setActiveSearchBox] = useState(false)
    const [searchData, setSearchData] = useState({})
    const inputRef = useRef(null)

    useEffect(() => {
        mainPageSearch('ا')
            .then((res) => {
                setSearchData(res.data.data)
            })
            .catch(() => {

            })
    }, [])

    let searchTimer;
    const searchHandler = (e) => {
        clearTimeout(searchTimer)
        searchTimer = setTimeout(() => {
            const param = e.target.value ? e.target.value : 'ا'
            mainPageSearch(param)
                .then((res) => {
                    setSearchData(res.data.data)
                })
                .catch(() => {

                })
        }, 500);
    }

    const blurHandler = () => {
        setTimeout(() => {
            setActiveSearchBox(false)
        }, 100);
    }

    const truncateText = (text, maxLength) => {
        if (text && text.length > maxLength) {
            return text.slice(0, maxLength) + '...'
        }
        return text
    }

    return (
        <div className={`relative z-50 transition-all justify-center items-center bg-white px-5 ${mobile ? 'lg:hidden flex w-full h-[78px]' : 'w-[550px] hidden lg:flex'}`}>
            <HiOutlineSearch size={20} className={`absolute right-8 ${!activeSearchBox ? 'text-cf-400' : 'text-primary-500'}`} />
            <input
                ref={inputRef}
                onFocus={() => { setActiveSearchBox(true) }}
                onBlur={blurHandler}
                onChange={searchHandler}
                className={`bg-gray-200 ${mobile ? 'h-[48px]' : 'h-[37px]'} w-full font-light text-sm rounded-md pr-12 focus:outline-0 `}
                type="text"
                placeholder='خدمت ساختمانی که به دنبال آن هستید را وارد کنید.'
            />

            {activeSearchBox &&
                <div className={`${mobile ? 'w-[calc(100vw-40px)] top-[90px]' : 'w-[510px] top-[130%]'} bg-gray-50 h-auto absolute rounded-lg p-5 shadow-2xl border border-gray-300`}>
                    <div>
                        <div className='flex items-center'>
                            <HiFire size={20} className='text-warning' />
                            <div className='mx-2 font-medium text-sm'>بیشترین جستجو شده ها</div>
                            <HiOutlineChevronLeft className='text-primary-500' size={16} />
                        </div>
                        <ScrollContainer className="scroll-container flex">
                            {searchData.categories.map((item) => (
                                <Link onClick={() => {inputRef.current.blur()}} href={`/categories/${item.slug}`} key={item.id} className='h-[60px] flex my-4 flex-shrink-0 ml-4'>
                                    <div className='ml-3 relative h-[60px] w-[60px] overflow-hidden rounded-md'>
                                        <Image
                                            src={item.mainPicture}
                                            quality={20}
                                            fill
                                            sizes='full'
                                            alt='services'
                                            className='object-cover w-full h-full'
                                        />
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <div className='font-bold text-xs py-1'>
                                            {truncateText(item.title, 20)}
                                        </div>
                                        <div className='font-medium text-xs flex py-1'>
                                            <span className='ml-1'>دسته بندی :</span>
                                            <div>{truncateText(item.descriptionHTML, 20)}</div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </ScrollContainer>
                    </div>
                    <div className='pt-5 pb-0 lg:pb-5'>
                        <div className='flex items-center'>
                            <HiSearchCircle size={20} className='text-primary-500' />
                            <div className='mx-2 font-medium text-sm'>بیشترین جستجو شده ها</div>
                        </div>
                        {searchData.jobs.slice(0, 4).map((item) => (
                            <Link onClick={() => {inputRef.current.blur()}} href={`/categories/${item.slug}`} key={item.id} className='h-11 flex my-5'>
                                <div className='ml-3'>
                                    <HiArrowUp size={18} className='rotate-45' />
                                </div>
                                <div className='h-full flex flex-col justify-between'>
                                    <div className='font-bold text-xs'>
                                        {truncateText(item.name, 20)}
                                    </div>
                                    <div className='font-medium text-xs flex'>
                                        <span className='ml-1'>دسته بندی :</span>
                                        <div>{truncateText(item.description_Main, 30)}</div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className='hidden lg:block'>
                        <div className='flex items-center'>
                            <HiClipboardList size={20} className='text-primary-500' />
                            <div className='mx-2 font-medium text-sm'>بیشترین جستجو شده ها</div>
                        </div>
                        <div className='w-full flex gap-2 flex-wrap mt-3'>
                            {searchData.tags.slice(0, 12).map((item) => (
                                <div key={item.id} className='px-2 py-1 border border-black text-xs font-bold rounded-md fcc whitespace-nowrap'>
                                    {item.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default SearchBox