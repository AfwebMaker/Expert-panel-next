import React from 'react'

import DesktopNavigation from './_components/DesktopNavigation'

function RootLayout({ children }) {
    return (
        <div className='w-full fcc'>
            <div className='flex w-full max-w-[1605px] flex-col xl:flex-row xl:justify-center py-5 px-5 md:px-28 lg:px-5 xl:items-start'>
                <DesktopNavigation />
                {children}
            </div>
        </div>
    )
}

export default RootLayout