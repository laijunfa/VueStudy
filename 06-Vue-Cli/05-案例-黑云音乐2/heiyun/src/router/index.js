import Vue from 'vue'
import VueRouter from 'vue-router' //1.导包
import home from '../components/home.vue' //主页
import songs from '../components/songs.vue' //音乐列表
import songMv from '../components/songMv.vue' //音乐列表
//2.注册插件
Vue.use(VueRouter);//路由

// 3.实例化路由
let router = new VueRouter({
    //配置路由规则
    routes: [
        {
            path: '/',
            component: home
        },
        {
            path: '/home',
            component: home
        },
        {
            path: '/songs',
            component: songs
        },
        {
            path: '/songMv',
            component: songMv
        },
    ]
});

//导出路由
export default router
