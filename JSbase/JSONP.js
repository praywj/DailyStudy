
//定义回调函数
function callback(data){
    console.log(data);
}

function jsonp(url, callback){
    url = url + `callback=${callback}`;
    //创建script标签，设置src属性
    var script = document.createElement('script');
    script.setAttribute('src', url);
    //添加script标签
    document.getElementsByTagName('body')[0].appendChild(script);
}