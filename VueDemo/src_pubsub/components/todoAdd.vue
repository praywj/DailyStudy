<template>
    <div class="header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="inputTodo" @keyup.enter='addItem'>
    </div>
</template>

<script>
export default {
    data (){
        return{
            inputTodo:''
        }
    },
    props:{
        // add: Function
    },
    methods:{
        addItem(){
            const input = this.inputTodo.trim();
            if(!input){
                alert('输入为空');
                return;
            }
            const todo = {
                title: input,
                checked: false
            }
            // this.add(todo);
            this.$emit('add', todo);
            this.inputTodo = '';
        }
    }
}
</script>

<style scoped>
.header input{
    width: 560px; 
    height: 25px; 
    border: 1px solid #ccc;
    border-radius: 4px; 
    padding: 4px 8px;
}
</style>