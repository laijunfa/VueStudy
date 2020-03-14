import Vue from 'vue'
import App from './App.vue'
//引入element插件
import ElementUi from 'element-ui' 
import 'element-ui/lib/theme-chalk/index.css';
//引入路由配置
import router from './router/index.js'  

Vue.config.productionTip = false


Vue.use(ElementUi);//element轮播图


new Vue({
  render: h => h(App),
  //挂载路由到Vue实例
  router
}).$mount('#app')
