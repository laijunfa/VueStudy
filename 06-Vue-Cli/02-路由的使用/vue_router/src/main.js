import Vue from 'vue'
import App from './App.vue'
import login from './components/login.vue'
import home from './components/home.vue'
//1.导入路由
import VueRouter from 'vue-router';

Vue.config.productionTip = false

//2.注册路由
Vue.use(VueRouter);

//3.实例化路由
let router = new VueRouter({
  //配置路由规则
  routes: [
    {
      path: '/home',//配置路径
      component: home //组件名
    },
    {
      path: '/login',
      component: login
    }
  ]
});
new Vue({
  render: h => h(App),
  //4.挂载到vue实例
  router
}).$mount('#app')
