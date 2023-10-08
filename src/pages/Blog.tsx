import React, { memo } from 'react'
import { ReactComponent as Plus } from 'assets/svg/plus.svg'

const Blog = memo(() => {
  return (
    <div className="mx-auto w-screen-pc px-10 text-t1">
      <div className="flex justify-end">
        <button className="btn btn-o btn-md flex items-center text-t3">
          <Plus className="mr-5 sq-14" />
          新增blog
        </button>
      </div>
    </div>
  )
})

export default Blog
