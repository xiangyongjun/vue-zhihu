import Vue from 'vue'
import VueRouter from 'vue-router'
import { Message } from 'element-ui'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: 'recommend'
    },
    {
        path: '/',
        name: 'Home',
        meta: {
            title: '首页 - 知乎'
        },
        component: () => import('@/view/Home.vue'),
        children: [
            {
                path: '/',
                name: 'Main',
                meta: {
                    title: '首页 - 知乎'
                },
                component: () => import('@/view/Main.vue'),
                children: [
                    {
                        path: 'recommend',
                        name: 'Recommend',
                        meta: {
                            title: '首页 - 知乎'
                        },
                        component: () => import('@/view/Recommend.vue')
                    },
                    {
                        path: 'follow',
                        name: 'Follow',
                        meta: {
                            title: '首页 - 知乎'
                        },
                        component: () => import('@/view/Follow.vue')
                    },
                    {
                        path: 'hot',
                        name: 'Hot',
                        meta: {
                            title: '首页 - 知乎'
                        },
                        component: () => import('@/view/Hot.vue')
                    }
                ]
            },
            {
                path: '/explore',
                name: 'Explore',
                meta: {
                    title: '发现 - 知乎'
                },
                component: () => import('@/view/Explore.vue'),
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/view/Login.vue'),
        meta: {
            title: '登录'
        }
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    if (!localStorage.getItem('token') && to.name != 'Login') {
        Message({
            showClose: true,
            message: '当前还未登录，请登录后再尝试',
            type: 'error'
        })
        next({ name: 'Login' })
    } else {
        next()
    }
    if (to.meta.title) {
        document.title = to.meta.title
    }
})

export default router