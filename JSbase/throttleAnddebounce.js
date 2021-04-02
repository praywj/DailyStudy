//节流：在指定时间间隔内只执行一次任务
function throttle(func, await){
    //事件触发时立即执行，停止触发时再执行一次
    let previous = 0; //上一次事件执行的时间
    let timeout, context, args;
    let later = function() {
        previous = +new Date();
        timeout = null;
        func.apply(context, args);
    }
    let throttled =  function() {
        context = this;
        args = arguments;
        let now = +new Date(); //获取当前时间戳
        let remain = await - (now - previous); //离下次时间执行还有多久
        // 规定时间间隔已到或者调了系统时间 相当于首次触发立即执行
        if(remain <= 0 || remain > await) {
            //当间隔时间已到但是上一次定时器还未执行时，解决定时器时间不准
            if(timeout){
                clearTimeout(timeout);
                timeout = null;
            }
            //更新上一次执行的时间
            previous = now;
            func.apply(context, args);
        }else if(!timeout) {
            //再次触发事件时如果定时器存在，则不执行，等到定时器执行函数清空定时器，再设置下一个定时器
            timeout = setTimeout(later, remain);
        }
    }
    return throttled;
}

//防抖：只有任务触发的时间间隔超过一定时间才会执行
function debounce(func, await, immediate) {
    let timeout;
    let debounced =  function() {
        //保证this指向触发的事件对象
        let context = this;
        //保证提供事件对象 event不为undefined
        let args = arguments;
        //1.如果ns内触发了，则重新计时 2.保证第一次触发能立即执行
        if(timeout) clearTimeout(timeout); //注意：清除定时器以后timeout值还在
        if(immediate) {
            //先执行一次
            //如果执行过，则不执行
            let callNow = !timeout;
            timeout = setTimeout(function() {
                timeout = null;
            }, await);   //setTimeout返回的为定时器id
            if(callNow) func.call(context, args);
        }else {
            timeout = setTimeout(function() {
                func.call(context, args);
            }, await);
        }
    }
    return debounced;
}

