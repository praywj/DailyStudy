<template>
  <div>
    <img src='./assets/logo.png' alt="logo" class="logo">
    <!-- 3.使用组件标签 -->
    <HelloWorld/>
  </div>
</template>

<script>
  //1.引入组件
  import HelloWorld from './components/HelloWorld.vue'
  export default{
    //2.映射组件标签
    components:{
      HelloWorld
    }
  }
</script>

<style scoped>
  .logo{width: 200px; height: 200px;}
</style>
