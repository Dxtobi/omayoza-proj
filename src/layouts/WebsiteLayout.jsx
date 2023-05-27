import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function WebsiteLayout() {
    return (
        <div>
            <Header />

            <div className='w-full'>
                {<Outlet />}
            </div>
            <Footer />
        </div>
    )
}

export default WebsiteLayout