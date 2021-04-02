window.onload = function(){
  var box = document.getElementById("box"),
      btn = box.getElementsByTagName("input"),
      go = box.getElementsByTagName("a")[0];

  function showMes(object){
    alert(object.value);
  }

  for(var i=0; i<btn.length; i++){
    this.eventUtil.addHandle(btn[i], "click", function(e){
      e = eventUtil.getEvent(e);
      showMes(this);
      alert(eventUtil.getTarget(e).nodeName);
    });
  }

  this.eventUtil.addHandle(go, "click", function(e){
    e = eventUtil.getEvent(e);
    eventUtil.preventDefault(e);
  });
}