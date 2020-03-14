<template>
  <div id="player">
    <h2 class="title">黑云音乐</h2>
    <div class="search">
      <input type="text" v-model="searchValue" @keyup.enter="searchSongs"/>
      <button>
        <span class="iconfont icon-search"></span>
      </button>
    </div>
    <div class="tab-wrapper">
      <!-- 对应的内容区域 -->
      <div class="tab-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue:''
    }
  },
  methods: {
    //搜索歌曲
    searchSongs(){
      console.log('路由信息',this.$router);
        //跳转路由并传参数
        this.$router.push({
          path:'/songs',
          query:{
            'searchValue':this.searchValue
          },
          sb:{
            'lai':'laijunfa'
          }
        })
    }
  },
};
</script>

<style>
@import url('./assets/css/iconfont.css');
@import url('./assets/css/index.css');
</style>