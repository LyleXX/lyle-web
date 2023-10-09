import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import styled from '@emotion/styled'
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

  useEffect(() => {
    startSliderInterval()
    return () => {
      resetInterval()
    }
  }, [startSliderInterval, resetInterval])
  return (
    <SwiperContainer>
      <div className="navigation-wrapper ">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">1</div>
          <div className="keen-slider__slide number-slide2">2</div>
          <div className="keen-slider__slide number-slide3">3</div>
          <div className="keen-slider__slide number-slide4">4</div>
          <div className="keen-slider__slide number-slide5">5</div>
          <div className="keen-slider__slide number-slide6">6</div>
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
  [class^='number-slide'],
  [class*=' number-slide'] {
    background: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: #fff;
    font-weight: 500;
    height: 300px;
    max-height: 100vh;
  }

  .number-slide1 {
    background: rgb(64, 175, 255);
    background: linear-gradient(128deg, rgba(64, 175, 255, 1) 0%, rgba(63, 97, 255, 1) 100%);
  }

  .number-slide2 {
    background: rgb(255, 75, 64);
    background: linear-gradient(128deg, rgba(255, 154, 63, 1) 0%, rgba(255, 75, 64, 1) 100%);
  }

  .number-slide3 {
    background: rgb(182, 255, 64);
    background: linear-gradient(128deg, rgba(182, 255, 64, 1) 0%, rgba(63, 255, 71, 1) 100%);
    background: linear-gradient(128deg, rgba(189, 255, 83, 1) 0%, rgba(43, 250, 82, 1) 100%);
  }

  .number-slide4 {
    background: rgb(64, 255, 242);
    background: linear-gradient(128deg, rgba(64, 255, 242, 1) 0%, rgba(63, 188, 255, 1) 100%);
  }

  .number-slide5 {
    background: rgb(255, 64, 156);
    background: linear-gradient(128deg, rgba(255, 64, 156, 1) 0%, rgba(255, 63, 63, 1) 100%);
  }

  .number-slide6 {
    background: rgb(64, 76, 255);
    background: linear-gradient(128deg, rgba(64, 76, 255, 1) 0%, rgba(174, 63, 255, 1) 100%);
  }
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
