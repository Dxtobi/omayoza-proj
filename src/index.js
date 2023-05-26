import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/style.css' //custom styling
import './assets/css/input.css' //custom styling
import './assets/css/tailwind.css' //tailwind framework

import App from './app';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

