import Vue from 'vue'
import App from './App.vue'
import findMusic from './components/findMusic'
import friend from './components/friend'
import myMusic from './components/myMusic'

import VueRouter from 'vue-router' //1.导入路由包

Vue.config.productionTip = false
//2.注册路由
Vue.use(VueRouter);
//3.实例化路由
const router = new VueRouter({
  //配置路由规则
    routes:[
      //第一个页面展示
      {
        path:'/',
        component:findMusic
      },
      {
        path:'/findMusic',
        component:findMusic
      },
      {
        path:'/friend',
        component:friend
      },
      {
        path:'/myMusic',
        component:myMusic
      },
    ],
    mode:'history'
})
new Vue({
  render: h => h(App),
  //挂载路由到vue实例
  router
}).$mount('#app')
