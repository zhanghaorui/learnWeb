//  使用node.js 写文件

var fs = require('fs');

//  要写入的文件路径,要写入的文件内容,回调函数只接受一个参数  
// error
//  成功: 文件写入成功
        //   error是null
    // 失败: 文件写入失败
            //  error是错误对象 
fs.writeFile('./test.txt', 'hey girl long time no see', function(err) {
    console.log('文件写入成功');
})