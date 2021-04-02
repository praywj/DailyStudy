/**
 * 同步和异步任务分别进入不同的执行"场所"，同步的进入主线程，异步的进入Event Table并注册函数。
 * 当指定的事情完成时，Event Table会将这个函数移入Event Queue。
 * 主线程内的任务执行完毕为空，会去Event Queue读取对应的函数，进入主线程执行。
 * 上述过程会不断重复，也就是常说的Event Loop(事件循环)。
 */
setTimeout(function(){
    console.log('定时器开始啦')  //宏任务
});

new Promise(function(resolve){
    console.log('马上执行for循环啦');  //同步1
    for(var i = 0; i < 10000; i++){
        i == 99 && resolve();
    }
}).then(function(){
    console.log('执行then函数啦')   //微任务
});

console.log('代码执行结束');  //同步2

