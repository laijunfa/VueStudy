let num=10;
let num2=100;

//引入commonjs文件
const {sum,mul}=require('./commonjs导出');
console.log(sum(10,1000));
console.log(mul(num,num2));

//引入es6文件
// import {show} from "./es6语法导出";
import * as es6 from "./es6语法导出";
console.log(es6.show());
console.log(es6.name);

