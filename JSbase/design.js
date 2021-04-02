//1.简单工厂模式：又叫静态工厂方法，根据不同参数创建不同对象，并赋予属性和方法
let UserFactory = function(role){
    function User(opt){
        this.name = opt.name;
        this.view = opt.view;
    }
    //根据不同参数返回结果不同
    switch(role){
        case 'superAdmin':
            return new User(superAdmin);
        case 'admin':
            return new User(Admin);
        default:
            throw new Error('error')
    }
}

//2.工厂方法：主要负责用于创建多类产品的实例  /构造函数
function createPerson(name ,age){
    var obj=new Object;
    obj.name = name;
    obj.age = age;
    obj.console = function(){
        console.log(this.name);
    }
    return obj;
}

//3.单例模式：一个实例只能被创建一次 网页计数器
let singleCase = function(name){
    this.name = name;
}
singleCase.prototype.getName = function(){
    return this.name;
}
let getInstance = (function(){
    var instance = null;
    return function(name){
        if(!instance){
            instance = new singleCase(name);
        }
        return instance;
    }
})();

//4.观察者/发布-订阅模式：解决类与对象，对象与对象之间的耦合，两个组件之间的通信
let Observer=
  (function(){
    let _message={};
    return {
      //注册接口,
        //1.作用:将订阅者注册的消息推入到消息队列
        //2.参数:所以要传两个参数,消息类型和处理动作,
        //3.消息不存在重新创建,存在将消息推入到执行方法
        
      regist:function(type,fn){
        //如果消息不存在,创建
        if(typeof _message[type]==='undefined'){
          _message[type]=[fn];
        }else{
          //将消息推入到消息的执行动作
          _message[type].push(fn);
        }
      },

      //发布信息接口
        //1.作用:观察这发布消息将所有订阅的消息一次执行
        //2.参数:消息类型和动作执行传递参数
        //3.消息类型参数必须校验
      fire:function(type,args){
        //如果消息没有注册,则返回
        if(!_message[type]) return;
          //定义消息信息
          var events={
            type:type, //消息类型
            args:args||{} //消息携带数据
          },
          i=0,
          len=_message[type].length;
          //遍历消息
          for(;i<len;i++){
            //依次执行注册消息
            _message[type][i].call(this,events);
          }
      },

      //移除信息接口
        //1.作用:将订阅者注销消息从消息队列清除
        //2.参数:消息类型和执行的动作
        //3.消息参数校验
      remove:function(type,fn){
        //如果消息动作队列存在
        if(_message[type] instanceof Array){
          //从最后一个消息动作序遍历
          var i=_message[type].length-1;
          for(;i>=0;i--){
            //如果存在该动作在消息队列中移除
            _message[type][i]===fn&&_message[type].splice(i,1);
          }
        }
      }
    }
  })()
  //测试用例
  //1.订阅消息
  Observer.regist('test',function(e){
    console.log(e.type,e.args.msg);
  })

  //2.发布消息
  Observer.fire('test',{msg:'传递参数1'});
  Observer.fire('test',{msg:'传递参数2'});
  Observer.fire('test',{msg:'传递参数3'});

//测试用例
  //1.订阅消息
  Observer.regist('test',function(e){
    console.log(e.type,e.args.msg);
  })

  //2.发布消息
  Observer.fire('test',{msg:'传递参数1'});
  Observer.fire('test',{msg:'传递参数2'});
  Observer.fire('test',{msg:'传递参数3'});

//5.中介模式：设置一个中间层,处理对象之间的交互  需要知道发布和订阅两者的信息

//6.访问模式：通过继承封装一些该数据类型不具备的属性, 对于不同类别继承基类

//7.原型模式：实现继承


//8.适配器模式：将一个接口转换成客户端需要的接口而不需要去修改客户端代码，使得不兼容的代码可以一起工作


//9.装饰者模式：不改变原对象的基础上,给对象添加属性或方法
let decorator=function(input,fn){
    //获取事件源
    let input=document.getElementById(input);
    //若事件源已经绑定事件
    if(typeof input.onclick=='function'){
      //缓存事件源原有的回调函数
      let oldClickFn=input.onclick;
      //为事件源定义新事件
      input.onclick=function(){
        //事件源原有回调函数
        oldClickFn();
        //执行事件源新增回调函数
        fn();
      }
    }else{
      //未绑定绑定
      input.onclick=fn;
    }
  }

