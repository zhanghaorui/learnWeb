//  node  http 结合url 进行响应


var http = require('http');
//  创建server
var server = http.createServer();
//  监听request请求事件  设置请求处理函数
server.on('request', function(req, res){

    //  处理中文乱码
    res.setHeader('Content-Type', 'text/palin; charset=utf-8');

    //  直接在end的同时结束响应
    // res.end('hello world');


    //  根据不同的请求路径发送不同的响应结果
    //  获取请求路径
    //      req.url 获取到的是端口号之后的那一部分路径
    //          所有的url都是以 / 开头的 
    //  判断路径处理响应

    var url = req.url;
    // if ('/' === url){
    //     res.end('根目录');
    // } else if ('/login' === url) {
    //     res.end('login');
    // } else {
    //     res.end('404');
    // }

    //  返回一个json
    if ('/product' === url) {
        var products = [
            {
                name: 'iphone1',
                price: 9999
            },
            {
                name: 'iphone2',
                price: 99999
            },
            {
                name: 'iphone3',
                price: 999999
            }
        ]

        // 响应内容只能是二进制数据或者字符串   
            //  其他的类型都不行！！！！！
            res.end(JSON.stringify(products));
    }

})
//  绑定端口号，启动服务
server.listen(8080,function(){
    console.log("服务器启动成功");
})
