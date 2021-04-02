// 创建一个新对象
function create(){
    //1. 创建一个新的对象
    let obj=new Object();
    //获得构造函数
    let con = [].shift.call(arguments); 
    //2.链接到原型
    obj.__proto__ = con.prototype;
    //3.绑定this 执行构造函数
    let result = con.apply(obj, arguments)
    //4.返回新对象 确保new出来的是个对象
    return typeof result == 'object' ? result:obj;
}

//实现instanceof,判断对象的类型，是通过判断对象的原型链中是不是能找到类型的prototype
function Instanceof(left, right){
    // 获得类型的原型
    let prototype = right.prototype;
    // 获得对象的原型
    left = left.__proto__;
    //判断两个原型是否相等
    while(true){
        if(left==null){
            return false;
        }
        if(prototype == left){
            return true;
        }
        left = left.__proto__;
    }
}

//this使用之道
function foo() {
	console.log(this.a)
}
var a = 1
foo()  //1

var obj = {
	a: 2,
	foo: foo
}
obj.foo()  //2
// 以上两者情况 `this` 只依赖于调用函数前的对象，优先级是第二个情况大于第一个情况
// 以下情况是优先级最高的，`this` 只会绑定在 `c` 上，不会被任何方式修改 `this` 指向
var c = new foo() //undefined
c.a = 3
console.log(c.a) //3
//输出为 1 2 undefined 3
// 还有种就是利用 call，apply，bind 改变 this，这个优先级仅次于 new

//实现repeat的三种方法
//1.使用闭包
function repeat(text){
    for(var i=1;i<=5;i++){
        (function(){
            setTimeout(function timer(){
                console.log(text);
            },1000);
        })(i);  //匿名函数
    }
}
repeat("aa");
//2.使用 setTimeout 的第三个参数
function repeat1(text){
    for(var i=1;i<=5;i++){
        setTimeout(function timer(){
            console.log(text);
        },1000,i);
    }
}
repeat1("bb")
//3.使用let
function repeat2(text){
    for(let i=1;i<=5;i++){
        setTimeout(function timer(){
            console.log(text);
        },1000);
    }
}

//call和apply
value =  22;
let aa = {
    value: 11
}
function getValue(name, age) {
    console.log(name + age + this.value)
}
let p = new getValue('ycknew', '22')
getValue.call(aa, 'yckcall', '24')
getValue.apply(aa, ['yckapply', '24'])
getValue.bind(aa)('yckBind','25')

//sort实现
  Array.prototype.st=function(fn){  
    var t;  
    fn=fn||function(x,y){return x-y}; //默认升序
    for(var i=0;i<this.length;i++){  
      for(var j=i;j<this.length;j++){  
        if(fn(this[i],this[j])>0){  
          t=this[i];  
          this[i]=this[j];  
          this[j]=t;  
        }  
      }  
    }  
  } 
