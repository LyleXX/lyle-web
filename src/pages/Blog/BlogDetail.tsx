import React, { memo } from 'react'
import MdPreview from 'components/MdPreview'

const BlogDetail = memo(() => {
  const markdown = `Here is some JavaScript code:

  ~~~js
  console.log('It works!')
  ~~~
  `
  return (
    <div className=" px-10 ">
      <MdPreview markdown={markdown} />
    </div>
  )
})

export default BlogDetail
