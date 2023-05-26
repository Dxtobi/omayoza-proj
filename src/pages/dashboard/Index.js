import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom';

import Sidebar from '../../components/dashboard/Sidebar';



const Dashboard = () => {

    const location = useLocation();
    const isDashboardRoute = location.pathname.startsWith('/dashboard');

    const [state, setState] = useState({

        loading: false,
        username: 'Full Name',
        _links: [
            {
                name: 'Dashboard',
                link: '/dashboard/index'
            },
            {
                name: 'Help',
                link: '/dashboard/help'
            },
            {
                name: 'Learn with Omayoza',
                link: '/dashboard/learn'
            },
            {
                name: 'Settings',
                link: '/dashboard/settings'
            },
            {
                name: 'Logout',
                link: '/dashboard/logout'
            },

        ]
        // Add more state variables as needed
    });


    if (!isDashboardRoute) {
        // Handle case when not on a dashboard route
        return null;
    }


    return (
        <>
            <section className="flex flex-col md:flex-row gap-4">
                <div className="hidden w-[20%] md:block ">
                    <Sidebar urls={state._links} username={state.username} />
                </div>
                <div className="w-full md:w-4/5 px-3 md:px-10">
                    <Outlet />
                </div>
            </section>
        </>
    )
}

export default Dashboard