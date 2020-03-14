<template>
  <div class="comment_list" ref="comments">
    <div>
      <dl v-for="(item, index) in commentList" :key="index">
        <dt>
          <img :src="item.user.avatarUrl" alt />
        </dt>
        <dd class="name">{{item.user.nickname}}</dd>
        <dd class="detail">{{item.content}}</dd>
      </dl>
    </div>
  </div>
</template>

<script>
import IScroll from 'iscroll'
export default {
  data() {
    return {
      commentList: []
    };
  },
  methods: {
     //延迟刷新
    scrollRefresh(){
      this.$nextTick(()=>{
        this.iscroll.refresh();
      })
    }
  },
  mounted() {
    //创建滚动条
    this.iscroll = new IScroll(document.querySelector(".comment_list"), {
      mouseWheel: true, //鼠标滚动
      scrollbars: true //显示滚动条
    });
  }
};
</script>

<style>
</style>