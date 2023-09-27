'use client'

import React, { useState } from 'react'
//components
import NotificationHeader from '../_components/NotificationHeader'
import NotificationMain from '../_components/NotificationMain'

function page() {
  const [readAll, setReadAll] = useState(false)

  return (
    <div className="w-full min-h-[400px] h-[calc(100vh-280px)] md:h-[calc(100vh-454px)] lg:h-[calc(100vh-342px)] xl:h-[calc(100vh-152px)] rounded-lg bg-[#F8F9F9] flex flex-col items-center justify-start relative">
      <NotificationHeader readAll={readAll} setReadAll={setReadAll} />
      <NotificationMain readAll={readAll} />
    </div>
  )
}

export default page