<template>
    <div>我是A页面</div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    created() {
        //获取路由上的值
        console.log(this.$route.query.str);
    },
}
</script>

<style>

</style>