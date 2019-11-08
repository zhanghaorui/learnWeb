//    服务器端做出响应

var http = require('http');

var server = http.createServer();

// request 请求事件处理函数，需要接受两个参数:
    // Requeset 请求对象
    //   请求对象可以用来获取客户端的一些请求信息，例如请求路径
    // Response 响应对象
    //   响应对象可以用来可以给客户端发送响应消息

server.on('request',function(req, res){
    // http://localhost:8888/     /
    // http://localhost:8888/a    /a
    console.log('收到客户端的请求,请求路径是'+req.url);

    // response对象有一个方法  : write 可以用来给客户端发送响应数据
    // write可以使用多次，但是最后一定要使用 end来结束响应，否则客户端会一直等待
    res.write('hello');

    //现在 无论传递什么  返回的都是  hello
        // 当请求不同的路径时，响应不同的结果 


    // 告诉客户端   我的话说完了  你可以呈递给用户了
    res.end();
});


server.listen(8888,function() {
    console.log("服务器启动成功了，可以通过http://localhost:8888/ 来访问");
});
