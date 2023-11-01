import React, { memo, useState } from 'react'
import { ReactComponent as Plus } from 'assets/svg/plus.svg'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import Pagination from 'components/Pagination'

const Blog = memo(() => {
  const navigate = useNavigate()
  const [pageIndex, setIndex] = useState(1)
  const [totalPage, setTotalPage] = useState(5)
  function jumpAdd() {
    navigate('/blog/add')
  }
  function jumpDetail(id) {
    navigate(`/blog/${id}`)
  }
  const blogList = [
    {
      id: 1,
      showYear: true,
      createAt: '2023-09-28',
      title: 'Hello World',
    },
  ]
  return (
    <div className=" px-10 ">
      <div className="mt-10 flex justify-end">
        <button className="btn btn-o btn-md flex items-center text-t3" onClick={jumpAdd}>
          <Plus className="mr-5 sq-14" />
          新增blog
        </button>
      </div>
      <div className="mt-20">
        {blogList.map((blog) => {
          return (
            <div className="pl-200" key={blog.id}>
              {blog.showYear && (
                <div className="mx-70 text-52 font-6 italic text-[#dedede]">
                  {dayjs(blog.createAt).year()}
                </div>
              )}
              <div className="  ml-50 border-l-5 border-p/50 py-20 pl-20">
                <div
                  className="inline-block cursor-pointer rounded-full px-20 py-7 font-serif text-20 text-t1 hover:bg-t3/10
                  hover:text-pt dark:hover:bg-p"
                  onClick={() => jumpDetail(blog.id)}
                >
                  {blog.title}
                </div>
                <div className="-translate-x-[28.5px] rounded-full bg-p sq-12"></div>
                <div className="px-20 text-t3">{blog.createAt}</div>
              </div>
            </div>
          )
        })}
      </div>
      <Pagination
        className="mt-20 flex justify-end"
        pageIndex={pageIndex}
        setIndex={setIndex}
        totalPage={totalPage}
      />
    </div>
  )
})

export default Blog
