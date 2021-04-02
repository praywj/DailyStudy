<template>
  <div>
    <ul class="main">
      <todo-item v-for="(todo,index) in todos" :key="index" :todo='todo' :index='index'/>
    </ul>
  </div>
</template>

<script>
import todoItem from './todoItem.vue'
export default {
    props:{
        todos:Array,
    },
    components:{
        todoItem
    }
};
</script>

<style scoped>
.main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}
</style>