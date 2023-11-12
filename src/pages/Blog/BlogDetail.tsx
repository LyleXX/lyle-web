import React, { memo, useEffect, useState } from 'react'
import MdPreview from 'components/MdPreview'
import { useParams, useNavigate } from 'react-router-dom'
import { getBlogById, deleteBlog } from 'service/blog'

const BlogDetail = memo(() => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  useEffect(() => {
    getBlogById(id).then((res) => {
      setTitle(res.data?.title)
      setContent(res.data?.content)
    })
  }, [id])

  const handleDelete = () => {
    deleteBlog(Number(id)).then((res) => {
      if (res.code === 0) {
        navigate(`/blog`)
      }
    })
  }

  return (
    <div className="  px-10">
      <div className="mt-10 flex justify-end">
        <button
          className="btn btn-o btn-md flex items-center text-t3"
          onClick={() => navigate(`/blog/update/${id}`)}
        >
          编辑blog
        </button>
        <button
          className="btn btn-er-soft btn-md ml-20 flex items-center text-t3"
          onClick={() => handleDelete()}
        >
          删除blog
        </button>
      </div>
      <div className="text-52 font-6 italic text-[#dedede]">{title}</div>
      <MdPreview markdown={`${content}`} />
    </div>
  )
})

export default BlogDetail
