<template>
  <div>
    <input type="text" @keyup.enter="search" v-model="searchValue" />
    <button @click="search">搜索歌曲</button>
    <div>
        <audio :src="songUrl" controls autoplay></audio>
      <ul>
        <li @click="getSongUrl(item.id)" v-for="(item,index) in songList" :key="index">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
// 导入axios包
import axios from "axios";
export default {
  data() {
    return {
      searchValue: "", //搜索值
      songList: [], //歌曲集合
      songUrl: "" //歌曲播放地址
    };
  },
  methods: {
    // 搜索歌曲
    search() {
      axios({
        method: "get",
        url: "https://autumnfish.cn/search",
        params: {
          keywords: this.searchValue,
          random: Math.random() * 999
        }
      })
        .then(result => {
          this.songList = result.data.result.songs;
          console.log(result);
        })
        .catch(error => {
          console.log(error);
        });
    },
    //获取歌曲url
    getSongUrl(songId) {
      axios({
        method: "get",
        url: "https://autumnfish.cn/song/url",
        params: {
          id: songId
        }
      })
        .then(result => {
          console.log(result);
          this.songUrl = result.data.data[0].url;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style>
</style>