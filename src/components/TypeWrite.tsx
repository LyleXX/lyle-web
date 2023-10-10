import styled from '@emotion/styled'
import React, { memo, useEffect, useRef } from 'react'

const TypeWrite = memo(() => {
  const textRef = useRef<HTMLDivElement>(null)
  // 最终版 封装 解决异步任务
  useEffect(() => {
    let timeId = null
    const str = [
      '你好 ,我是一名刚入坑不久的大三在校生。',
      '现在学习都是为了将来的工作。',
      '希望能够得到大家的鼓励，谢谢！',
    ]
    function writeText(t, delay = 200) {
      return new Promise((resolve, reject) => {
        timeId = setTimeout(() => {
          textRef.current.innerHTML = t // 显示当前字符串 t
          resolve('') // Promise 完成
        }, delay) // 延迟 delay 毫秒后执行
      })
    }

    async function main(str) {
      while (true) {
        // 无限循环
        for (let j = 0; j < str.length; j++) {
          // 写入
          for (let i = 0; i <= str[j].length; i++) {
            await writeText(str[j].substr(0, i)) // 显示当前字符串的前 i 个字符
          }
          // 回退
          // 回退前先等一秒
          await new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve('') // 等待 1000 毫秒后 Promise 完成
            }, 1000) // 等待 1000 毫秒
          })
          for (let i = str[j].length; i >= 0; i--) {
            await writeText(str[j].substr(0, i), 200) // 显示当前字符串的前 i 个字符，间隔 200 毫秒
          }
        }
      }
    }
    main(str)
    return () => {
      if (timeId) {
        clearTimeout(timeId)
      }
    }
  }, [textRef])
  return (
    <TypeWriteContainer className="mt-20">
      <span ref={textRef} className="text border-t3 text-t3"></span>
    </TypeWriteContainer>
  )
})

const TypeWriteContainer = styled.div`
  .text {
    /* 添加光标效果 */
    border-right: 2px solid;
    /* 添加光标闪烁效果 */
    animation: blink 0.5s step-end infinite;
    font-size: 32px;
    /* 设置字体大小 */
    font-weight: 700;
  }
  @keyframes blink {
    from,
    to {
      border-color: transparent;
      /* 透明边框颜色 */
    }

    50% {
      border-color: rgb(var(--t3) / var(--tw-border-opacity));
      /* 白色边框颜色 */
    }
  }
`

export default TypeWrite
