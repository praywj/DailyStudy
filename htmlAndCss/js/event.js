// DOM2级事件处理程序 以及IE事件处理程序
var eventUtil = {
  addHandle:function(element, type, handle){
    if(element.addEventListener){
      element.addEventListener(type, handle, false);
    }
    else if(element.attachEvent){
      element.attachEvent("on" + type, handle);
    }
    else{
      element["on" + type] = handle;
    }
  },

  removeHandle:function(element, type, handle){
    if(element.removeEventListener){
      element.removeEventListener(type, handle, false);
    }
    else if(element.detachEvent){
      element.detachEvent("on" + type, handle);
    }
    else{
      element["on" + type] = null;
    }
  },

  getEvent:function(event){
    return event? event:window.event;
  },
  getType:function(event){
    return event.type;
  },
  getTarget:function(event){
    return event.target || event.srcElement;
  },
  stopPropagation:function(event){
    if(event.stopPropagation){
      event.stopPropagation();
    }
    else{
      event.cancelBubble = true;
    }
  },
  preventDefault:function(event){
    if(event.preventDefault){
      event.preventDefault();
    }
    else{
      event.returnValue = false;
    }
  }
}
