//使用Event对象自定义事件
var event = new Event('testEvent');
var dom = document.documentElement;
dom.addEventListener('testEvent', function(e){
    e = e || window.e;
    console.log('aa');
})

//触发事件对象
dom.dispatchEvent(event);


//使用CustomEvent实现
var myClick = new CustomEvent('myClick', {detail:{name:'ww'}})
dom.addEventListener('myClick', function(e){
    e = e || window.e;
    console.log(e.detail)
})
dom.dispatchEvent(myClick)