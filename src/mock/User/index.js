import Mock from 'mockjs'

// 登录
Mock.mock('http://localhost/api/Login', 'post', {
    code: 200,
    message: '登录成功',
    data: {
        token: '12345678'
    }
})

// 注册
Mock.mock('http://localhost/api/Register', 'post', {
    code: 200,
    message: '注册成功'
})

// 商品列表
Mock.mock('http://localhost/api/Goods', 'get', {
    code: 200,
    message: '获取商品列表成功',
    'data|6': [{
        // 随机返回中文文字-显示标题
        title: '@ctitle(4, 8)',
        // 关注数
        count: '@natural(1, 999)',
        // url
        url: '@url(http)',
        // 商品列表
        'list|3': [{
            // 商品id
            'id|+1': 1,
            // 建议使用 data字符串压缩64格式，你建议url地址请求
            img: '@image()'
        }]
    }]
})