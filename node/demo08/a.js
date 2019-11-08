//  require 是一个方法
    //  他的作用是用来加载模块的
    //  在Node中 模块有三种
        //  具名的核心模块   例如  fs、http
        //  用户自己编写的文件模块
            //  相对路径必须加  ./

   
console.log('a开始执行');
require('./b');   
console.log('a执行结束');