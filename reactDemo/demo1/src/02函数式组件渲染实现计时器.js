import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * 函数式组件适用于静态组件，无交互的组件页面
 * 实现一个计时器
 * react中只有单一的根节点root，且是不可变元素，所以需要根据时间创建不同的react root
 * react元素渲染到DOM中使用：ReactDom.render(element, root);
 */
function timer(){
  const element = (
    <div>
      <h1>Hello, the time is {new Date().toLocaleTimeString()}.</h1>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}
setInterval(timer, 1000);

// 函数式组件渲染方式:通过props传值
function Clock(props){
  return (
    <div>
      <h1>Hello, the time is {props.date.toLocaleTimeString()}.</h1>
    </div>
  );
}
function Run(){
  const element = (
    <Clock date={new Date()}/>
  );
  ReactDOM.render(element, document.getElementById('root'));
}
setInterval(Run, 1000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
