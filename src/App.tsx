import React from 'react';
import logo from './logo.svg';
import {FC, lazy, Suspense} from 'react';
import './App.css';
import {Navigate } from 'react-router-dom';
import {Layout} from './Layout';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Loading from './utils/Loading';

const HomePage = lazy(() => import('./pages/Home/HomePage'));
// const About = lazy(() => import('./pages/About'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      // {
      //   path: "/about",
      //   element: <About />,
      // },
    ]
  },
  
]);


const  App: FC = () => {
  return (
    <Suspense fallback={<Loading/>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
