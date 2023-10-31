// import HomeCalendar from 'components/HomeCalendar'
import React, { memo, useState } from 'react'
import Swiper from 'components/Swiper'
import { ReactComponent as MusicIcon } from 'assets/svg/music.svg'
import TypeWrite from 'components/TypeWrite'
import Keyboard from 'components/keyborad'
import LoginModal from 'components/LoginModal'

const Home = memo(() => {
  // const [activeDate, setActiveDate] = useState<Date | undefined>()
  const [modalShow, setModalShow] = useState(false)
  return (
    <div className=" ">
      <div className="flex items-center justify-between">
        <MusicIcon className="sq-20" />
        <iframe
          title="music"
          width={280}
          height={86}
          src="//music.163.com/outchain/player?type=2&id=1942594143&auto=1&height=66"
          allow="autoplay"
        ></iframe>
      </div>
      <Swiper />
      <TypeWrite />
      <Keyboard setModalShow={setModalShow} />
      <LoginModal modalShow={modalShow} setModalShow={setModalShow} />
      {/* <HomeCalendar activeDate={activeDate} changeActiveDate={(val) => setActiveDate(val)} /> */}
    </div>
  )
})

export default Home
