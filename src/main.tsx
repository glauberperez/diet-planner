import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, BrowserRouter, Routes , Route} from "react-router-dom";

import Welcome from './pages/Welcome.tsx'
import Navbar from './components/Navbar.tsx'

import './index.css'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>,
)
