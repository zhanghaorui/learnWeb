//    node.js读取文件



//  浏览器中的JavaScript是没有文件操作的能力的
//  但是 Node中的 JavaScript具有文件操作的能力 


//  fs是filesystem的见写  文件系统
//  在node中 如果想进行文件操作，就必须引入fs这个核心模块
//  在fs这个核心模块中，就提供了所有的文件操作的相关的API
//  例如： fs.readFile 就是用来读取文件的

//  1. 使用 require 方法加载 fs 核心模块
var fs = require('fs');

//  2. 读取文件
//      第一个参数是要读取的文件路径
//      第二个参数是一个回调函数
//          error
//              如果读取失败,error就是错误对象
//              如果读取成功,error就是 null
//          data
//              如果读取失败,data就是null
//              如果读取成功,data就是数据
// 
//          成功
                // data 数据 
                // error null
        //  失败
                //  error 错误对象
                // data null
// 
// 
// 
// 

fs.readFile('../README.md',function(err, data) {
    // <Buffer 23 20 6c 65 61 72 6e 57 65 62 0a 23 20 6c 65 61 72 6e 57 65 62 0a>
    // 文件中存储的都是二进制数据0 1
    // 为什么看到的不是0和1呢?   二进制转为十六进制了
    // 可以通过 toString 方法将其转为我们能认识的字符
    console.log(data);
    console.log(data.toString());
});