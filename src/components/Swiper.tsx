import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import styled from '@emotion/styled'
import swiper1 from 'assets/images/swiper-1.jpg'
import swiper2 from 'assets/images/swiper-2.jpg'
import swiper3 from 'assets/images/swiper-3.jpg'
import swiper4 from 'assets/images/swiper-4.jpg'
// import { ReactComponent as ChevronLeft } from 'assets/svg/chevron-left.svg'
// import { ReactComponent as ChevronRight } from 'assets/svg/chevron-right.svg'

export default function App() {
  const interval = useRef(null)

  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    dragStarted() {
      resetInterval()
    },
    dragEnded() {
      startSliderInterval()
    },
  })
  const resetInterval = useCallback(() => {
    clearInterval(interval.current)
  }, [interval])

  const startSliderInterval = useCallback(() => {
    resetInterval()
    interval.current = setInterval(() => {
      instanceRef.current?.next()
    }, 3000)
  }, [interval, resetInterval, instanceRef])
  const SwiperList = [swiper1, swiper2, swiper3, swiper4]
  useEffect(() => {
    startSliderInterval()
    return () => {
      resetInterval()
    }
  }, [startSliderInterval, resetInterval])
  return (
    <SwiperContainer>
      <div className="navigation-wrapper ">
        <div ref={sliderRef} className="keen-slider rounded-30">
          {SwiperList.map((item, index) => {
            return (
              <div className="keen-slider__slide " key={index}>
                <img src={item} alt="" />
              </div>
            )
          })}
        </div>
        {/* <ChevronLeft
          className="absolute left-10 top-1/2  -translate-y-1/2 transform cursor-pointer rounded-full bg-p/50 p-5 sq-30"
          onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
        />
        <ChevronRight
          className="absolute right-10 top-1/2  -translate-y-1/2 transform cursor-pointer rounded-full bg-p/50 p-5 sq-30"
          onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
        /> */}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {Array.from(
            { length: instanceRef.current.track.details.slides.length },
            (_, index) => index,
          ).map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={'dot' + (currentSlide === idx ? ' active' : '')}
              ></button>
            )
          })}
        </div>
      )}
    </SwiperContainer>
  )
}

const SwiperContainer = styled.div`
  .navigation-wrapper {
    position: relative;
  }

  .dots {
    display: flex;
    padding: 10px 0;
    justify-content: center;
  }

  .dot {
    border: none;
    width: 10px;
    height: 10px;
    background: #c5c5c5;
    border-radius: 50%;
    margin: 0 5px;
    padding: 5px;
    cursor: pointer;
  }

  .dot:focus {
    outline: none;
  }

  .dot.active {
    background: #420040;
  }
`
