<template>
  <div class="result-wrapper">
    <div class="song" v-for="(song, index) in songs" :key="index">
      <div class="name">
        <span class="iconfont icon-play"></span>
        {{song.name}}
        <span class="iconfont icon-editmedia" v-if="song.mvid!=0"></span>
      </div>
      <div class="singer">
        <span>{{song.artists | filterSinger}}</span>
      </div>
      <div class="album">{{song.album.name}}</div>
      <div class="time">{{song.duration | filterTime}}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      songs: [] //歌曲列表
    };
  },
  methods: {
    getSongList() {
      //获取路由跳转过来的值
      let searchValue = this.$route.query.searchValue;
      //发送请求获取歌曲集合
      axios({
        url: "http://183.237.67.218:3000/search",
        params: {
          keywords: searchValue,
          rd:Math.random()*999
        }
      }).then(result => {
        this.songs = result.data.result.songs;
        console.log(result);
      });
    }
  },
  //过滤器
  filters:{
      //过滤歌手数组
      filterSinger(singerArr){
          let str=singerArr.map((item)=>{
              return item.name;
          })
          return str.join('/')
      },
      //过滤时间
      filterTime(time){
          let minute='0000'+Math.floor(time/1000/60);//毫秒换算为分钟
          let second='0000'+Math.floor(time/1000%60);//取余
          return minute.slice(-2)+":"+second.slice(-2)
      }

  },
  created() {
    this.getSongList();
  },
  //侦听器
  watch:{
      //监听路由上的值
      '$route.query.searchValue'(newVal,oldVal){
          console.log(newVal,oldVal);
          this.getSongList();
      },
  }
};
</script>

<style>
</style>