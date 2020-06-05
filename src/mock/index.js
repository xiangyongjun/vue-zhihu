import Mock from 'mockjs'

// 导入用户模块
import './User'

// 导入主要模块
import './Main'

Mock.setup({
    timeout: '500-1500' // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
})