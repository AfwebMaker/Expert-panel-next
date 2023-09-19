import React from 'react'

function Button({ icon, title, type, disable }) {
  return (
    <button disabled={disable} type={type ? type : 'button'} className={`rounded-md w-full fcc text-white h-11 ${disable ? 'bg-gray-400' : 'bg-primary-500' }`}>
      <div>
        {icon}
      </div>
      <div className='mr-2 font-bold text-base'>{title}</div>
    </button>
  )
}

export default Button