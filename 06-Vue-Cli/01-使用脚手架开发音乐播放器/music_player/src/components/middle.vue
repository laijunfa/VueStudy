<template>
  <div class="player_con">
    <img src="../assets/images/player_bar.png" class="play_bar" :class="{'playing':isPlay}" />
    <!-- 黑胶碟片 -->
    <img src="../assets/images/disc.png" class="disc autoRotate" :class="{'playing':isPlay}"/>
    <img src="../assets/images/cover.png" class="cover autoRotate" :class="{'playing':isPlay}" />
  </div>
</template>

<script>
export default {
    data() {
        return {
            //默认不旋转
            isPlay:false
        }
    },
};
</script>

<style>
</style>