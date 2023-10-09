import React, { memo } from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

const LoadPage = memo(() => {
  const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />
  return (
    <div className=" mt-[45vh] flex justify-center">
      <Spin indicator={antIcon} />
    </div>
  )
})

export default LoadPage
