import React from 'react'
import ReactDOM from 'react-dom'
/**
 * 子传父：
 * 1. 父元素设置函数f1并传递给子元素
 * 2. 子元素接收f1并将要传的值作为调用f1的参数(f1在子元素的props中)
 */

 class ParentCom extends React.Component{
     constructor(props){
         super(props);
         this.state = {
             childData: ''
         }
     }

     getChildData = (data)=>{
        this.setState({
            childData: data
        });
     }
     render(){
         return (
             <div>
                 <h1>子元素传过来的值：{this.state.childData}</h1>
                 <ChildCom getChildData={this.getChildData}/>
             </div>
         );
     }
 }

 class ChildCom extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message: '子元素传过来的数据'
        }
    }

    sendToP = ()=>{
        // 调用父元素的方法并将要传的值作为参数
        this.props.getChildData(this.state.message);
    }
    render(){
        return (
            <div>
                <button onClick={this.sendToP}>子传父</button>
                <button onClick={()=>{this.props.getChildData(this.state.message);}}>子传父</button>
                {/**错误写法如下
                 * 函数加入()表示立即执行该函数的代码，所以在页面渲染时就会调用setstate，而setstate又会引起页面渲染，如此死循环
                 * <button onClick={this.props.getChildData(this.state.message)}>子传父</button>
                 */}
            </div>
        );
    }
}

ReactDOM.render(
    <ParentCom />,
    document.getElementById('root')
);