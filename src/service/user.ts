import { http } from './request/http'

export const login = (data: any) => {
  return http.post({
    url: '/user/login',
    data
  })
}
