<template>
  <div class="player" v-if="songInfo!=''">
    <div class="left">
      <img class="disc" src="../assets/img/disc.png" alt />
      <img class="cover" :src="songInfo.al.picUrl" alt />
    </div>
    <div class="right">
      <div class="title">
        <img src="../assets/img/tag.png" alt />
        <span>{{songInfo.name}}</span>
      </div>
      <div class="singer">
        歌手:
        <span>{{songInfo.ar | filterSinger}}</span>
      </div>
      <div class="album">
        所属专辑:
        <span>{{songInfo.al.name}}</span>
      </div>
      <audio class="audio" controls :src="songUrl"></audio>
      <ul class="lyric-container">
        <!-- <li class="lyric">难以忘记</li>
        <li class="lyric">初次见你</li>
        <li class="lyric">那双迷人的小眼睛</li> -->
        <li v-for="(item, index) in geci" :key="index">{{item.split(']')[1]}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      songUrl:'',//播放地址
      songInfo:'',//歌曲详情
      geci:[]
    };
  },

  created() {  
    //接收路由传参
    let songId=this.$route.query.songId;
    //获取音乐播放地址
    this.$axios({
      url: "/song/url",
      params:{
        id:songId
      }
    }).then(result => {
      this.songUrl=result.data.data[0].url;
      console.log('音乐播放地址',result);
    });

    //获取音乐详情
    this.$axios({
      url: "/song/detail",
      params:{
        ids:songId
      }
    }).then(result => {
      this.songInfo=result.data.songs[0];
      console.log('音乐详情',result);
    });

    //获取歌词
   
   this.$axios({
      url: "/lyric",
      params:{
        id:songId,
        rm:Math.random()*999
      }
    }).then(result => {
      this.geci=result.data.lrc.lyric.split('\n');
      console.log('歌词',result);
    });
  },
  filters:{
    //过滤歌手信息
    // filterSonger(arr){
    //     let str=arr.map((item)=>{
    //       return item.name
    //     })
    //     return str.join('/');
    // }
  }
};
</script>

<style>
</style>