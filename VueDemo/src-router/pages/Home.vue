<template>
    <div>
        <h2>Home</h2>
        <router-link to='/home/news'><button>News</button></router-link>
        <router-link to='message'><button>Message</button></router-link>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>