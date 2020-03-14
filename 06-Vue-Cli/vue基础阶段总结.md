## vue基础全阶段总结 

**第一天**

- vue.js是什么

  - 它无须操作dom，只关心数据
  - 它只是一个js框架
  - 组件 式开发

- v-text

  - v-text="值“ ，
  - 它的值会替换里面的文本内容

- {{}}插值语法

  - 用于部分文本内容替换

- v-html

  - v-html="值”
  - 它会将后面的值解析成html格式
  - 主体用于富文本   带标签的字符串

- v-model  

  - 用于表单数据双向绑定

- v-on 

  - @事件名="简短js或者function"

- this

  - this就是vue实例对象

    vue中的data与methods都会平铺到vue实例对象中

- v-bind基本用法

  - v-bind:属性名=属性值  只用于单一属性
  - :class=”{lcass类名：boolean值}”
    - true:该标签使用上该class
    - false 该标签不使用该class

- v-for指令

  - 数组用法   v-for="(item，index) in 数组"
  - 对象用法   v-for=(value,key,index从0开始）in 对象
  - 特点：里面的item,index等都是局部变量，它只能用于当前标签之内

  **第二天**

  - v-if 

    - 用法  v-if="boolean值“

      - true 渲染所在标签
      - false 不渲染所在标签
      - v-else-if   和v-if一样，v-if不成立时，它就到了v-else-if进行判断 
      - v-else不须条件

    - key

      - 有时候标签长得太像vue也不 一定能识别，加一个key让vue更好识别

    - v-show

      - 用于控制 标签的是否显示 
      - v-show="boolean值"
        - true:显示该标签
        - false 不显示该标签 display:none

    - v-cloak

      - 在相应标签加上一个v-cloak属性，在vue实例化完成后v-cloak会消失
      - [v-cloak]{display:none}

    - v-once  只执行一次vue语法

    - v-pre  不执行vue语法，保持原样

    - axios 它就是一个ajax请求

      - axios.get(url,{params:{参数：值}}）.then(res=>{成功返回}).catch(error=>{失败返回}）

      - axios.post(url,{参数:值}）.then(res=>{成功返回}).catch(error=>{失败返回}）

      - ```
        axios({
        url:"接口地址",
        method:"get/post",
        params:{参数:值}，
        data:{参数；值
        }).then(res=>{
        //成功返回
        }.catch(err=>{
        //失败返回
        }
        ```

       第三天 

- 计算属性

  - 使用场景：依赖一个或者多个值产生一个新值 ，如果依赖的值就变了，它会实时响应
  - 使用：
    - 放在compoted:{]
    - 本质就是一个function
    - 它会return一个值，这个值就是该计算属性的值
    - 它是当属性使用

- ref基本使用

  - 在相应标签上定义一个ref属性   ref=值
  - this.$refs.值

- iscroll基本使用

  - 导包
  - 布局
    - html要求：三层dom
      - 第一层是滚动区域，要有高度
      - 第二层所有要滚动的元素都在里面
    - css要求
      - 要在第一层的css上有高度，去掉滚动条，加一个定位 
  - 实例化
    - new IScroll(选择dom,{mouseWheel:true,scrollbars:true})
  - 刷新
    - 刷新要加一个延时
    - refresh()

- 单元素动画

  - 动画基本条件：进入/离开动作  v-if/v-show
  - 用transition包住
  - 加一个name,该name就是后面css前缀
    - .xxx-enter-active :进入动画执行体
    - .xxx-leave-active :离开动画执行体
    - .xxx-enter  进入时，从什么状态变到正常状态
    - .xxx-leave-to  离开时，从正常状态变到什么状态

- 多元素动画

  - 用transition-group包住
  - 里面的每一项都要加一个不同的key值

  **第四天**

- 组件

  - 一个功能模块的封装（html,css js的综合封装）

- 组件结构

  - template部分
    - 注意点：它里面内容必须要有一个标签包住
  - js
    - 导入js   import 名字  from  路径
    - 它的data 是一个  function return 对象
    - el不需要了，因为h面的template就是它的作用范围

- 在组件中引入 其它组件

  - 导入
    - import 组件名 from 路径
  - 注册
    - components:{组件名}
  - 使用
    - 当标签使用 ，它的名字就是注册时的名字

- 在组件中使用外部插件

  - 装包  npm i axios
  - 导包  import 名字 from 'axios'
  - 用包 
    - 注意点：用包的名字是导入时的名字

- 组件间的传值

  - 父传子
    - 在相应子组件标签上定义一个ref属性   ref=值
    - 访问子组件this      父组件this.$refs.值==子组件this
  - 子传父
    - 访问父组件this    子组件this.$parent  == 父组件this

- 脚手架

  - 它就是一个项目模板

  

  **第五天**

  ![image-20200313173539168](D:/%E5%A8%B1%E4%B9%90%E8%BD%AF%E4%BB%B6/QQ/1570292991/FileRecv/Vue%E5%9F%BA%E7%A1%80%E7%AC%AC%E4%B9%9D%E5%A4%A9/01%E6%95%99%E5%AD%A6%E6%9D%90%E6%96%99/image-20200313173539168.png)

  创建脚手架

  - vue create 名字
    - 名字不要有大写字母和一些特别的关键字
  - 运行  
    - npm run serve

  第六天

- css作用域

  - 不加scoped，它的css就是全局的
  - 加了scoped，它就变成私有的了，但是它如果有子组件，它也会管到子组件最外层

- 路由：它就是一个指向

  - 它就是根据一个path,展示 不同的component

- 路由基本使用

  - 安装路由  npm i vue-router
  - 导入路由   import VueRouter from 'vue-router'
  - 注册路由  Vue.use(VueRouter)
  - 实例化
    - const router=new VueRouter({routes;[//相应配制信息]})
  - 注入到vue实例
    - new Vue({router})
  - 写一个路由出口
    - 在相应位置来一个router-view

- router-link相当于一个a标签

  - router-link   to="地址（不带#）"

- 编程式导航

  - this.$router.push("路由地址")

- 路由原理  hash   window.location.hash

  - hashchange

- element

  - 找到官网复制粘贴
  - 安装element-ui   npm i element-ui
  - 导入   import elementUi from 'element-ui'
  - 导入相应css
  - 注册element   Vue.use(elementUi )

- 路由传值

  - 传：  
    - get请求模式传值
      - this.$router.push("路径?参数=值")
    - 配制模式
      - this.$router.push({path:"地址"，query:{参数：值}})
  - 收
    - 在相应组件  this.$route.query.值

  第八天与第九天

  - 过滤器

    - 局部过滤器
    - 使用场景：给一个或者多个值进行加工后返回一个新的值
    - 定义： 
      - 放在filters:{}
      - 它本质就是一个function
        - 方法名(值){  return  新值}
    - 调用   {{  值   |  方法名 }}
    - 全局过滤器
      - Vue.filter(方法名,function(值){return 新值})

  - moment

    - 取当前时间
      - moment().foramt("YYYY年MM月DD日 HH:mm:ss")
        - HH代表24小时制   hh代表12小时制
    - 给一个时间戳转换成时间格式
      - moment(时间戳).foramt("YYYY年MM月DD日 HH:mm:ss")

  - 侦听器

    - 使用场景

      - 侦听某个值，如果该值变化 了，可以做一些相应处理

    - 定义

      - 放在watch:{}里面
      - 它本质是一个function,只是它的方法名有一些特别
        - 它的方法名就是要侦听的值完整 写出来然后去掉this，加上引号就是侦听器方法名

    - axios基地址

      - axios.defaules.baseURL="基地址"
      - 全局使用axios
        - Vue.prototype.$axios=axios

    - 静默刷新

      this.bol=false   this.$nextTick(()=>{this.bol=true})

    - 路由重定向

      - {path:"*",redirect:"需要重定币别 到哪里就写相应path"}

    - 生命周期

      - beforeCreate:创建前，它不能访问访问data与methods

        created:创建后，它可以访问data与methods,但是还不能访问vue渲染后的dom

        beforeMount:渲染前，它还不能访问vue渲染后的dom

        mounted:渲染后，它可以访问vue渲染后的dom

        beforeUpdate:更新前，数据已修改，但是页面还没有完成渲染

        updated:更新后，数据已修改，且页面已完成渲染

        beforeDestroy:销毁前，啥都可以访问，但是准备要销毁了，一般用于善后工作

        destroyed:销毁后，中止了渲染，但是还是可以访问data再来methods,但是不能访问vue渲染后的dom,还是可以做善后工作

  

## 组件传值之props与emit

> 父组件通过 props 向下传递数据给子组件；子组件通过 emit 给父组件发送消息。 

- 父组件传值子组件
  - 在子组件标签上定义一个属性
    - <子组件 :`自定义属性名`=“值”></子组件>
  - 在子组件中接收数据
    - 在props中接收，props放到
      - props:['`自定义属性名`']
    - 使用传递的数据
      - this.`自定义属性名`
  - 注意点：props传递过来的数据是单向数据流，不可修改。
- 子组件调用父组件方法
  - 在子组件上定义一个方法
    - <子组件 @`自定义方法名`=“`父组件方法`”></子组件>
  - 在子组件里调用该方法
    - this.$emit("`自定义方法名`",参数)，这样就会触发`父组件方法`





