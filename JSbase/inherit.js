//继承机制
// 1. 对象冒充
function ClassA(sColor){
    this.color = sColor;
    this.sayColor = function(){
        alert(this.color);
    }
}

function ClassB(sColor, sName){
    this.newMethod = ClassA;  //函数 newMethod指向ClassA
    this.newMethod(sColor);
    delete this.newMethod; //删除对ClassA的应用,避免覆盖ClassA的相关属性和方法
    //以上三行代码可替换为下面这一行
    // ClassA.call(this, sColor);
    // ClassA.apply(this, new Array(sColor));
    this.name = sName;
    this.sayName = function(){
        alert(this.name);
     }
}
var objA = new ClassA("blue");
var objB = new ClassB("red", "John");
objA.sayColor();	//输出 "blue"
objB.sayColor();	//输出 "red"
objB.sayName();		//输出 "John"

//对象冒充实现多重继承
function ClassZ(sColor, sName){
    this.newMethod = ClassA;
    this.newMethod(sColor);
    delete this.newMethod;

    this.newMethod = ClassB;
    this.newMethod(sColor, sName);
    delete this.newMethod;
}

// 2. 原型链
//prototype 对象是个模板，要实例化的对象都以这个模板为基础。总而言之，prototype 对象的任何属性和方法都被传递给那个类的所有实例。原型链利用这种功能来实现继承机制。
//不能使用带参数的构造函数
function ClassX(){

}
ClassX.prototype.color = "blue";
ClassX.prototype.sayColor = function(){
    alert(this.color);
};

function ClassY(){

}
ClassY.prototype = new ClassX(); //ClassB 的 prototype 属性设置成 ClassA 的实例。
ClassY.prototype.name = "WJ";
ClassY.prototype.sayName = function(){
    alert(this.name);
}
var objA = new ClassX();
var objB = new ClassY();
objA.color = "blue";
objB.color = "red";
objB.name = "John";
objA.sayColor();
objB.sayColor();
objB.sayName();
alert(objB instanceof ClassX);	//输出 "true"
alert(objB instanceof ClassY);	//输出 "true"

//3. 混合方式
// 用对象冒充继承构造函数的属性，用原型链继承 prototype 对象的方法
function ClassW(sColor){
    this.color = sColor;
}
ClassW.prototype.sayColor = function(){
    alert(this.color);
}

function ClassJ(sColor, sName){
    ClassW.call(this, sColor);
    this.name = sName;
}
ClassJ.prototype = new ClassW();
//校正构造函数
ClassJ.prototype.constructor = ClassJ;
ClassJ.prototype.sayName = function () {
    alert(this.name);
};

//4.使用es6
class Parent{
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
}
class Child extends Parent{
    constructor(name, age){
        super(name);
        this.age = age;
    }
    getAge(){
        return this.age;
    }
}

