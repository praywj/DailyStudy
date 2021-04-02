<template>
  <li @mouseenter='showButton(true)' @mouseleave='showButton(false)' :style="{background:bgColor}">
    <label>
      <input type="checkbox" v-model="todo.checked"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show='isShow' @click='deleteItem'>删除</button>
  </li>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
    data(){
        return{
            isShow: false,
            bgColor: 'white'
        }
    },
    methods:{
        showButton(show){
            this.isShow=show;
            if(show){
                this.bgColor='gray';
            }else{
                this.bgColor='white'
            }
        },
        deleteItem(){
            // this.deleteA(this.index);
            //发布消息
          PubSub.publish('delete', this.index);
        }
    },
    props:{
        todo: Object,
        index: Number,
    }
};
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 8px;
  border-bottom: 1px solid #ddd;
}
li label {
  cursor: pointer;
}
li:last-child {
  border-bottom: none;
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
li button{
  float: right;
  margin-top: 5px;
}
</style>