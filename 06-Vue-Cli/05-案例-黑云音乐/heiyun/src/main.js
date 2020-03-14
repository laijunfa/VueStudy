import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js';
import elementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'

Vue.config.productionTip = false

//注册插件
Vue.use(elementUI);

// 基地址设置
axios.defaults.baseURL = "https://autumnfish.cn/"
// 将axios添加到vue原型上，让vue的实例拥有axios，vue实例可以通过this.$axios访问axios
Vue.prototype.$axios = axios


//使用全局过滤器
//过滤歌手数组
Vue.filter('filterSinger',(arr)=>{
  let str=arr.map((item)=>{
    return item.name
  })
  return str.join('&');
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
