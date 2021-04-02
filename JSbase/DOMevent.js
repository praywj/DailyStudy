var eventUtil = {
    //添加事件
    /**
     * element:为哪个元素绑定事件
     * type：事件类型 如click
     * handle：需要处理的函数
     */
    addHandle:function(element, type, handle){
        //DOM2级
        if(element.addEventListener){
            // false:表示在冒泡阶段  true：表示在捕获阶段
            element.addEventListener(type, handle, false);
        }
        //IE
        else if(element.attachEvent){
            element.attachEvent('on'+type, handle);
        }
        //DOM0
        else{
            element['on'+type] = handle;
        }
    },
    //删除事件
    removeHandle:function(element, type, handle){
        if(element.removeEventListener){
            element.removeEventListener(type, handle, false);
        }else if(element.detachEvent){
            element.detachEvent('on'+type, handle);
        }else{
            element['on'+type]=null;
        }
    },

    //获取事件
    getEvent(event){
        return event?event:window.event;
    },
    //获取DOM/IE事件目标
    getTarget(event){
        return event.target || event.srcElement;
    },
    //获取事件类型
    getType(event){
        return event.type;
    },
    //阻止事件冒泡
    stopPropagation:function(event){
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble=true;
        }
    },
    //阻止事件默认行为
    preventDefault:function(event){
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue = false;
        }
    }
}