import Header from 'components/Header'
import React, { memo } from 'react'
import { useEffect } from 'react'
import { selectTheme } from 'store/theme.slice'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from 'pages/Home'

const App = memo(() => {
  const theme = useSelector(selectTheme)
  useEffect(() => {
    document.querySelector('html').className = theme
  }, [theme])
  return (
    <div className=" h-[100vh] bg-bb">
      <Header />
      <Router>
        <Routes>
          <Route path={'/home'} element={<Home />} />
        </Routes>
        <Navigate to={'/home'} />
      </Router>
    </div>
  )
})

export default App
