import React, { memo, useEffect } from 'react'
import styled from '@emotion/styled'
import World from './ts/world/Word'

// earth-canvas

const Earth = memo((props) => {
  useEffect(() => {
    const dom: HTMLElement = document.querySelector('#earth-canvas')
    new World({
      dom,
    })
  })
  return (
    <EarthContainer id="three-earth">
      <div id="loading">
        <div className="sk-chase">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
        </div>
        <div>加载资源中...</div>
      </div>
      <div id="html2canvas" className="css3d-wapper">
        <div className="fire-div"></div>
      </div>
      <div id="earth-canvas"></div>
    </EarthContainer>
  )
})

const EarthContainer = styled.div`
  html,
  body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }
  body {
    overflow: hidden;
    position: relative;
  }
  h1,
  h2 {
    position: absolute;
    color: #fff;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20vh;
    pointer-events: none;
  }
  h2 {
    pointer-events: all;
    padding-top: 25vh;
  }
  h2 a {
    color: rgb(19, 22, 226);
    font-size: 30px;
  }

  #earth-canvas {
    height: 100%;
    width: 100%;
    background: #010826;
  }

  #html2canvas {
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0);
  }
  .css3d-wapper {
    pointer-events: none;
    color: #fff;
  }

  .css3d-wapper .fire-div {
    font-size: 20px;
    font-weight: 600;
    border-top: 3px solid #0cd1eb;
    padding: 6px 8px;
    min-width: 50px;
    background: rgba(40, 108, 181, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #loading {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    background: #010826;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #409eff;
    font-size: 15px;
    letter-spacing: 2px;
    overflow: hidden;
  }
  @keyframes zoomOut {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
      transform: scale3d(1.3, 1.3, 1.3);
    }
    to {
      opacity: 0;
    }
  }
  #loading.out {
    animation: zoomOut 0.5s linear forwards;
    pointer-events: none;
  }
  #loading.out .sk-chase-dot,
  #loading.out .sk-chase {
    animation: null;
  }
  .sk-chase {
    margin-bottom: 20px;
    width: 40px;
    height: 40px;
    position: relative;
    animation: sk-chase 2.5s infinite linear both;
  }

  .sk-chase-dot {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    animation: sk-chase-dot 2s infinite ease-in-out both;
  }

  .sk-chase-dot::before {
    content: '';
    display: block;
    width: 20%;
    height: 20%;
    background-color: #409eff;
    border-radius: 100%;
    animation: sk-chase-dot-before 2s infinite ease-in-out both;
  }
  .sk-chase-dot:nth-child(1) {
    animation-delay: -1.1s;
  }
  .sk-chase-dot:nth-child(2) {
    animation-delay: -1s;
  }
  .sk-chase-dot:nth-child(3) {
    animation-delay: -0.9s;
  }
  .sk-chase-dot:nth-child(4) {
    animation-delay: -0.8s;
  }
  .sk-chase-dot:nth-child(5) {
    animation-delay: -0.7s;
  }
  .sk-chase-dot:nth-child(6) {
    animation-delay: -0.6s;
  }
  .sk-chase-dot:nth-child(1):before {
    animation-delay: -1.1s;
  }
  .sk-chase-dot:nth-child(2):before {
    animation-delay: -1s;
  }
  .sk-chase-dot:nth-child(3):before {
    animation-delay: -0.9s;
  }
  .sk-chase-dot:nth-child(4):before {
    animation-delay: -0.8s;
  }
  .sk-chase-dot:nth-child(5):before {
    animation-delay: -0.7s;
  }
  .sk-chase-dot:nth-child(6):before {
    animation-delay: -0.6s;
  }

  .sk-chase-dot .sk-chase-dot:nth-child(2) {
    animation-delay: -1s;
  }
  .sk-chase-dot:nth-child(3) {
    animation-delay: -0.9s;
  }
  .sk-chase-dot:nth-child(4) {
    animation-delay: -0.8s;
  }
  .sk-chase-dot:nth-child(5) {
    animation-delay: -0.7s;
  }
  .sk-chase-dot:nth-child(6) {
    animation-delay: -0.6s;
  }
  .sk-chase-dot:nth-child(1):before {
    animation-delay: -1.1s;
  }
  .sk-chase-dot:nth-child(2):before {
    animation-delay: -1s;
  }
  .sk-chase-dot:nth-child(3):before {
    animation-delay: -0.9s;
  }
  .sk-chase-dot:nth-child(4):before {
    animation-delay: -0.8s;
  }
  .sk-chase-dot:nth-child(5):before {
    animation-delay: -0.7s;
  }
  .sk-chase-dot:nth-child(6):before {
    animation-delay: -0.6s;
  }

  @keyframes sk-chase {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes sk-chase-dot {
    80%,
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes sk-chase-dot-before {
    50% {
      transform: scale(0.4);
    }
    100%,
    0% {
      transform: scale(1);
    }
  }
`

export default Earth
