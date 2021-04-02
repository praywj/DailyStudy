//练习：找出目录下面的所有的目录，然后放在一个数组中
const fs = require('fs');

async function isDir(file){
    // 注意这是一个异步方法
    return new Promise((resolve, reject)=>{
        fs.stat(file, (err, stat)=>{
            if(err){
                console.log(err);
                reject(err);
                return;
            }else {
                if(stat.isDirectory()){
                    resolve(true);
                }else {
                    resolve(false);
                }
            }
        });
    });
}
function searchDir(path){
    fs.readdir(path, async (err, files)=>{
        if(err){
            console.log(err);
        }else {
            //如果files是目录, files为一个array
            for(let i=0; i<files.length; i++){
                if(await isDir(path + '/' + files[i])){
                    console.log(files[i]);
                }
            }
        }
    });
}
searchDir('../Jquery');