import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CalendarApp } from './CalendarApp.jsx';
import './styles.css';

const router = createBrowserRouter([
  {
    path: '*',
    element: <CalendarApp />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
