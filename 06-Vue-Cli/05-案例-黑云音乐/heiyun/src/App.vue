<template>
  <div id="player">
    <h2 class="title">黑云音乐</h2>
    <div class="search">
      <input type="text" @keyup.enter="searchSong" v-model="inputValue" />
      <button>
        <span class="iconfont icon-search"></span>
      </button>
    </div>
    <div class="tab-wrapper">
      <!-- 对应的内容区域 -->
      <div class="tab-content">
        <!-- <home></home> -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// import home from "./components/home"
export default {
  data() {
    return {
      inputValue: ""
    };
  },
  methods: {
    searchSong() {
      if (this.inputValue.trim() == "") {
        console.log("内容为空");
        return;
      }
      //跳转路由并传值
      this.$router.push({
        path: "/songs",
        query: {
          searchValue: this.inputValue
        }
      });
    }
  }
};
</script>

<style>
@import url("../src/assets/css/index.css");
@import url("../src/assets/css/iconfont.css");
</style>