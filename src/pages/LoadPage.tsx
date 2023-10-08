import React, { memo } from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

const LoadPage = memo(() => {
  const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />
  return (
    <div className="mx-auto mt-[45vh] flex w-screen-pc justify-center">
      <Spin indicator={antIcon} />
    </div>
  )
})

export default LoadPage
