import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


/**
 * ReactDOM：渲染页面
 * JSX：Javascript XML
 * 优点：
 *      1. 执行更快，编译为js代码时进行优化
 *      2. 类型更安全，编译过程出错则不能编译
 *      3. JSX编写模板相对更加简单
 * 注意：
 *      1. JSX必须要有根节点
 *      2. 普通gtml元素需要小写，大写会默认为组件
 *      
 */
//可以通过object来设置css中的style属性，第二个单词开始大写，或者将属性名用''
let styleStr = {
    background: "red",
    marginLeft: "30px"
}
//多个类共存的两种方法
let classStr = ['header', 'main'].join(' ')
let oneClass = 'header'
let element = (
    <div>
        {/**在JSX语法中必须要在表达式括号内书写注释，否则报错 */}
        <h1 className={classStr}>
            Just a Test111
        </h1>
        <h1 style={styleStr}>
            Just a Test
        </h1>
        <h1 className={'main ' + oneClass}>
            Just a Test2222
        </h1>
    </div>
);
ReactDOM.render(
    element,
    document.getElementById('root')
);