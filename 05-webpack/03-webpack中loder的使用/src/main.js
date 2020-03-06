let num=10;
let num2=100;

//引入commonjs文件
const {sum,mul}=require('./js/commonjs导出.js');
console.log(sum(10,1000));
console.log(mul(num,num2));

//引入es6文件
// import {show} from "./es6语法导出";
import * as es6 from "./js/es6语法导出.js";
console.log(es6.show());
console.log(es6.name);

//引入css文件
require('./css/index.css');

import Vue from "vue/dist/vue.common.js"
//引入vue
// const App=require('./vue/vue.js')
import App from './vue/App.vue'
// const App={ 
//     template:'<h1 class="title">{{name}}</h1>',
//     data(){
//         return{
//             name:'我是App组件'
//         }
//     }
// }
new Vue({
    el:'#app',
    template:`<div><App></App>{{msg}}</div>`,
    data:{
        msg:"你好 世界"
    },
    //注册组件
    components:{
        App
    }
})

