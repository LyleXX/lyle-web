import React, { memo } from 'react'
import ThemeButton from 'components/ThemeButton'
const Header = memo(() => {
  return (
    <div className="bg-bb  sticky top-0 z-header">
      <div className="bg-bb mx-auto  w-screen-pc px-15">
        <div className="flex h-90 items-center border-b px-10 ">
          <ThemeButton />
        </div>
      </div>
    </div>
  )
})

export default Header
