import Header from 'components/Header'
import React, { memo } from 'react'
import { useEffect } from 'react'
import { selectTheme } from 'store/theme.slice'
import { useSelector } from 'react-redux'

const App = memo(() => {
  const theme = useSelector(selectTheme)
  useEffect(() => {
    document.querySelector('html').className = theme
  }, [theme])
  return (
    <div className="bg-bb h-[100vh]">
      <Header />
    </div>
  )
})

export default App
