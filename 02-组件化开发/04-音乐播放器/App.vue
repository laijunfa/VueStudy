<template>
  <div class="wrap">
    <div class="play_wrap" id="player">
      <div class="search_bar">
        <img src="./assets/images/player_title.png" alt />
        <input type="text" v-model="inputValue" @keyup.enter="search" />
      </div>
      <div class="center_con">
        <!-- 音乐列表 -->
        <songs ref="songCpn"></songs>
        <!-- 黑胶碟片 -->
        <middle ref="player"></middle>
        <!-- 评论列表 -->
        <comments ref="comments"></comments>
      </div>
      <div class="audio_con">
        <audio @play="playEvent" @pause="pauseEvent" controls autoplay loop class="myaudio" :src="singUrl"></audio>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
//导入子组件
import songs from "./components/songs.vue"; 
import middle from "./components/middle.vue";
import comments from './components/comments.vue'
export default {
  data() {
    return {
      inputValue: "", //搜索框的值
      singUrl: "" //歌曲播放地址
    };
  },
  // 注册组件
  components: {
    songs,
    middle,
    comments
  },
  methods: {
    search() {
      axios({
        method: "get",
        url: "https://autumnfish.cn/search",
        params: {
          keywords: this.inputValue,
          ss:Math.random()*999
        }
      })
        .then(result => {
          //获取到音乐列表数据后传给子组件
          this.$refs.songCpn.songList = result.data.result.songs;
          //要在数据改变后，加一个延时再刷新，为了保证数据一定完成渲染到页面
          this.$refs.songCpn.scrollRefresh();
          console.log(result);
        })
        .catch(error => {
          console.log(error);
        });
    },
    //      https://autumnfish.cn/search?keywords= 神话               搜索歌曲时接口获取音乐列表
    // -   https://autumnfish.cn/song/url?id=310574                      获取音乐url
    // -   https://autumnfish.cn/comment/music?id=310574         获取 用户评论列表
    // -  https://autumnfish.cn/song/detail?ids=310574                获取 音乐详情   如图片，演唱者等

    //获取歌曲播放url
    getSingUrl(singId) {
        console.log(singId);
        
      axios({
        url: "https://autumnfish.cn/song/url",
        params: {
          id: singId,
          ss:Math.random()*999
        }
      })
        .then(result => {
          //将音乐播放地址赋给singUrl
          this.singUrl = result.data.data[0].url;
        //   console.log('歌曲地址',result.data.data[0].url);
        })
        .catch(error => {
          console.log(error);
        });
    },
    //获取歌曲的评论列表
    getComments(singId) {
      axios({
        url: "https://autumnfish.cn/comment/music",
        params: {
          id: singId,
          ss:Math.random()*999
        }
        }).then(result => {
        //   console.log('评论列表',result);
          //获取到评论列表传给子组件
          this.$refs.comments.commentList=result.data.hotComments;
          //调用子组件延时刷新
          this.$refs.comments.scrollRefresh();
        }).catch(error => {
          console.log(error);
      });
    },
    // 监听音乐播放事件
    playEvent(){
        this.$refs.player.isPlay=true;
    },
    // 监听音乐停止事件
    pauseEvent(){
        this.$refs.player.isPlay=false;
    }
  }
};
</script>

<style>
@import url("./assets/css/app.css");
</style>