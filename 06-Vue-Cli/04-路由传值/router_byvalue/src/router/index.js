import Vue from 'vue';
import pageA from '../components/pageA.vue'
import pageB from '../components/pageB.vue'
import VueRouter from 'vue-router';//1.导包

//2.注册路由
Vue.use(VueRouter);

//3.实例化路由
const router = new VueRouter({
    routes:[
        {
            path:'/pageA',
            component:pageA
        },
        {
            path:'/pageB',
            component:pageB
        }
    ]
})
export default router