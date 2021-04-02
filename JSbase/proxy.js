/**
 * new Proxy(target, handler):相当于一个代理，对外界的访问进行过滤和改写
 * target: 要拦截的目标对象
 * handler: 为一个对象，用来定制拦截行为,如果没设置handler，访问handler就等同于访问target
 * return: Proxy实例
 */

var person={
    name: "wujin"
};
var obj = new Proxy(person,{
    get: function(target, props){
        if(props in target){
            return target[props];
        }else{
            throw new ReferenceError(props + "does not exist");

        }
    }
});
console.log(obj.name);
var oobj = Object.create(obj);
console.log(oobj.test);
