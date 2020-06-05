/**
 * api接口的统一封装
 */
import request from '../utils/request'
import { Message } from 'element-ui'

// 登录
export function login(username, password) {
    return request({
        url: 'Login',
        method: 'post',
        data: {
            username: username,
            password: password
        }
    })
}

// 注册
export function register(username, password) {
    return request({
        url: 'Register',
        method: 'post',
        data: {
            username: username,
            password: password
        }
    })
}

// 登出
export function logout() {
    localStorage.removeItem('token')
    Message({
        showClose: true,
        message: '退出登录成功',
        type: 'success'
    })
}

// 获取推荐列表
export function getRecommendList() {
    return request({
        url: 'Recommends',
        method: 'get'
    })
}

// 获取关注列表
export function getFollowList() {
    return request({
        url: 'Follows',
        method: 'get'
    })
}

// 获取热度列表
export function getHotList() {
    return request({
        url: 'Hot',
        method: 'get'
    })
}

// 获取发现列表
export function getExploreList() {
    return request({
        url: 'Explores',
        method: 'get'
    })
}

// 获取热搜列表
export function getSearchList() {
    return request({
        url: 'Searchs',
        method: 'get'
    })
}