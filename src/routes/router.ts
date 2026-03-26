import HomePage from '@/pages/homepage/HomePage'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  // {
  //   Component: AppLayout,
  // },
])
