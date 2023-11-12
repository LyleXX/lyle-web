import { http } from './request/http'

export const createBlog = (data: any) => {

  return http.post({
    url: '/blog',
    data
  })
}

export const getBlogList = ({ offset, limit }) => {

  return http.get({
    url: `/blog/list?offset=${offset}&limit=${limit}`,
  })
}

export const getBlogById = (id: string | number) => {

  return http.get({
    url: `/blog/${id}`,
  })
}

export const updateBlog = (id: string | number, data: any) => {

  return http.post({
    url: `/blog/${id}`,
    data
  })
}

export const deleteBlog = (blogId: number) => {

  return http.post({
    url: `/blog/delete/${blogId}`
  })
}