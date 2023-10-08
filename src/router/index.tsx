import React from 'react'
import { Navigate } from 'react-router-dom'
const Home = React.lazy(() => import('../pages/Home'))
// import Home from "@/views/home"
const Blog = React.lazy(() => import('../pages/Blog'))
const NotFound = React.lazy(() => import('../pages/NotFound'))

const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

export default routes
