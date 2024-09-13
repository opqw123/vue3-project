// src/services/api.ts

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

// 创建一个 axios 实例
const api: AxiosInstance = axios.create({
  baseURL: process.env.VITE_APP_BASE_API,
  timeout: 30000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json'
    // 其他默认请求头可以在这里配置
  }
})

// 请求拦截器
api.interceptors.request.use(
  (config: any) => {
    // 在请求发送之前做些什么，例如加入 token 等操作
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    // 处理请求错误
    console.error('Request error: ', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
api.interceptors.response.use(
  (response: AxiosResponse) => {
    // 在响应数据返回之前做些什么，例如对响应数据进行处理
    return response.data
  },
  (error) => {
    // 处理响应错误
    console.error('Response error: ', error)
    return Promise.reject(error)
  }
)

export default api
