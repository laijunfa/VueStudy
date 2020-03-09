<template>
  <div>
    <div>{{msg}}</div>
    <button @click="getSon">获取子组件的值</button>
    <son ref="son"></son>
  </div>
</template>

<script>
//父组件传值
//1.
import son from "./components/son.vue";
export default {
  data() {
    return {
      msg: "我是父组件"
    };
  },
  components: {
    son
  },
  methods: {
    getSon() {
        console.log('子组件的值',this.$refs.son.msg);
        this.$refs.son.created();
    }
  },
  created(){
      console.log('父组件created');
  },
  mounted() {
     console.log('父组件mounted');
  },
};
</script>

<style>
</style>