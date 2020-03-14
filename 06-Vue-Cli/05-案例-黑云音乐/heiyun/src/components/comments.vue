<template>
  <div class="comment-wrapper">
    <div class="items">
      <div class="item" v-for="(item, index) in comments" :key="index">
        <div class="left">
          <img :src="item.user.avatarUrl" alt />
        </div>
        <div class="right">
          <div class="top">
            <span class="user">{{item.user.nickname}}:</span>
            <span class="content">
               {{item.content}}
            </span>
          </div>
          <div class="bottom">
            <div class="time">{{item.time | fmTime}}</div>
            <div class="like-wrapper">
              <span>👍</span>{{item.likedCount}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
        comments:[]
    };
  },
  created() {
    //接收路由传参
    let songId=this.$route.query.songId;
    this.$axios({
      url: "comment/music?id="+songId,
    }).then(result => {
        this.comments=result.data.hotComments;
      console.log('评论列表',result);
    });
  },
  filters:{
      fmTime(time){
          return moment(time).format('YYYY-MM-DD HH:mm:ss')
      }
  }
};
</script>

<style>
</style>