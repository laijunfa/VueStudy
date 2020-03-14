<template>
  <div class="block">
    <el-carousel trigger="click" height="300px">
      <el-carousel-item v-for="(item,index) in imgs" :key="index">
        <!-- <h3 class="small">{{ item }}</h3> -->
        <img class="img" :src="item.imageUrl" alt />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
// import axios from "../assets/lib/axios";
import axios from "axios";
export default {
  data() {
    return {
      imgs: []
    };
  },
  created() {
    axios({
      url: "http://183.237.67.218:3000/banner",
      params: {
        random: Math.random() * 999
      }
    }).then(result => {
      this.imgs = result.data.banners;
      console.log(result);
    });
  }
};
</script>

<style>
</style>