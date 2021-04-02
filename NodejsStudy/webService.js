/**
 * 利用HTTP模块 URl模块 PATH模块 FS模块创建一个WEB服务器
 * 1. 键入链接即可加载网页或者下载数据
 */
const http = require('http');
http.createServer(function(request, response){
    
    console.log(request.url);
}).listen(8081);