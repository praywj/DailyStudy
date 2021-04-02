import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
    el: '#app',
    components:{
        App
    },
    template:'<App/>',
    //注册路由器
    router
})