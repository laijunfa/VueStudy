<template>
  <div class="song_wrapper" ref="wrapper">
    <ul class="song_list">
      <!-- <li>岁月神偷--周笔畅</li>
            <li>岁月神偷--金玟岐</li>
            <li>岁月神偷--汪苏泷</li>
            <li>岁月神偷--不才</li>
      <li>岁月神偷（磁性男声版）（Cover：金玟岐）--于大海（于黑蛋）</li>-->
      <li v-for="(item, index) in songList" @click="liClick(item.id)" :key="index">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import IScroll from "iscroll";
export default {
  data() {
    return {
      songList: []
    };
  },
  methods: {
    liClick(singId) {
        //调用父组件获取歌曲url方法
        this.$parent.getSingUrl(singId);
        //获取歌曲的评论列表
        this.$parent.getComments(singId);
    },
    scrollRefresh() {
      //要在数据改变后，加一个延时再刷新，为了保证数据一定完成渲染到页面
      this.$nextTick(() => {
        this.iscroll.refresh();
      });
    }
  },
  mounted() {
    //创建滚动条
    this.iscroll = new IScroll(this.$refs.wrapper, {
      mouseWheel: true, //鼠标滚动
      scrollbars: true
    });
  }
};
</script>

<style>
</style>