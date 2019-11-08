//  使用node 构建一个web服务器

// 在Node中 专门提供了一个核心模块  http
//  http这个模块的职责就是帮你创建编写服务器的  

// 1. 加载 http 核心模块
var http = require('http');

// 2. 使用http.createServer() 方法 创建一个web服务器
//     返回一个Server实例
var server = http.createServer();

// 3. 服务器提供服务
//    发请求
//    接受请求
//    处理请求
//    给反馈(发送响应)
//    注册 request请求事件
//  当客户端请求过来，就会自动触发服务器的request请求事件，然后执行第二个参数  回调处理
server.on('request',function(){
    console.log('收到客户端的请求')
});

//  4. 绑定端口号，启动服务器
server.listen(8888,function() {
    console.log("服务器启动成功了，可以通过http://localhost:8888/ 来访问");
});
