// 1.引入mock模块
import Mock from 'mockjs'

// //Mock.mock( rurl, template )
// 记录数据模板。当拦截到匹配 rurl 的 Ajax 请求时，将根据数据模板 template 生成模拟数据，并作为响应数据返回。rurl：可选。表示需要拦截的 URL，可以是 URL 字符串或 URL 正则。

Mock.mock(/todos.json/, {
  'code': 0,
  'msg': function () {
    return this.code === 0 ? 'ok' : 'wrong'
  },
  'data|10-20': [{
    'name': '@cname',
    'id|+1': 1
  }]
})
// 不需要暴露出来
