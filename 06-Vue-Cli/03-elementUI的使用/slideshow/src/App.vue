<template>
  <el-carousel :interval="4000" type="card" height="400px">
    <el-carousel-item v-for="(item,index) in list" :key="index">
      <!-- <h3 class="medium">{{ item }}</h3> -->
      <img :src="item.imageUrl" alt="">
    </el-carousel-item>
  </el-carousel>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    axios({
      url: "https://autumnfish.cn/banner?sdgsdg="+Math.random()*999,
    }).then(result => {
      console.log(result);
      this.list=result.data.banners;
    });
  }
};
</script>
<style>

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>