import React, { memo, useState, useEffect } from 'react'
import { ReactComponent as Plus } from 'assets/svg/plus.svg'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import Pagination from 'components/Pagination'
import { getBlogList } from 'service/blog'

const Blog = memo(() => {
  const [blogList, setBlogList] = useState([])
  const [pageIndex, setIndex] = useState(1)
  const [totalPage, setTotalPage] = useState(0)

  useEffect(() => {
    getBlogList({
      offset: (pageIndex - 1) * 5,
      limit: 5,
    }).then((res) => {
      res.data.forEach((item, index) => {
        if (res.data[index] && res.data[index + 1]) {
          if (
            index % 5 !== 0 &&
            dayjs(res.data[index].updateAt).year() === dayjs(res.data[index + 1].updateAt).year()
          ) {
            res.data[index].showYear = false
          } else {
            res.data[index].showYear = true
          }
        }
      })
      setTotalPage(Math.ceil(res.total / 5))
      setBlogList(res.data)
    })
  }, [pageIndex])
  const navigate = useNavigate()
  const auth = sessionStorage.getItem('token')
  function jumpAdd() {
    navigate('/blog/add')
  }
  function jumpDetail(id) {
    navigate(`/blog/${id}`)
  }

  return (
    <div className=" px-10 ">
      {auth && (
        <div className="mt-10 flex justify-end">
          <button className="btn btn-o btn-md flex items-center text-t3" onClick={jumpAdd}>
            <Plus className="mr-5 sq-14" />
            新增blog
          </button>
        </div>
      )}
      <div className="mt-20">
        {blogList.map((blog) => {
          return (
            <div className="pl-200" key={blog.id}>
              {blog.showYear && (
                <div className="mx-70 text-52 font-6 italic text-[#dedede]">
                  {dayjs(blog.updateAt).year()}
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
                <div className="px-20 text-t3">{dayjs(blog.updateAt).format('YYYY-MM-DD')}</div>
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
