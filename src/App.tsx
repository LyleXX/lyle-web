import Header from 'components/Header'
import React, { memo } from 'react'
import { useEffect } from 'react'
import { selectTheme } from 'store/theme.slice'
import { useSelector } from 'react-redux'
import { useRoutes } from 'react-router'
import routes from 'router'
import Footer from 'components/Footer'

const App = memo(() => {
  const theme = useSelector(selectTheme)
  useEffect(() => {
    document.querySelector('html').className = theme
  }, [theme])
  return (
    <div className=" flex h-[100vh] flex-col  bg-bb ">
      <Header />
      <div className="flex-1 overflow-y-scroll">{useRoutes(routes)}</div>
      <Footer />
    </div>
  )
})

export default App
