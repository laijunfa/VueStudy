<template>
  <div class="result-wrapper">
    <div class="song" @dblclick="goComments(song.id)" v-for="(song, index) in songs" :key="index">
      <div class="name" >
        <span class="iconfont icon-play" @click="goPlayer(song.id)"></span>
        {{song.name}}
        <span @click="goMv(song.mvid)" class="iconfont icon-editmedia" v-if="song.mvid!=0"></span>
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
export default {
  data() {
    return {
      songs: [] //歌曲集合
    };
  },
  //过滤器
  filters: {

    //过滤时间
    filterTime(time) {
      let minute = "0000" + Math.floor(time / 1000 / 60); //将毫秒转换为分钟
      let second = "0000" + Math.floor((time / 1000) % 60); //取分钟后剩下的余数
      // 切割字符 slice(-2) 表示取字符串后面两位
      return minute.slice(-2) + ":" + second.slice(-2);
    }
  },
  methods: {
    getSongList() {
      //获取路由跳转过来的值
      let searchValue = this.$route.query.searchValue;
      //发送请求获取歌曲集合
      this.$axios({
        url: "/search",
        params: {
          keywords: searchValue,
          s:Math.random()*999
        }
      }).then(result => {
        this.songs = result.data.result.songs;
        console.log(result);
      });
    },
    // 路由跳转到mv页面并传值
    goMv(mvid){
      this.$router.push('/songMv?mvid='+mvid);
    },
    //路由跳转到音乐播放界面并传值
    goPlayer(songId){
      this.$router.push('/player?songId='+songId)
    },
    //路由跳转到评论界面并传值
    goComments(songId){
      this.$router.push('/comments?songId='+songId)
    }

  },
  created() {
      this.getSongList();
  },
  //监听器
  watch: {
    //监听路由上的值
    "$route.query.searchValue"(newVal, oldVal) {
      console.log(newVal, oldVal);
      this.getSongList();
    }
  }
};
</script>

<style>
</style>