import axios from "axios"
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from "axios"

// 定制接口返回的数据结构
type ReturnResult<T> = {
  code: number
  msg: string
  data: T
}

export class Request {
  instance: AxiosInstance // axios 实例

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    // 请求拦截
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        return config
      },
      (err: any) => {
        return Promise.reject(err)
      }
    )

    // 响应拦截
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        return res
      },
      (err: any) => {
        switch (err.response.status) {
          case 401:
            break
          default:
        }
        return Promise.reject(err.response)
      }
    )
  }

  // 定义各种请求方法
  public get<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<ReturnResult<T>>> {
    return this.instance.get(url, config)
  }

  public post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<ReturnResult<T>>> {
    return this.instance.post(url, data, config)
  }
}

// 默认导出Request实例
export default new Request({
  // 覆盖配置
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000
})
