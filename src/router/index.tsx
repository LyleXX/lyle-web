import React from 'react'
import { Navigate } from 'react-router-dom'
const Home = React.lazy(() => import('../pages/Home'))
// import Home from "@/views/home"
const Blog = React.lazy(() => import('../pages/Blog/Blog'))
const BlogDetail = React.lazy(() => import('../pages/Blog/BlogDetail'))
const BlogAdd = React.lazy(() => import('../pages/Blog/BlogAdd'))
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
    path: '/blog/:id',
    element: <BlogDetail />,
  },
  {
    path: '/blog/add',
    element: <BlogAdd />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

export default routes
