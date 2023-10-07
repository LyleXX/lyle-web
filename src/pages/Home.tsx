import HomeCalendar from 'components/HomeCalendar'
import React, { memo, useState } from 'react'

const Home = memo(() => {
  const [activeDate, setActiveDate] = useState<Date | undefined>()
  return (
    <div className="text-t1 mx-auto w-screen-pc">
      home
      <HomeCalendar activeDate={activeDate} changeActiveDate={(val) => setActiveDate(val)} />
    </div>
  )
})

export default Home
