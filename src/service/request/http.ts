import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { TIMEOUT, BASE_URL } from './config'
import { message } from 'antd'


interface IJJRequestInterceptors<T = AxiosResponse> {
  //请求成功
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  //请求失败
  requestInterceptorCatch?: (error: any) => any
  //响应成功
  responseInterceptor?: (res: T) => T
  //响应失败
  responseInterceptorCatch?: (error: any) => any
}

interface IJJRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: IJJRequestInterceptors<T>
}


class JJRequest {
  instance: AxiosInstance
  interceptors?: IJJRequestInterceptors

  constructor(config: IJJRequestConfig) {
    this.instance = axios.create(config)

    //全局请求拦截
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (error) => {

        return error
      }
    )
    //全局响应拦截
    this.instance.interceptors.response.use(
      (res) => {
        //res为AxiosResponse类型，含有config\data\headers\request\status\statusText属性

        if (res.data.code === 0) {
          message.success('请求成功')
        }
        else {
          message.error(res.data.message)
        }
        //改造返回的数据类型，即将AxiosResponse的data返回
        return res.data
      },
      (error) => {
        return error
      }
    )
    //实例级别拦截
    this.instance.interceptors.request.use(
      config.interceptors?.requestInterceptor as any,
      config.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseInterceptor,
      config.interceptors?.responseInterceptorCatch
    )


  }
  request<T>(config: IJJRequestConfig<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      //请求拦截设置位置
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          //响应拦截设置位置
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {

          reject(err)
        })
    })
  }

  get<T = any>(config: IJJRequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'GET'
    })
  }

  post<T = any>(config: IJJRequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'POST'
    })
  }

}
//service/index.ts
//使用环境配置
export const http = new JJRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = sessionStorage.getItem('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    }
  }
})
