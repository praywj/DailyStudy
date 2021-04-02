import VueRouter from 'vue-router'
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/MessageDetail.vue'
import Vue from 'vue'

//声明使用vue-router插件
Vue.use(VueRouter)

export default new VueRouter({
    //配置路由
    routes:[
        {
            //一般路由
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children:[
                {
                    path: '/home/news',
                    component: News
                },
                {
                    path: 'message',
                    component: Message,
                    children:[
                        {
                            //路由占位
                            path: 'detail/:id',
                            component: Detail
                        }
                    ]
                },
                {
                    path: '',
                    redirect: '/home/news'
                }
            ]
        },
        {
            //自动跳转路由
            path: '/',
            redirect: '/about'
        }
    ]
})