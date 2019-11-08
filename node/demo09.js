//   http 中文乱码  

var http = require('http');

var server = http.createServer(function(request, response) {});

server.on('request', function(req, res) {
    res.setHeader('Content-Type', 'text/palin; charset=utf-8');
    res.end('asd阿斯顿');
    //  在服务器端默认发送的数据，其实是utf8编码的内容
    //  但是浏览器不知道你是  utf8 编码的内容
    //  浏览器在不知道服务器相应内容的编码的情况下, 会按照当前操作系统的默认编码去解析
    //  中文操作系统默认的编码是   gbk
    //  解决方法就是正确的告诉浏览器 我给你发送的内容是什么编码的
})

server.listen(8080, function() {
    console.log('启动服务')
})