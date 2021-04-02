//允许函数访问该函数外定义的变量
//内部函数访问外部函数的变量，外部函数返回内部函数
//1. 可用于封装私有变量  2.多参数的函数变成单参数的函数
function lazy_sum(arr){
    var sum = function(){
        return arr.reduce(function(x,y){
            return x+y;
        });
    }
    return sum;
}


function count(){
    var arr = [];
    for(var i=0;i<=3;i++){
        arr.push(function(){
            return i*i;
        });
    }
    return arr;
}
//arr中push的是一个方法，不会立即执行，这里可以使用匿名函数解决该问题

function countt(){
    var arr = [];
    for(var i=0;i<=3;i++){
        arr.push((function(n){
            return function(){
                return n*n;
            }
        })(i));
    }
}

//封装私有变量
function counter(init){
    var x = init || 0;
    return{
        count:function(){
            x+=1;
            return x;
        }
    }
}

function repeat(t){
    var text = t || 'a';
    for(var i=0;i<5;i++){
        (function(j){
            setTimeout(function timer(){
                console.log(text + j);
            },1000);
        })(i);
    }
}
console.log(repeat('aa'));

//箭头函数
var arr = x=>x+1;
console.log(arr(2));

//可变参数
var arr_change = (x, y, ...rest) => {
    var i, sum = x + y;
    for (i=0; i<rest.length; i++) {
        sum += rest[i];
    }
    return sum;
}
console.log(arr_change(1,2,3,4,5));

//箭头函数this总是指向词法作用域
var obj = {
    birth: 1990,
    getAge: function () {
        var b = this.birth; // 1990
        var fn = () => new Date().getFullYear() - this.birth; // this指向obj对象
        return fn();
    }
};
console.log(obj.getAge());