import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Root/Root.jsx';
import Home from './components/Pages/Home.jsx';
import Apps from './components/Pages/Apps.jsx';
import Installation from './components/Pages/Installation.jsx';
import Loading from './components/Pages/Loading.jsx';
import Error from './components/Pages/Error.jsx';
import AppDetails from './components/Pages/AppDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('/public/homeApps.json'),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: '/apps',
        Component: Apps,
        loader: () => fetch('/public/AllApps.json'),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: '/appDetails/:id',
        element: <AppDetails></AppDetails>
      },
      {
        path: '/installation',
        Component: Installation
      },
    ]
  },
  {
    path: '/*',
    element: <Error></Error>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
