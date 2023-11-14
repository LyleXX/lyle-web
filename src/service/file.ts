import { http } from './request/http'

export const uploadPicture = (data: any) => {

  return http.post({
    url: '/file/upload',
    data
  })
}

