import Header from 'components/Header'
import React, { memo } from 'react'
import { useEffect } from 'react'
import { selectTheme } from 'store/theme.slice'
import { useSelector } from 'react-redux'
import { useRoutes } from 'react-router'
import routes from 'router'

const App = memo(() => {
  const theme = useSelector(selectTheme)
  useEffect(() => {
    document.querySelector('html').className = theme
  }, [theme])
  return (
    <div className=" min-h-[100vh] bg-bb ">
      <Header />
      <div>{useRoutes(routes)}</div>
    </div>
  )
})

export default App
