const path=require('path')
module.exports={
    //入口
    entry:'./src/main.js',
    //出口:通常是一个对象,里面至少包含两个重要的属性,path和filename
    output:{
        path:path.resolve("dist"),//注意:path通常是一个绝对路径
        filename:'bundle.js'
    }
}