import React from 'react'
//components
import SubNavigationItem from './SubNavigationItem'
import Link from 'next/link'

function SubNavigation(props) {

  return (
    <div className='fixed z-20 w-full h-[calc(100vh-100px)] top-[100px] left-0  hidden items-start justify-center group-hover:flex' >
      <div onMouseEnter={() => {props.setSunNavIsActive(false)}} className='absolute w-full h-full backdrop-blur'></div>
      <div className='max-w-[1220px] w-[calc(100%-80px)] max-h-[432px] h-[90%] pt-8 z-20'>
        <div className='w-full h-full rounded-xl overflow-hidden boxShadowCustom'>
          <div className='w-full flex items-center justify-between px-8 h-[70px] border-gray-400 border-b bg-white'>
            <div className='h-full fcc'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_24_556)">
                  <path d="M13.1501 9.18754C13.5655 8.91036 14.0556 8.79231 14.5353 8.84611L19.9998 3.38008L16.9396 0.319824L11.4743 5.78585C11.5296 6.27149 11.407 6.76758 11.1187 7.18822L13.1501 9.18754Z" fill="#45B649" />
                  <path d="M3.61775 15.8445L3.41976 15.6465L2.38349 16.484L0.638184 19.2342L1.08497 19.681L3.83741 17.9357L4.6742 16.9024L4.47546 16.7014L7.95112 13.225L7.08743 12.3733L3.61775 15.8445Z" fill="#45B649" />
                  <path d="M8.37073 6.20632C8.77194 4.77182 8.40808 3.16847 7.28215 2.0403C6.15996 0.922593 4.57529 0.555751 3.14901 0.942766L5.56449 3.3575L4.93093 5.72292L2.56251 6.35649L0.147781 3.94325C-0.23774 5.36878 0.128355 6.95345 1.24831 8.07415C2.42205 9.24864 4.11356 9.59307 5.59289 9.11192L5.60633 9.12537L15.5425 19.0615C15.9354 19.4537 16.451 19.6525 16.9657 19.6525C17.4813 19.6525 17.9953 19.4537 18.3898 19.0615C19.175 18.2777 19.175 17.0039 18.3898 16.2142L8.37073 6.20632ZM17.1391 18.7238C16.7162 18.7238 16.3733 18.3794 16.3733 17.955C16.3733 17.5291 16.7162 17.1862 17.1391 17.1862C17.5649 17.1862 17.9094 17.5291 17.9094 17.955C17.9101 18.3794 17.5657 18.7238 17.1391 18.7238Z" fill="#45B649" />
                </g>
                <defs>
                  <clipPath id="clip0_24_556">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className='mr-4 text-xl'>خدمات ساختمانی</span>
            </div>
            <div>
              <Link onClick={() => {props.setSunNavIsActive(false)}} className='text-[#1B93D7] text-xs font-regular' href="">مشاهده این دسته بندی</Link>
            </div>
          </div>
          <div className='bg-white w-full max-h-[330px] h-[84%] overflow-hidden overflow-y-auto'>
            <div className='w-full flex items-center justify-between h-[330px] overflow-hidden overflow-y-auto py-5 px-20'>
              {props.subMenuData.map((items, i) => (
                <SubNavigationItem 
                  key={i}
                  items={items}
                  setSunNavIsActive={props.setSunNavIsActive}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubNavigation