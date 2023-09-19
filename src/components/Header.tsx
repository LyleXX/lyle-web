import React, { memo } from 'react'
import ThemeButton from 'components/ThemeButton'
const Header = memo(() => {
  return (
    <div className="bg-light-bb dark:bg-dark-bb sticky top-0 z-header">
      <div className="w-screen-pc bg-light-bb dark:bg-dark-bb mx-auto px-15">
        <div className="dark:border-dark flex h-90 items-center border-b px-10">
          <ThemeButton />
        </div>
      </div>
    </div>
  )
})

export default Header
