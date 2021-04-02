// HTTP 无状态请求  响应和请求的组成
/**
 * 1. 建立TCP连接
 * 2. Web浏览器向web服务器发送请求命令
 * 3. web浏览器发送请求头信息
 * 4. web服务器应答
 * 5. Web服务器发送应答头信息
 * 6. web服务器向浏览器发送数据
 * 7. web服务器关闭tcp连接
 */
//AJAX请求是异步执行的，也就是说，要通过回调函数获得响应。
const getJSON = function(url){
    const promise = new Promise((resolve, reject)=>{
        var xmlhttp;
        if(window.XMLHttpRequest){
            xmlhttp = new XMLHttpRequest();
        }else{
            xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
        }
        //每当 readyState 改变时，就会触发 onreadystatechange 事件
        xmlhttp.onreadystatechange = function(){
            /**
             * 0：请求未初始化
             * 1：服务器连接已经建立
             * 2：请求已经接收
             * 3：请求处理中
             * 4：请求已经完成，且响应已经就绪
             */
            if(xmlhttp.readyState==4){
                //请求已完成，且响应已就绪
                if(xmlhttp.status == 200){
                    // 成功，通过responseText拿到响应的文本:
                    resolve(xmlhttp.responseText);
                }else{
                    reject(xmlhttp.status);
                }
            }else{
                return;
            }
        }
        //发送请求 open(请求方法，URL地址，是否异步默认为true)
        xmlhttp.open('GET',url);
        xmlhttp.responseType = 'json';
        xmlhttp.send();
        return promise;
    })
}

    //POST
    // xmlhttp.open('POST','demo_get2.asp');
    // //如果需要post数据，则要添加
    // xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    // xmlhttp.send("fname=Bill&lname=Gates");

getJSON('').then(json=>{
    console.log('Success' + json);
}).catch(err=>{
    console.log('Fail' + err)
})