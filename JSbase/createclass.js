// 构造函数+原型方式
// 非函数属性在构造函数中创建，函数使用原型创建实例
function Car(sColor, iDoors, iMpg){
    this.color = sColor;
    this.doors = iDoors;
    this.mpg = iMpg;
    this.drivers = new Array("Mike", "John");

}

Car.prototype.showColor = function(){
    alert(this.color);
};

var oCar1 = new Car("red", 4, 23);
var oCar2 = new Car("blue", 5, 22);

oCar1.drivers.push("Amy");
// alert(oCar1.drivers);
// alert(oCar2.drivers);

//动态原型方法
function Car1(sColor, iDoors, iMpg){
    this.color = sColor;
    this.doors = iDoors;
    this.mpg = iMpg;
    this.drivers = new Array("Mike", "John");

    if(typeof Car1._initialized == 'undefined'){
        Car1.prototype.showColor = function(){
            alert(this.color);
        }
    }
    Car1._initialized = true;
}

//自定义new
function new_object(...args){
    console.log(args);
    //1. 创建新对象
    //2. 将该对象原型指向构造函数的原型
    let constructor = args[0];
    let obj = Object.create(constructor.prototype);
    //3. 将this指向新对象
    let res = constructor.call(obj, ...args.slice(1))
    if ((typeof res === 'object' || typeof res === 'function') && res != null) {
        return res;
    } else {
        return obj;
    }
}
var test_obj = new_object(Car, 'a', 'b', 'c');
console.log(test_obj)

function create(){
    console.log(arguments)
    //1. 创建一个新的对象
    let obj=new Object();
    //获得构造函数
    let con = [].shift.call(arguments); //[]为Array构造函数的实例  将类数组转化为真正的数组
    //2.链接到原型
    obj.__proto__ = con.prototype;
    //3.绑定this 执行构造函数
    let result = con.apply(obj, arguments)
    //4.返回新对象 确保new出来的是个对象
    return typeof result == 'Object' ? result:obj;
}
var test_create = create(Car, 'a', 'b', 'c');
console.log(test_create)

Function.prototype.Mycall = function(){
    let context = arguments[0] || window;
    context.fn = this;
    let args = [...arguments].slice(1);
    let result = context.fn(...args);
    delete context.fn;
    return result;
}

Function.prototype.Myapply = function(){
    let context = arguments[0] || window;
    context.fn = this;
    let result;
    //判断是否有第二个参数
    if(arguments[1]){
        result = context.fn(...arguments[1]);
    }else{
        result = context.fn();
    }
    delete context.fn;
    return result;
}

Function.prototype.Mybind = function(context){
    if(typeof this !== 'function'){
        throw Error('');
    }
    let self = this;  //是一个函数
    let args = [...arguments].slice(1);
    //返回一个函数
    return function F(){
        //如果是new 操作
        if(this instanceof F){
            return new self(...args, ...arguments)
        }
        return self.apply(context, args.concat(...arguments))
    }
}