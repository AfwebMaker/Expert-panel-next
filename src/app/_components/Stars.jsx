import React from 'react'
//react icon
import { HiStar, HiOutlineStar } from 'react-icons/hi'

function Stars({ point }) {
  return (
    <div className='fcc flex-row-reverse mx-1'>
      {[0, 1, 2, 3, 4].map(index => (
        point - 1 < index ?
          <HiOutlineStar size={16} className='text-yellow-400' /> : <HiStar size={16} className='text-yellow-400' />
      ))}
    </div>
  )
}

export default Stars