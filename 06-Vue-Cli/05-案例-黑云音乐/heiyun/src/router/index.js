import Vue from 'vue'
import VueRouter from 'vue-router' //1.导包
import home from '../components/home.vue' //主页
import songs from '../components/songs.vue' //音乐列表
import songMv from '../components/songMv.vue' //歌曲mv
import player from '../components/player.vue' //歌曲播放
import comments from '../components/comments.vue' //评论页面

//2.注册路由
Vue.use(VueRouter);

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
//3.实例化路由
const router = new VueRouter({
    routes:[
        {
            path:'/',
            component:home
        },
        {
            path:'/home',
            component:home
        },
        {
            path:'/songs',
            component:songs
        },
        {
            path:'/songMv',
            component:songMv
        },
        {
            path:'/player',
            component:player
        },
        {
            path:'/comments',
            component:comments
        },
        //路由重定向
        //当访问的某些地址没有在路由中配置时，让它指向一个固定path
        {
            path:'*',
            redirect:'/'
        },
    ]
})
export default router