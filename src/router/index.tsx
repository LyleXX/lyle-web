import React from 'react'
import { Navigate } from 'react-router-dom'

const Home = React.lazy(() => import('../pages/Home'))
// import Home from "@/views/home"
const Blog = React.lazy(() => import('../pages/Blog/Blog'))
const BlogDetail = React.lazy(() => import('../pages/Blog/BlogDetail'))
const BlogAdd = React.lazy(() => import('../pages/Blog/BlogAdd'))
const NotFound = React.lazy(() => import('../pages/NotFound'))
const BlogUpdate = React.lazy(() => import('../pages/Blog/BlogUpdate'))
const isAuth = sessionStorage.getItem('token')

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
    element: isAuth ? <Blog /> : <Navigate to="/home" />,
  },
  {
    path: '/blog/:id',
    element: isAuth ? <BlogDetail /> : <Navigate to="/home" />,
  },
  {
    path: '/blog/add',
    element: isAuth ? <BlogAdd /> : <Navigate to="/home" />,
  },
  {
    path: '/blog/update/:id',
    element: isAuth ? <BlogUpdate /> : <Navigate to="/home" />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

export default routes
