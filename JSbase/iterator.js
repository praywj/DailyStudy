//1.在Symbol.iterator的属性上部署遍历器
class RangeIterator{
    constructor(start, stop){
        this.value = start;
        this.stop = stop;
    }
    [Symbol.iterator]() {return this;}
    next(){
        var value = this.value;
        if(value<this.stop){
            this.value++;
            return {value:value, done:false};
        }else{
            return {value:undefined, done:true};
        }
    }
}
function range(start, stop){
    return new RangeIterator(start, stop);
}
for(var i of range(0, 3)){
    console.log(i);
}
//2.在构造函数的原型链上部署Symbol.iterator
function Obj(value) {
    this.value = value;
    this.next = null;
}
Obj.prototype[Symbol.iterator] = function(){
    var iterator = {
        next:next
    };
    var cur = this;
    function next(){
        if(cur){
            var value = cur.value;
            var done = false;
            cur = cur.next;
            return{
                done:done,
                value:value
            }
        }else{
            return{
                done:true
            }
        }
    }
    return iterator;
}
var one = new Obj(1);
var two = new Obj(2);
one.next = two;
for( var i of one){
    console.log(i)
}

//iterator实现
var makeIterator = function (arr) {
    var count=0;
    return{
        //返回一个对象
        next:function () {
            return count<arr.length ? {value:arr[count++]}:{done:true}
        }
    }
}
var it = makeIterator(['a', 'b', 'c']);

var arr = ['w', 'j'];
var iter = arr[Symbol.iterator]();
console.log(iter.next());

console.log('数组for...of...: ');
for(var i of arr){
    console.log(i);
}
console.log('数组for...in...: ');
for(var i in arr){
    console.log(i);
}


