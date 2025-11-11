import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
 import Root from './Root/Root.jsx';
import Home from './components/Pages/Home.jsx';
import Apps from './components/Pages/Apps.jsx';
import Installation from './components/Pages/Installation.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {
      index: true,
      Component: Home,
      loader: ()=> fetch('/public/homeApps.json')
    },
    {
      path:'/apps',
      Component:Apps
    },
    {
      path:'/installation',
      Component: Installation
    }
  ]
   },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
