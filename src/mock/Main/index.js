import Mock from 'mockjs'

// 推荐列表
Mock.mock('http://localhost/api/Recommends', 'get', {
    code: 200,
    'data|6-20': [{
        // id
        'id|+1': 1,
        // 随机返回中文文字-显示标题
        title: '@ctitle(4, 16)',
        // 赞同数
        agree: '@natural(1, 2000)',
        // 评论数
        comment: '@natural(1, 2000)',
        // link
        link: '@url(http)',
        // 随机返回内容
        content: '@ctitle(40, 300)',
        // 随机有无图片
        'picture|1': [null, '@image(190x105)']
    }]
})

// 关注列表
Mock.mock('http://localhost/api/Follows', 'get', {
    code: 200,
    'data|6-20': [{
        // id
        'id|+1': 1,
        // 随机返回中文文字-显示标题
        title: '@ctitle(4, 16)',
        // 赞同数
        agree: '@natural(1, 2000)',
        // 评论数
        comment: '@natural(1, 2000)',
        // link
        link: '@url(http)',
        // 随机返回内容
        content: '@ctitle(40, 300)',
        // 随机有无图片
        'picture|1': [null, '@image(190x105)'],
        username: '@ctitle(2, 6)',
        avatar: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
    }]
})

// 热度列表
Mock.mock('http://localhost/api/Hot', 'get', {
    code: 200,
    'data|6-20': [{
        // id
        'id|+1': 1,
        // 随机返回中文文字-显示标题
        title: '@ctitle(4, 16)',
        // 热度
        heat: '@natural(1, 2000)',
        // link
        link: '@url(http)',
        // 随机返回内容
        content: '@ctitle(40, 300)',
        // 随机有无图片
        'picture|1': [null, '@image(190x105)']
    }]
})

// 发现列表
Mock.mock('http://localhost/api/Explores', 'get', {
    code: 200,
    'data|6-20': [{
        // id
        'id|+1': 1,
        // 随机返回中文文字-显示标题
        title: '@ctitle(4, 10)',
        // link
        link: '@url(http)',
        hour: '@natural(1, 24)',
        browse: '@natural(1, 9999)',
        // 图片
        picture: '@image(490x200)',
        'list|3': [
            {
                tag: '@ctitle(4, 10)',
                // 随机返回内容
                content: '@ctitle(10, 20)',
                link: '@url(http)'
            }
        ]
    }]
})

// 热搜列表
Mock.mock('http://localhost/api/Searchs', 'get', {
    code: 200,
    'data': {
        placeholder: '@ctitle(4, 10)',
        'list|5': [{
            // id
            'id|+1': 1,
            // 随机返回中文文字-显示标题
            value: '@ctitle(4, 10)',
            // link
            link: '@url(http)'
        }]
    }
})