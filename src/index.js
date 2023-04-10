import React from 'react';
import ReactDOM from 'react-dom/client';
import AppLayout from './AppLayout';
import { RouterProvider } from 'react-router-dom';
import {AppRouter} from './AppLayout'
import ApiComponent from './components/api_practice/ApiComponent';
import PracticeComponent from './components/practice/PracticeComponent';
import SendMessage from './components/practice/SendMessage';
import HideShow from './components/practice/HideShow';
import NestNPrevPage from './components/practice/NextNPrevPage';
import Footer from './components/footer/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={AppRouter} /> */}
    {/* <ApiComponent /> */}
    {/* <SendMessage /> */}
    {/* <HideShow /> */}
    <Footer />
    {/* <NestNPrevPage /> */}
  </React.StrictMode>
);
