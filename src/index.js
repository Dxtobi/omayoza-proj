import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/style.css' //custom styling
import './assets/css/tailwind.css' //tailwind framework
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './pages/Home';
import Layout from './layouts/Layout';
import About from './pages/About';
import Learn from './pages/Learn';
import Quest from './pages/Quest';
import Help from './pages/Help';
import Faqs from './pages/Faqs';
import Markets from './pages/Markets';
import Careers from './pages/Careers';


const router = createBrowserRouter([
  {
    element : <Layout />,
    children : [
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
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

