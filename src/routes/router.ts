import HomePage from '@/pages/homepage/HomePage'
import LoginPage from '@/pages/LoginPage'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  {
        path: '/login',
        Component: LoginPage,
      },
])
