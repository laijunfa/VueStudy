<template>
  <div class="block">
    <el-carousel trigger="click" height="300px">
      <el-carousel-item v-for="(item,index) in imgs" :key="index">
        <!-- <h3 class="small">{{ item }}</h3> -->
        <img class="img" :src="item.imageUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgs: []
    };
  },
  created() {
    this.$axios({
      url: "banner",
      params: {
          random:Math.random()*999
      },
    }).then(result => {
        this.imgs=result.data.banners;
      console.log(result);
    });
  }
};
</script>
<style>
</style>