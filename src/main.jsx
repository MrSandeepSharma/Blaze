import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import Home from './Pages/Home.jsx'
import Heros from './Pages/Heros.jsx'
import Pricing from './Pages/Pricing.jsx'

import './index.css'

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "heros",
      element: <Heros />,
    },
    {
      path: "pricing",
      element: <Pricing />,
    },
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
