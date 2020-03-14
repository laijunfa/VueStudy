<template>
  <div class="video">
    <div class="title-wrapper">
      <span class="tag">MV</span>
      <span class="title">{{mvinfo.name}}</span>
      <span class="artist">{{mvinfo.artistName}}</span>
    </div>
    <video :src="videoUrl" controls></video>
    <!-- <video :src="mvinfo.brs['1080']" controls></video> -->
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      videoUrl:'',
      mvinfo:{}
    }
  },
  created() {
    let mvid=this.$route.query.mvid
    axios({
      url: "https://autumnfish.cn/mv/detail",
      params: {
        mvid:mvid,
        random:Math.random()*999
      },
    }).then(result => {
      let brs=result.data.data.brs;
      let max=0;
      for (let key in brs) {
         key=parseInt(key);
        if(key>max){
            max=key;
        }
      }
      this.videoUrl=brs[max];//获取最高清的视频
      this.mvinfo=result.data.data;
      console.log('视频',result);
    });
  }
};
</script>

<style>
</style>