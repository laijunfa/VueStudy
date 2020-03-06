const path = require('path');
const webpack = require('webpack');
//打包html插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
//压缩js代码的插件
const UglifyjsWebpackPlugin=require('uglifyjs-webpack-plugin');
module.exports = {
    //入口
    entry: './src/main.js',
    //出口:通常是一个对象,里面至少包含两个重要的属性,path和filename
    output: {
        path: path.resolve("dist"),//注意:path通常是一个绝对路径
        filename: 'bundle.js',
        // publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            //limit的作用是 ，当图片小于8kb时，对图片进行base64编码
                            //大于8kb的图片，会通过file-loader进行处理
                            limit: 8192,
                            //文件名称处理
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,//正则匹配.vue文件
                use: {
                    loader: 'vue-loader'
                }
            }
        ]
    },
    resolve: {
        //导入模块简写省略指定后缀
        extensions: ['.js', '.css', '.vue'],
        // alias:别名
        alias: {
            //指定vue使用vue.esm.js
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new webpack.BannerPlugin("为打包的文件添加版权声明 @laijunfa"),
        new HtmlWebpackPlugin({
            // 这里的template表示根据什么模板来生成index.html
                template: 'index.html'
        }),
        new UglifyjsWebpackPlugin()
    ],
    devServer:{
        contentBase:'./dist',
        inline:true
    }


}