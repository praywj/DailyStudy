import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

/**
 * 父传子：通过组件属性
 */

 class ParentCom extends React.Component{
     constructor(props){
         super(props);
         this.state = {
             isActive: false
         }
     }

     changeChild = ()=>{
        this.setState({
            isActive: !this.state.isActive
        });
     }

     render(){
        return (
            <div>
                <button onClick={this.changeChild}>父元素控制子元素的显示</button>
                <ChildCom isActive={this.state.isActive}/>
            </div>
        );
     }
 }

 class ChildCom extends React.Component{
     constructor(props){
         super(props);
     }

     render(){
         let strClass =  this.props.isActive ? ' active': '';
         return (
            <div>
                <h1 className={'content' + strClass}>我是子元素</h1>
            </div>
        );
     }
 }

 ReactDOM.render(
     <ParentCom />,
     document.getElementById('root')
 );

