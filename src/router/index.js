import React from 'react'
import { Navigate } from 'react-router-dom'

const Home = React.lazy(() => import('@/views/Home/Home.jsx'))
const Detail = React.lazy(() => import('@/views/Detail/Detail.jsx'))

const routes = [
  { path: '/', element: <Navigate to='/home'/> },
  { path: '/home', element: <Home /> },
  { path: '/detail', element: <Detail /> }
]

export default routes