import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


import Home from './pages/Home';

import About from './pages/About';
import Learn from './pages/Learn';
import Quest from './pages/Quest';
import Help from './pages/Help';
import Faqs from './pages/Faqs';
import Markets from './pages/Markets';
import Careers from './pages/Careers';
import Signup from './pages/auth_pages/Signup';
import Login from './components/auth/Login';
import Dashboard from './pages/dashboard/Index';
import NotFoundPage from './components/NotFound';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Setting from './pages/dashboard/pages/Setting';
import Investment from './pages/dashboard/pages/Investment';
import LearnComp from './pages/dashboard/pages/Learn';
import DashboardComp from './pages/dashboard/pages/Dashboard';
import HelpComp from './pages/dashboard/pages/help';

const children = [
   
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/learn-with-omazoya",
      element: <Learn />,
    },
    {
      path: "/quests",
      element: <Quest />,
    },
    {
      path: "/help",
      element: <Help />,
    },
    {
      path: "/faqs",
      element: <Faqs />,
    },
    {
      path: "/markets",
      element: <Markets />,
    },
    {
      path: "/careers",
      element: <Careers />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    
    
    
    
   
   
  ]

const App = () => {
  return (
      <Router>
          <Header />
          <Routes>
          
              
                {
                    children.map((e, i) => (
                        <Route key={(i+e.path).toString()} path={e.path} element={e.element} />
                    ))
              }
              <Route path="/dashboard" element={<Dashboard />}>
                  <Route path="/dashboard/" element={<Investment />} />
                  <Route path="/dashboard/settings" element={<Setting />} />
                  <Route path="/dashboard/help" element={<HelpComp />} />
                  <Route path="/dashboard/learn" element={<LearnComp />} />
                  <Route path="/dashboard/index" element={<DashboardComp />} />
                  
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          <Footer />
    </Router>
  );
};

export default App;
