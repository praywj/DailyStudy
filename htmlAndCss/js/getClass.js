function getClass(clsName, parent){
  var oparent = parent? document.getElementById(parent) : document,
      ele = [],
      elements = oparent.getElementsByTagName('*');  // 获取所有子标签
  for( var i=0; i<elements.length; i++){
    if(elements[i].className==clsName){
      ele.push(elements[i]);
    }
  }

}