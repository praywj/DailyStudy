//object基础
var obj = {theme:"stu",
          name:{
              fisrtname: "wu",
              lasrname: "jin"
          }};
//1. 键值对访问
for(var x in obj){

    if(Object.prototype.toString.call(obj[x])==='[object Object]'){
        for(var xx in obj[x]){
            console.log(x + '.' + xx + '=' + obj[x][xx]);
        }
    }else
    {
        console.log(x + '=' + obj[x]);
    }
}
for(let key of Object.keys(obj)){
    console.log("key:" + key + " value:" + obj[key]);
}

for(let [key, value] of Object.defineProperties(obj)){
    console.log("key:" + key + " value:" + value);
}
//2. Object.hasOwnProperty()  某个对象是否含有指定的属性
console.log("obj是否含有theme: " + obj.hasOwnProperty('theme'));
//判断Object
console.log(Object.prototype.toString.call(obj)==='[object Object]');