<template>
    <div id="app">
        <div >
            <input type="text" placeholder="请输入歌名" @keyup.enter="search" v-model="inputValue">
            <button @click="search">搜索歌曲</button>
        </div>
        <top></top>
        <middle></middle>
        <bottom></bottom>
    </div>
</template>

<script>
// 1.导入组件
import top from './components/top.vue';
import middle from './components/middle.vue';
import bottom from './components/footer.vue';
import axios from 'axios'
export default {
    data() {
        return {
            msg:'我是App组件',
            inputValue:''
        }
    },
    methods: {
        search(){
            axios({
                method:'get',
                url:'https://autumnfish.cn/search',
                params:{
                    keywords:this.inputValue,
                    random:Math.random()*999
                }
            }).then(result=>{
                console.log(result);
            })
        }
    },
    // 注册组件
    components:{
        top,
        middle,
        bottom
    }
}
</script>

<style>

</style>