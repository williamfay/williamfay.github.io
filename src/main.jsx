import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './about-me';
import Projects from './projects';
import Hobbies from './hobbies';
import History from './work-history';
import Index from './index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:
      [
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'projects',
          element: <Projects />,
        },
        {
          path: 'hobbies',
          element: <Hobbies />,
        },
        {
          path: 'history',
          element: <History />,
        },
        {
          index: true,
          element: <Index />,
        },
      ]
  },
  // Add more page routes below
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
