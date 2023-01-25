import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/about-me';
import Projects from './components/projects';
import History from './components/work-history';
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
