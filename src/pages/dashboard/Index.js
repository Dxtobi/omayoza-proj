import React, { useState } from 'react'
import { Outlet, Route, Routes, useLocation  } from 'react-router-dom';

import Sidebar from '../../components/dashboard/Sidebar';
import Investment from './pages/Investment';
import Help from './pages/help';
import Learn from './pages/Learn';
import Setting from './pages/Setting';
import MainDashboard from './pages/Dashboard'; 


const Dashboard = () => {
  
    const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith('/dashboard');

    const [state, setState] = useState({
       
        loading: false,
        username:'Full Name',
        _links: [
            {
                name: 'Dashboard',
                link:'/dashboard/index'
            },
            {
                name: 'Help',
                link:'/dashboard/help'
            },
            {
                name: 'Learn with Omayoza',
                link:'/dashboard/learn'
            },
            {
                name: 'Settings',
                link:'/dashboard/settings'
            },
            {
                name: 'Logout',
                link:'/dashboard/logout'
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
      <section className='flex gap-4'>
              <Sidebar urls={state._links} username={state.username} />
              <div className='w-[80%] px-10'>
              
                    <Outlet />
            
                  {/*
                      
                      <Routes>
                          <Route path={`/`} exec element={<Investment />} />
                          <Route path={`/dashboard/index`} element={<MainDashboard />} />
                          <Route path={`/dashboard/settings`} element={<Setting />} />
                          <Route path={`/dashboard/help`} element={<Help />} />
                          <Route path={`/dashboard/learn`} element={<Learn />} />
                      </Routes>
                  */}
              </div>
      </section>
    </>
  )
}

export default Dashboard