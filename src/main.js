import Vue from 'vue'
import App from './App.vue'
import './mockdata/index'

//vue配置--禁用vue默认情况下在浏览器控制台里面的一个提示。
Vue.config.productionTip = false

//render 表示把App里面包含的html结构渲染到页面
new Vue({
  render: h => h(App),
}).$mount('#app')
