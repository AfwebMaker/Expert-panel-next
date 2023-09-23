import React from 'react'
//components
import NotificationHeader from '../_components/NotificationHeader'
import NotificationMain from '../_components/NotificationMain'

function page() {
  return (
    <div>
      <div className="w-[100%] h-[calc(100vh-280px)] rounded-lg bg-[#F8F9F9] flex flex-col items-center justify-start relative">
        <NotificationHeader />
        <NotificationMain />
      </div>
    </div>
  )
}

export default page