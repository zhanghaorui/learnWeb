//  require 方法有两个作用
// 1. 加载文件模块并执行里面的代码
// 2. 拿到被加载文件模块导出的接口对象
//  每个文件模块都提供了一个对象： exports
//  exports 默认是一个空对象


var res = require('./add');

console.log(res.age);
console.log(res.add(10, 20));