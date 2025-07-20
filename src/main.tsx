import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'


//pages

import DashboardIndex from './pages/dashboard-pages/DashboardPage';

const router = createBrowserRouter([

  {
    path: '/',
    element: <DashboardIndex />,

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
