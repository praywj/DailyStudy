<template>
    <div>
        <ul>
            <li v-for="(m, index) in message" :key='index'>
                <!-- id: {{m.id}}   title: {{m.title}}  -->
                <router-link :to='`/home/message/detail/${m.id}`'>{{m.title}}</router-link>
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return{
            message:[
                {id:1, title:'Message001'}, {id:3, title:'Message003'},{id:5, title:'Message005'}
            ]
        }
    }
}
</script>