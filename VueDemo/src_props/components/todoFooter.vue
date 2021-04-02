<template>
  <div class="footer">
    <label>
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>已完成{{checkedSize}} / 全部{{todos.length}}</span>
    <button class="btn btn-danger" @click="clearAll">清除已完成</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    methods:{
        clearAll(){
            this.clear();
        }
    },
    computed:{
        checkedSize(){
            const checked = this.todos.filter(todo=>todo.checked)
            return checked.length
        },
        isAll: {
            get(){
                return this.todos.length===this.checkedSize && this.todos.length>0;
            },
            set(value){
                this.selectAll(value)
            }
        }
    },
    props:{
        todos:Array,
        selectAll: Function,
        clear: Function
    }
};
</script>

<style scoped>
.footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}
.footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
.footer button {
  float: right;
  margin-top: 5px;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}
</style>