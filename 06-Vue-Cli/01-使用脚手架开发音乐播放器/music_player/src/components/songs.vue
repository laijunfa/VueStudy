<template>
  <div class="song_wrapper">
    <ul class="song_list">
      <li v-for="(item, index) in songList" @click="liClick(item.id)" :key="index">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
 import IScroll from 'iscroll'
export default {
  data() {
    return {
      songList: [] //歌曲集合
    };
  },
  methods: {
    liClick(songId) {
      //调用父组件获取歌曲播放地址
      this.$parent.getSongUrl(songId);
      //调用父组件获取评论的方法
      this.$parent.getComments(songId);
    },
    //延迟刷新
    scrollRefresh(){
      this.$nextTick(()=>{
        this.iscroll.refresh();
      })
    }
  },
  mounted() {
    //创建滚动条
    this.iscroll=new IScroll(document.querySelector('.song_wrapper'),{
      mouseWheel:true,//鼠标滚动
      scrollbars:true//显示滚动条
    })
  },
  // updated() {
  //   //数据更新后 刷新滚动条
  //   this.iscroll.refresh();
  // },
};
</script>

<style>
</style>