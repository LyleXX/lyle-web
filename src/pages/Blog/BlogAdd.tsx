import React, { memo, useRef, useState } from 'react'
import MdEditor from 'components/MdEditor'
import { createBlog } from 'service/blog'
import { useNavigate } from 'react-router-dom'

const BlogAdd = memo(() => {
  const vditorRef = useRef(null)
  const [title, setTitle] = useState('')
  const navigate = useNavigate()
  const create = () => {
    createBlog({ title, content: vditorRef.current.getValue() }).then((res) => {
      if (res.code === 0) {
        vditorRef.current.destroy()
        navigate('/blog')
      }
    })
  }

  return (
    <div className=" px-10 ">
      <input
        type="text"
        placeholder={'请输入标题'}
        className="input btn-o -p mt-10"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
        }}
      />
      <MdEditor vditorRef={vditorRef} />
      <div className="mt-10 flex justify-end">
        <button className="btn btn-o btn-md flex items-center text-t3" onClick={create}>
          新增blog
        </button>
      </div>
    </div>
  )
})

export default BlogAdd
