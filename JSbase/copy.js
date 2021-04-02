//浅拷贝
//1.使用Object.assign({}, a)
//2. {...a}

//深拷贝 会忽略undefined，symbol，函数，不能解决循环引用的对象
let obj1 = {
    name1: undefined,
    name2: [1, 2, 3]
}

let obj2 = JSON.parse(JSON.stringify(obj1));

function deepcopy(ori, target){
    target = target || {};
    for(let p in ori){
        if(ori.hasOwnProperty(p)){
            //值是对象
            if(typeof(ori[p]) === 'object' && ori[p]){
                //如果是数组
                if(ori[p] instanceof Array){
                    target[p] = [];
                    deepcopy(ori[p], target[p]);
                }else{
                    target[p] = {};
                    deepcopy(ori[p], target[p]);
                }
            }else{
                target[p] = ori[p];
            }
        }
    }
    return target;
}
