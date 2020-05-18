/*
使用axios 封装的ajax 请求函数
函数返回的是promise 对象
*/
import axios from 'axios'
import { Toast } from 'antd-mobile'
import { BASE_URL } from '@/config'

axios.defaults.baseURL = BASE_URL
// 请求拦截
axios.interceptors.request.use(
  config => {
    Toast.loading('加载中', 0)

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
axios.interceptors.response.use(
  response => {
    // console.log(response.data.code)
    // todo 错误统一处理
    // Toast.loading('加载中', 0)
    Toast.hide()
    return response
  },
  error => {
    if (error) {
      if (error.response && error.response.data) {
        Toast.offline(error.response.data.msg, 3)
      } else {
        Toast.offline('Network connection failed !!!', 3)
      }
      // Toast.hide()
    }
    return Promise.reject(error)
  }
)

export default function req(url, data = {}, method = 'GET') {
  method = method.toLowerCase()
  if (method === 'post') {
    return axios.post(url, data)
  } else if (method === 'get') {
    return axios.get(url, {
      params: data
    })
  } else if (method === 'delete') {
    return axios.delete(url, data)
  } else if (method === 'put') {
    return axios.put(url, data)
  } else if (method === 'querypost') {
    // 拼接参数的post
    return axios({
      method: 'post',
      url,
      params: data
    })
  } else {
    console.error('未知的method' + method)
    return false
  }
}
