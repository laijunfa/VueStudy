<template>
  <div>
      <h1 class="title">{{name}}</h1>
  </div>
</template>

<script>
// js代码
export default {
  name: "App",
  data() {
    return {
      name: "我是App组件"
    };
  },
  mounted:function() {
  }
};
</script>

<style scoped>
    /* css样式 */
    .title{
        color: red
    }
</style>