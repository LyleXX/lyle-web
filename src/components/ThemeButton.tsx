import React, { memo } from 'react'
import { themeActions, selectTheme } from 'store/theme.slice'
import { useSelector, useDispatch } from 'react-redux'
import { ReactComponent as MoonIcon } from 'assets/svg/moon.svg'
import { ReactComponent as SunIcon } from 'assets/svg/sun.svg'
const ThemeButton = memo(() => {
  const dispatch = useDispatch()

  return (
    <div
      className={`
    bg-light-t3/20 text-light-t3 dark:bg-dark-t3/20 dark:text-dark-t3 flex-center flex  cursor-pointer rounded-full sq-32 ${
      useSelector(selectTheme) === 'light' ? 'active:text-[#FFD200]' : 'active:text-[#0173CC]'
    }
  `}
      onClick={() => dispatch(themeActions.setTheme())}
    >
      {useSelector(selectTheme) === 'light' ? (
        <SunIcon className="cursor-pointer sq-22" />
      ) : (
        // <img src={moonIcon} alt="" className="cursor-pointer sq-22" />
        <MoonIcon className="cursor-pointer sq-22" />
      )}
    </div>
  )
})

export default ThemeButton
