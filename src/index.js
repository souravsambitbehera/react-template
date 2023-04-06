import React from 'react';
import ReactDOM from 'react-dom/client';
import AppLayout from './AppLayout';
import { RouterProvider } from 'react-router-dom';
import {AppRouter} from './AppLayout'
import ApiComponent from './components/api_practice/ApiComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={AppRouter} /> */}
    <ApiComponent />
  </React.StrictMode>
);
