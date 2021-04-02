import React from 'react'
import ReactDOM from 'react-dom'

/**
 * React状态管理
 * 1. 在构造函数中设置state中属性的初始值
 * 2. 在需要更新state中属性值时通过 this.setState来设置，类似微信小程序
 * 3. 可以在组件/标签上绑定事件，并通过dataset进行传参
 */

 class Tab extends React.Component{
     constructor(props){
         super(props);
         this.state = {
            buttonText: ''
         }
         // 这里需要改变this指向，因为调用该函数的为绑定该事件的按钮，this访问不了state
         this.switchTab = this.switchTab.bind(this);
     }
     switchTab(e){
          console.log(e.target.dataset.index);
          let index = e.target.dataset.index;
          //切勿直接修改state数据，直接state重新渲染内容，需要使用setState
          //通过this.setState修改完数据后，并不会立即修改DOM里面的内容,react会在，
          //这个函数内容所有设置状态改变后，统一对比虚拟DOM对象，然后在统一修改，提升性能。
          this.setState({
            buttonText: `这是按钮${index}`
          });
     }
     render(){
         return(
            <div>
                <button data-index='1' onClick={this.switchTab}>按钮1</button>
                <button data-index='2' onClick={this.switchTab}>按钮2</button>
                <span>{this.state.buttonText}</span>
            </div>
         );
     }
 }

 ReactDOM.render(
     <Tab />,
     document.getElementById('root')
 );