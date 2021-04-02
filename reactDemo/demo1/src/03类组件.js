import React from 'react'
import ReactDOM from 'react-dom'

/**
 * 类组件：动态组件
 * 复合组件：既包含函数组件，又包含类组件
 * 注意：函数组件以及类组件名必须首字母大写
 */

 function HelloWorld(props){
     return (
         <div>
             <h1>Hello, {props.name}!</h1>
         </div>
     );
 }
 class ExampleComponent extends React.Component{
     render(){
         console.log(this);
         return(
             <div>
                 {/**调用函数组件并传参 */}
                 <HelloWorld name={this.props.name}/>
                 {/**类组件传参 */}
                 <span>welcome to my {this.props.place}</span>
             </div>

         );
     }
 }
ReactDOM.render(
    <ExampleComponent name="CT" place="heart"/>,
    document.getElementById('root')
);