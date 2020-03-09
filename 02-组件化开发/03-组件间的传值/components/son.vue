<template>
  <div class="sonBox">
    <div>{{msg}}</div>
    <button @click="getFather">获取父组件的值</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "我是子组件"
    };
  },
  methods: {
    getFather() {
      console.log("获取父组件的值", this.$parent.msg);
    }
  },
  created() {
     console.log("子组件created");
  },
  mounted() {
    console.log("子组件mounted");
  }
};
</script>

<style>
.sonBox {
  width: 400px;
  height: 400px;
  border: 1px solid red;
}
</style>