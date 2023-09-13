import React from 'react'

function Button({ icon, title, bg, type }) {
  return (
    <button type={type ? type : 'button'} className={`rounded-md w-full fcc text-white h-11 ${bg ? '' : 'bg-primary-500'}`}>
      <div>
        {icon}
      </div>
      <div className='mr-2 font-bold text-base'>{title}</div>
    </button>
  )
}

export default Button