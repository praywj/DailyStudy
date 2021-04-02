<template>
    <div>
        <h2>About</h2>
        <p v-for="(m, index) in msg" :key='index'>{{m}}</p>
        <label for="">
            <input type="text" v-model='data'>
            <button @click="addmsg">submit</button>
        </label>
    </div>
</template>

<script>
export default {
    data(){
        return{
            data:''
        }
    },
    props:{
        msg:Array
    },
    methods:{
        addmsg(){
            this.msg.push(this.data);
            this.data = ''
        }
    }
}
</script>