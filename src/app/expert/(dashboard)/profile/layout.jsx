import React from 'react'

import DesktopNavigation from './_components/DesktopNavigation'

function RootLayout({ children }) {
    return (
        <div className='flex flex-col xl:flex-row xl:justify-center pt-5 pb-9 px-5 md:px-28 lg:px-5'>
            <DesktopNavigation />
            {children}
        </div>
    )
}

export default RootLayout