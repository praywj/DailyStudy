<template>
  <div class="todo" >
    <div class="todo-container">
      <todo-add @add='add'/>
      <todo-list :todos='todos' />
      <todo-footer :todos='todos' @selectAll="selectAll" @clear="clear"/>
    </div>
  </div>
</template>

<script>
import todoAdd from './components/todoAdd.vue'
import todoList from './components/todoList.vue'
import todoFooter from './components/todoFooter.vue'
import PubSub from 'pubsub-js'
export default {
    data (){
        return{
            todos:[
                {title: 'apple', checked: false},
                {title: 'orange', checked: true},
                {title: 'football', checked: false},
            ]
        }
    },
    mounted(){
        //订阅消息  发布订阅可适用于祖孙 兄弟等
        PubSub.subscribe('delete', (msg, index)=>{
            this.deleteA(index);
        });
    },
    methods: {
        add(todo){
            this.todos.unshift(todo);
        },
        deleteA(index){
            if(window.confirm(`确定要删除${this.todos[index].title}吗?`)){
                this.todos.splice(index, 1)
            }
            
        },
        selectAll(All){
            if(All){
                this.todos.forEach(todo=>todo.checked=true);
            }else{
                this.todos.forEach(todo=>todo.checked=false);
            }
        },
        clear(){
            if(window.confirm(`确定要删除所有已完成项目吗?`)){
                const check = this.todos.filter(todo=>!todo.checked);
                this.todos = check;
            }
            
        }
    },
    components:{
        todoAdd,
        todoList,
        todoFooter
    }
};
</script>

<style scoped>
.todo {
  width: 600px;
  border: 1px solid gainsboro;
  margin: 0 auto;
}
.todo-container {
  padding: 10px;
}
</style>