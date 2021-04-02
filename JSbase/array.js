//数组乱序
function shuffle1(arr){
    let len = arr.length-1;
    while(len){
        //相当于向下取证整
        let t = (Math.random()*len--) >>> 0;
        [arr[len], arr[t]] = [arr[t], arr[len]]
    }
    return arr;
}

function shuffle2(arr){
    return arr.sort(Math.random()-0.5);
}

//数组扁平化
function flatten1(arr){
    return arr.reduce((re, item)=>{
        return re.concat(Array.isArray(item)? flatten1(item):item);
    }, []);
}

function flatten2(arr){
    //[1,[2,3]].toString()  =>  1,2,3
    return arr.toString().split(',').map(item=>parseInt(item));
}

function flatten3(arr){
    return arr.join(',').split(',').map(item=>parseInt(item));
}

function flatten4(arr){
    var res = [];
    arr.map(item=>{
        if(Array.isArray(item)){
            res = res.concat(flatten4(item));
        }else{
            res.push(item);
        }
    });
    return res;
}

function flatten5(arr){
    while(arr.some(item=>Array.isArray(item))){
        arr = [].concat(...arr);
    }
    return arr;
}


//数组去重
