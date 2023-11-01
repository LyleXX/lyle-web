import React from 'react'
import { Navigate } from 'react-router-dom'
import { store } from 'store'
const Home = React.lazy(() => import('../pages/Home'))
// import Home from "@/views/home"
const Blog = React.lazy(() => import('../pages/Blog/Blog'))
const BlogDetail = React.lazy(() => import('../pages/Blog/BlogDetail'))
const BlogAdd = React.lazy(() => import('../pages/Blog/BlogAdd'))
const NotFound = React.lazy(() => import('../pages/NotFound'))
const isAuth = store.getState().auth.token

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
    element: isAuth ? <BlogAdd /> : <Navigate to="/home" />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

export default routes
