import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'

axios.defaults.baseURL = 'http://localhost/api'
axios.defaults.timeout = 10000
axios.defaults.withCredentials = true

/**
 * 设置请求传递数据的格式（看服务器要求的格式）
 * x-www-form-urlencoded
 */
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.transformRequest = data => qs.stringify(data)

/**
 * 请求拦截器
 */
axios.interceptors.request.use(config => {
    let token = localStorage.getItem('token')
    token && (config.headers.token = token)
    return config
}, error => {
    return Promise.reject(error)
})

/**
 * 响应拦截器
 */
axios.interceptors.response.use(response => {
    if (response.data.message) {
        Message({
            showClose: true,
            message: response.data.message,
            type: 'success'
        })
    }
    if (response.data.data.token) {
        localStorage.setItem('token', response.data.data.token)
    }
    return response.data
}, error => {
    if (error.response.status) {
        switch (error.response.status) {
            // 401: 未登录
            case 401:
                console.log('未登录')
                break

            // 403 token过期
            // 登录过期对用户进行提示
            // 跳转登录页面  
            case 403:
                console.log('登录过期，请重新登录')
                // 清除token
                localStorage.removeItem('token')
                break

            // 404请求不存在
            case 404:
                console.log('网络请求不存在')
                break

            // 其他错误，直接抛出错误提示
            default:
                console.log(error.response.data.message)
        }
        return Promise.reject(error.response)
    }
})

export default axios