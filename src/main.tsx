import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import Navbar from './components/Navbar.tsx'

import Welcome from './pages/Welcome.tsx'
import Main from './pages/Main.tsx'

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Main />
      </>
    ),
  },
  {
    path: "/welcome",
    element: (
      <>
        <Navbar />
        <Welcome />
      </>
    ),
  },
]); 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
)
