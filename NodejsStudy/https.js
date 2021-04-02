//1. 引入http模块
const http = require('http')
//2. 创建web服务
/**
 * request：接收客户端传过来的数据
 * response：给客户端的响应数据
 */
http.createServer(function (request, response) {
  //设置响应头
  response.writeHead(200, {"Content-Type": "text/html;charset='utf-8'"});
  //输出Hello World并结束响应
  response.write('Hello World');
  response.end(); //可传入参数在页面显示
}).listen(8081);  //监听端口，最好大于3000以免冲突
