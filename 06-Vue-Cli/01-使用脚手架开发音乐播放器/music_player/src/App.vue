<template>
  <div id="app">
    <div class="wrap">
      <div class="play_wrap" id="player">
        <div class="search_bar">
          <img src="images/player_title.png" alt />
          <input type="text" v-model="musicName" @keyup.enter="searchMusic" />
        </div>
        <div class="center_con">
          <!-- 歌曲列表组件 -->
          <songsCpn ref="songsCpn"></songsCpn>
          <!-- 黑胶碟片组件 -->
          <middleCpn ref="middleCpn"></middleCpn>
          <!-- 评论集合组件 -->
          <commentsCpn ref="commentsCpn"></commentsCpn>
        </div>
        <div class="audio_con">
          <!-- @play 监听播放事件 @pause 监听播放停止事件 -->
          <audio
            :src="songUrl"
            controls
            autoplay
            @play="playEvent"
            @pause="pauseEvent"
            class="myaudio"
          ></audio>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
//导入子组件
import songsCpn from "./components/songs";
import middleCpn from "./components/middle";
import commentsCpn from "./components/comments";

export default {
  data() {
    return {
      musicName: "", //搜索框值
      songUrl: ""
    };
  },
  methods: {
    // 搜索音乐
    searchMusic() {
      axios({
        url: "https://autumnfish.cn/search",
        params: {
          keywords: this.musicName,
          ss: Math.random() * 9999
        }
      }).then(result => {
        console.log("歌曲集合", result);
        //获取到音乐集合传给子组件渲染
        this.$refs.songsCpn.songList = result.data.result.songs;
        this.$refs.songsCpn.scrollRefresh();
      });
    },
    //根据id获取歌曲播发地址
    getSongUrl(songId) {
      axios({
        url: "https://autumnfish.cn/song/url",
        params: {
          id: songId,
          ss: Math.random() * 9999
        }
      }).then(result => {
        //歌曲地址
        this.songUrl = result.data.data[0].url;
      });
    },
    //获取歌曲的评论列表
    getComments(songId) {
      axios({
        url: "https://autumnfish.cn/comment/music",
        params: {
          id: songId,
          ss: Math.random() * 999
        }
      }).then(result => {
        console.log("评论列表", result);
        //获取到评论列表传给子组件
        this.$refs.commentsCpn.commentList = result.data.hotComments;
        //调用子组件延时刷新滚动条
        this.$refs.commentsCpn.scrollRefresh();
      });
    },
    //监听音乐播发事件
    playEvent() {
      //音乐开始播放时,改变子组件的值,使专辑旋转起来
      this.$refs.middleCpn.isPlay = true;
    },
    //监听音乐停止事件
    pauseEvent() {
      this.$refs.middleCpn.isPlay = false;
    }
  },
  components: {
    songsCpn,
    middleCpn,
    commentsCpn
  }
};
</script>

<style>
@import url("./assets/css/app.css");
</style>
