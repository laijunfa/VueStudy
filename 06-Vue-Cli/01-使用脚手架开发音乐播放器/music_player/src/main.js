import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  //用return的值替换#app的值
  render: h => h(App),
}).$mount('#app')
