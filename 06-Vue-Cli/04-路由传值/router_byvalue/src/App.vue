<template>
  <div>
    <button @click="changeRouter('/pageA?str=组件A')">跳转到组件A</button>
    <button @click="changeRouter2('/PageB')">跳转到组件B</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    // 路由传参
    // 二种写法：
    // 1：配制写法
    // this.$router.push({
    // path:"路径xxx",
    // query:{
    // //这里的query就好比在url上串了一些参数，类似于接口get请求传参
    // name:"xxx"
    // }
    // })
    // 2：路径拼接写法，类似于get请求
    // this.$router.push("路径?name=xxx")
    changeRouter(url){
      //1.类似get请求的传参
        this.$router.push(url);
    },
     changeRouter2(url){
      //  2：配制写法
        this.$router.push({
          path:url,//路径
          query:{//参数
            str:'组件B'
          }
        });
    }
  },
}
</script>

<style>

</style>