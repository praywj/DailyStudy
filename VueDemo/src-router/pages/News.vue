<template>
    <ul>
        <li v-for="(ne, index) in news" :key="index">{{ne}}</li>
    </ul>
</template>

<script>
export default {
    data(){
        return{
            news: ['news001', 'news002', 'news003']
        }
    }
}
</script>