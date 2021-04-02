<template>
  <div>
    <p class="msg">{{msg}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg:'this is HelloWorld.Vue'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .msg{color: red; font-size: 25px;}
</style>
