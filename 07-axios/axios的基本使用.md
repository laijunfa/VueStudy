#  axios的基本使用



## axios基本介绍 

> ajax请求

[官网地址](http://www.axios-js.com/zh-cn/docs/#%E7%89%B9%E6%80%A7)

> **axios也是一种ajax请求。**
>
> **为什么用axios？**
>
> - 原生的ajax过于麻烦，调用不方便。
> - jquery相比ajax过于宠大，我们有时候公公只需要一个网络接口请求功能。
> - axios只做接口请求，体积较小，网络加载会快些，而且功能还挺丰富如（请求拦截，数据 返回拦截等。） 

## axios之get请求

get 请求可用接口： https://autumnfish.cn/api/joke/list?num=10

**用法：**

```javascript
//get请求
axios.get('请求接口路径', 
          //params就是要传的参数，也可直接串到路径上
          {params: {
              ID: 12345
           }}
           )
    .then(response=>{console.log("成功的处理");})  
    .catch(error=>{console.log("错误的处理");});
```

**Demo:**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <div id="app">
        <button @click="clickEvent">点我获取数据</button>
        <ul>
            <li v-for="(item, index) in axiosRes" :key="index">{{item}}</li>
        </ul>
    </div>
    <script src="./vue.js"></script>
    <!-- 要使用axios，首先要要导包进来 -->
    <script src="./axios.js"></script>
    <script>
        new Vue({
            el: "#app",
            data: {
                axiosRes: ""
            },
            methods: {
                clickEvent() {

                    // axios.get(url).then(//正常返回).catch(//错误返回)  参数直接写url上
                    //axios.get(url,{params:{//参数}}).then(//正常返回).catch(//错误返回)

                    //箭头函数用法
                    // axios.get('https://autumnfish.cn/api/joke/list?num=10')
                    //     .then(res => {
                    //         this.axiosRes = res.data.jokes
                    //     })
                    //     .catch((error) => {
                    //         console.log(error)
                    //     });

                    // 传统用法
                    let _this = this
                    axios.get('https://autumnfish.cn/api/joke/list?num=10')
                        .then(function (res) {
                            _this.axiosRes = res.data.jokes
                        })
                        .catch((error) => {
                            console.log(error)
                        });

                }
            }
        })

    </script>


</body>

</html>
```

## axios之post请求

post请求可用接口： https://autumnfish.cn/api/user/reg       参数:   username 

**用法**

```javascript
//post请求
axios.post('请求接口路径',          
           {     //接口请求参数
            firstName: 'Fred',
            lastName: 'Flintstone'
             })
    .then(response=>{console.log("成功的处理");})  
    .catch(error=>{console.log("错误的处理");});
```

**Demo**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <div id="app">
        <input type="text" v-model="username">
        <button @click="poseEvent">调用post</button>
        <div>
            {{msg}}
        </div>


    </div>
    <script src="./vue.js"></script>
    <script src="./axios.js"></script>
    <script>
        new Vue({
            el: "#app",
            data: {
                username: "",
                msg: ""
            },
            methods: {
                poseEvent() {
                    // axios.post(url，{//需要传递的参数}).then((res)=>{//成功返回}).catch(err=>{//错误返回})
                    axios.post("https://autumnfish.cn/api/user/reg", {
                        username: this.username
                    }).then(res => {
                        this.msg = res
                        console.log(res)
                    }).catch(err => {
                        console.log(err)
                    })
                }
            }
        })
    </script>
</body>

</html>
```



## axios之config配制模式使用

**用法**

- ```javascript
  //axios(config)模式  
  axios({
      	method: '请求方法如:post.get',
          url: '请求接口路径',
      //post需要传递的参数
          data: {
          xxx: 'oooo'
           },
          
      //get接口地址上需要传递的参数
          params: {
                ID: 12345
           }    
  }).then(response=>{console.log("成功的处理");})  
    .catch(error=>{console.log("错误的处理");});
  ```
  
    **注意：推荐大家学习上面的config模式，更加灵活，企业里面主体使用也是这种模式。**
  
  get 请求可用接口： https://autumnfish.cn/api/joke/list?num=10
  
  post请求可用接口： https://autumnfish.cn/api/user/reg       参数:   username 
  
  **config模式下的get与post请求**
## vue生命周期之beforeCreate、created

>在vue中如果在页面加载时获取数据呢？

[直通车](https://cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA)

> **`beforeCreate`:创建前，不能访问`data`与`methods`**，在当前 vue实例生命周期，只会执行一次
>
> **`created`:创建后，能访问`data`与`methods`**,**但是也还是不能访问vue渲染后的`dom，`**在当前 vue实例生命周期，只会执行一次
>
> **注：所有的生命周期都是函数** 

**用法：**

它是用在vue实例化里面的

```javascript
new Vue({
  el: '#app',
  methods: {
  },
  beforeCreate(){},
  created(){}
})
```

**功能：**  

- `beforeCreate`:基本没啥用，可能以后项目很长一段时间你们都用不到

- `created`:能用于取数据,比如url上参数，接口取值等 ，目前进入页面接口在这调用最合适。



```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>

    <div id="app">
        <ul>
            <li v-for="(item,index) in list" :for="index">{{item}}</li>
        </ul>
    </div>
    <script src="./vue.js"></script>
    <script src="./axios.js"></script>
    <script>
        // 实例化
        new Vue({
            el: "div",
            data: {
                list: []
            },
            methods: {
                test(msg) {
                    console.log(msg);
                }
            },
            beforeCreate() {
                // beforeCreate无法访问data里面的属性与methods里面的方法，
                // this.test("beforeCreate")
                console.log("beforeCreate:", this.list)

            },
            created() {
        // created是能够访问data里面的属性也能访问methods里面的方法，但不能访问dom（vue所加工处理后的dom，这点后面会讲）
                this.test("created")
                console.log("created:", this.list)
                axios({
                    url: "https://autumnfish.cn/api/joke/list",
                    method: "get",
                    params: {
                        num: 10
                    }
                }).then(response => {
                    this.list = response.data.jokes
                    console.log(response)
                })
            }
        })
    </script>
</body>

</html>
```



## 英雄Demo网络版本

模板里面有相应英雄的所有数据。

一打开页面，就默认展示所有英雄列表，详情里面展示 第一个英雄的详情

![](E:\Vue学习笔记\VueStudy\07-axios\img\image-20191126210552823.png)

通过搜索，搜索出带有名字带有相关字的英雄列表，同时，英雄详情展示 出列表里第一个英雄的详情。如：

![](E:\Vue学习笔记\VueStudy\07-axios\img\image-20191126210451600.png)

**所需要接口:**

-  查询英雄名称接口：  https://autumnfish.cn/api/lol/search   
  - 请求方式：get     参数：q:英雄名（可选）
  - 不传参可以获取全部英雄列表数据，不包括详情
- 根据英雄id查询英雄详情的接口： https://autumnfish.cn/api/lol/info
  - 请求方式：get     参数:  id:英雄id
  - 

通过上述接口优化完成英雄Demo成动态数据









