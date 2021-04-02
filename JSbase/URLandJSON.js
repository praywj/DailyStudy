//URLtoJSON
//http://www.xxx.com/test?name=zhangshan&age=100#hello
function URLtoJSON(url){
    var name = url.split('?')[1].split('&');
    var json = {};
    for(let i=0;i<name.length;i++){
        let subname = name[i].split('=');
        let k = decodeURIComponent(subname[0]);
        let v = decodeURIComponent(subname[1]);
        json[k]=v;
    }
    return json;

}

function JSONtoURL(json){
    var url_arr = [];
    for(k in Object.keys(json)){
        let t = encodeURIComponent(k) + '=' + encodeURIComponent(json[k]);
        url_arr.push(t);
    }
    return url_arr.join('&');
}