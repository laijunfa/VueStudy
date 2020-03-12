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
import IScroll from "iscroll";
export default {
  data() {
    return {
      commentList: [] //评论列表
    };
  },
  methods: {
    //延时刷新,保证数据渲染在页面上
    scrollRefresh() {
      this.$nextTick(() => {
        this.iscroll.refresh();
      });
    }
  },
  mounted() {
    // //创建滚动条
    this.iscroll = new IScroll(this.$refs.comments, {
      mouseWheel: true, //鼠标滚动
      scrollbars: true
    });
  }
};
</script>

<style>
</style>