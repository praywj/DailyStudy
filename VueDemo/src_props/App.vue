<template>
  <div class="todo" >
    <div class="todo-container">
      <todo-add :add='add'/>
      <todo-list :todos='todos' :deleteA='deleteA' />
      <todo-footer :todos='todos' :selectAll="selectAll" :clear="clear"/>
    </div>
  </div>
</template>

<script>
import todoAdd from './components/todoAdd.vue'
import todoList from './components/todoList.vue'
import todoFooter from './components/todoFooter.vue'
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
    methods: {
        add(todo){
            this.todos.unshift(todo);
        },
        deleteA(index){
            this.todos.splice(index, 1)
        },
        selectAll(All){
            if(All){
                this.todos.forEach(todo=>todo.checked=true);
            }else{
                this.todos.forEach(todo=>todo.checked=false);
            }
        },
        clear(){
            const check = this.todos.filter(todo=>!todo.checked);
            this.todos = check;
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