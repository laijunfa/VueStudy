<template>
  <div>
    <div class="nav">
      
      <router-link to="/findMusic">发现音乐</router-link>
      <router-link to="/myMusic">我的音乐</router-link>
      <!-- <span @click="myMusic">我的音乐</span> -->
      <router-link to="/friend">朋友</router-link>
    </div>
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
    myMusic(){
      //更灵活的控制路由跳转
      this.$router.push('/myMusic');
    }
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
/* 导航 */
.nav {
  width: 1300px;
  height: 80px;
  margin: 0 auto;
  background: #242424;
  border-bottom: 1px solid #000;
  /* flex布局 */
  display: flex;
  /* 调整水平轴上的对齐方式(居中) */
  justify-content: center;
  /* 侧轴对齐方式居中 */
  align-items: center;
  
}
.nav a{
  padding: 0 19px;
  color: white;
}
.nav a:link{
  text-decoration: none;
}
/* 点击后的样式 */
.nav .router-link-active{
  color: red;
  text-decoration: none;
}

img{
  width: 100%;
}
</style>