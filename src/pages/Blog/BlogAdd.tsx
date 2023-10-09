import React, { memo } from 'react'
import MdEditor from 'components/MdEditor'

const BlogAdd = memo(() => {
  return (
    <div className="mx-auto w-screen-pc px-10 text-t1">
      <MdEditor />
    </div>
  )
})

export default BlogAdd
