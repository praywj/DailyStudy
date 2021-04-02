import React from 'react'
import ReactDOM from 'react-dom'

/**
 * 1、初始化
 * 2、挂载
 * 3、更新
 * 4、移除
 * 顺序：1 2 3 4 9 6 3 7
 */

 class LifeCycle extends React.Component{
     constructor(props){
         super(props);
         this.state = {
            msg: 'just a test'
         };
         console.log("1、constructor构造函数");
     }
     componentWillMount(){
         console.log("2、componentWillMount组件将要挂载");
     }
     componentDidMount(){
         console.log("4、componentDidMount组件已经挂载");
     }
     componentWillReceiveProps(){
         console.log("5、componentWillReceiveProps组件将要接收新的state和props");
     }
     componentWillUpdate(){
         console.log("6、componentWillUpdate组件将要更新");
     }
     componentDidUpdate(){
         console.log("7、componentDidUpdate组件已经更新");
     }
     componentWillUnmount(){
         console.log("8、componentWillUnmount组件将要移除");
     }
     shouldComponentUpdate(){
         // 如果希望更新，就返回true
         console.log("9、shouldComponentUpdate组件接收到新的state或props，判断是否更新");
         return true;
     }
     changeMsg=()=>{
        this.setState({
            msg: '我变了吗'
        })
    }
     render(){
         console.log("3、render组件渲染完毕");
         return(
             <div>
                 <h1>{this.state.msg}</h1>
                 <button onClick={this.changeMsg}>组件更新</button>
             </div>
         );
     }
 }

 ReactDOM.render(
     <LifeCycle />,
     document.getElementById('root')
 );

