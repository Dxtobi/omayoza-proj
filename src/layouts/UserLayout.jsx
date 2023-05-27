import React from 'react'
import { Outlet } from 'react-router-dom'

function UserLayout() {
    return (
        <div>
            <div className='bg-sky-200'>Sidebar Component</div>
            <div className='bg-tea'>HeaderComponent</div>
            <div>
                {<Outlet />}
            </div>
            <p>FOOTER COMPONNTS</p>
        </div>
    )
}

export default UserLayout