import React from 'react'
import ReactDOM from 'react-dom'

/**
 * 列表渲染：手动将数据拼装成数组的JSX对象
 */

 // 疫情跟踪网页：https://wp.m.163.com/163/page/news/virus_report/index.html?_nw_=1&_anw_=1

 function ListItem(props){
     return(
        <li>
            <h3>
                {props.index}:{props.item.title}
            </h3>
            <p>{props.item.content}</p>
        </li>
     )
 }

class ListItem2 extends React.Component{
    constructor(props){
        super(props);
    }
    clickEvent = (index, title,event)=>{
        alert(index + '-' + title + '-' + event);
    }
    render(){
        return(
            <li onClick={(e)=>{this.clickEvent(this.props.index, this.props.item.title, e)}}>
                <h3>
                    {this.props.index}:{this.props.item.title}
                </h3>
                <p>{this.props.item.content}</p>
            </li>
         )
    }
}
class ParentCom extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            messList: [
                {
                    title: '第一节课',
                    content: 'JSX语法'
                },
                {
                    title: '第二节课',
                    content: '函数组件'
                },
                {
                    title: '第三节课',
                    content: '类组件'
                }
            ]
        }
    }
    render(){
        // 列表渲染must是array
        // 方法1：暴力for循环 
        let messArray = [];
        for(let i=0; i<this.state.messList.length; i++){
            let item = (
                <li key={i}>
                    <h3>
                        {this.state.messList[i].title}
                    </h3>
                    <p>{this.state.messList[i].content}</p>
                </li>
            );
            messArray.push(item);
        }
        // 方法2：使用map
        let messArray1 = this.state.messList.map((item, index, arr)=>{
            return (
                <li key={index}>
                    <h3>
                        {index}:{item.title}
                    </h3>
                    <p>{item.content}</p>
                </li>
            )
        })
        // 方法3：封装成子组件
        let messArray2 = this.state.messList.map((item, index, arr)=>{
            return (
                <ListItem2 item={item} index={index} key={index}/>
            )
        })

        return (
            <div>
                <ul>
                    {messArray2}
                </ul>
            </div>
        );
    }
}
ReactDOM.render(
    <ParentCom />,
    document.getElementById('root')
);