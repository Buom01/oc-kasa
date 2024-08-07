import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.scss';
import reportWebVitals from './reportWebVitals';

import ErrorPage from "./routes/error-page";
import MainLayout, { loader as layoutLoader } from "./layouts/main";
import Home from "./routes/home";
import Accommodation from './routes/accommodation';
import About from './routes/about';

import accommodationLoader from './loaders/accommodation';


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      loader: layoutLoader,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/accommodation/:id",
          element: <Accommodation />,
          loader: accommodationLoader
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider {...{router}} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
