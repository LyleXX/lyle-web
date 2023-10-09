// import HomeCalendar from 'components/HomeCalendar'
import React, { memo, useState } from 'react'
import Swiper from 'components/Swiper'

const Home = memo(() => {
  // const [activeDate, setActiveDate] = useState<Date | undefined>()
  return (
    <div className="mx-auto w-screen-pc text-t1">
      <div className="flex justify-end">
        <iframe
          title="music"
          width={280}
          height={86}
          src="//music.163.com/outchain/player?type=2&id=1942594143&auto=1&height=66"
          allow="autoplay"
        ></iframe>
      </div>
      <Swiper />
      {/* <HomeCalendar activeDate={activeDate} changeActiveDate={(val) => setActiveDate(val)} /> */}
    </div>
  )
})

export default Home
