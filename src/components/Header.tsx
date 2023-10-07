import React, { memo } from 'react'
import ThemeButton from 'components/ThemeButton'
import { ReactComponent as Fries } from 'assets/svg/fries.svg'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const Header = memo(() => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  function jumpHome() {
    navigate('/home')
  }
  function jumpBlog() {
    navigate('/blog')
  }
  return (
    <div className="sticky  top-0 z-header bg-bb">
      <div className="mx-auto w-screen-pc  bg-bb px-15">
        <div className="flex h-90 items-center justify-between border-b px-10 ">
          <div className="flex items-center space-x-20">
            <div
              className={`${
                pathname === '/home' ? 'bg-p/5 text-pt  dark:bg-p' : 'text-t3 hover:bg-t3/10'
              } mx-3
              flex cursor-pointer items-center rounded-full px-20
              py-7 font-serif text-19`}
              onClick={jumpHome}
            >
              Home
            </div>
            <div
              className={`${
                pathname === '/blog' ? 'bg-p/5 text-pt   dark:bg-p' : 'text-t3 hover:bg-t3/10'
              } mx-3
              flex cursor-pointer items-center rounded-full px-20
              py-7 font-serif text-19`}
              onClick={jumpBlog}
            >
              Blog
            </div>
          </div>
          <ThemeButton />
        </div>
      </div>
    </div>
  )
})

export default Header
