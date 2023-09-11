import React from 'react'

import DesktopNavigation from './_components/DesktopNavigation'

function RootLayout({ children }) {
    return (
        <div className='pt-5 pb-9 px-5'>
            <DesktopNavigation />
            {children}
        </div>
    )
}

export default RootLayout