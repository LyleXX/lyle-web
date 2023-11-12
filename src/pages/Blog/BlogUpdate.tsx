import React, { memo, useRef, useState, useEffect } from 'react'
import MdEditor from 'components/MdEditor'
import { useParams, useNavigate } from 'react-router-dom'
import { getBlogById, updateBlog } from 'service/blog'

const BlogAdd = memo(() => {
  const vditorRef = useRef(null)
  const navigate = useNavigate()
  const { id } = useParams()
  const [title, setTitle] = useState('')
  useEffect(() => {
    if (vditorRef.current) {
      getBlogById(id).then((res) => {
        setTitle(res.data.title)
        vditorRef?.current?.setValue(res.data.content)
      })
    }
  }, [id, vditorRef])
  const update = () => {
    updateBlog(id, { title, content: vditorRef.current.getValue() }).then((res) => {
      if (res.code === 0) {
        vditorRef.current.destroy()

        navigate(`/blog/${id}`)
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
        <button className="btn btn-o btn-md flex items-center text-t3" onClick={update}>
          编辑blog
        </button>
      </div>
    </div>
  )
})

export default BlogAdd
