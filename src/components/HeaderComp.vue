<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="AddComp">Add Restaurant</router-link>
        <!-- <router-link to="UpdateComp">Update Restaurant</router-link> -->
        <a v-on:click="logout" href="#">Log Out</a>
    </div>
</template>

<script>
export default {
    name: 'HeaderComp',
    methods:{
        logout()
        {
            localStorage.clear();
            this.$router.push({name:'LoginComp'})
        }
    }
}
</script>

<style>
.nav {
    background-color: #51667b; 
    border-bottom: 2px solid #ccc;
    text-decoration: none;
    overflow: hidden; 
    padding: 10px 0;
}

.nav a {
    float: left; 
    display: block; 
    color: #0ff;
    text-align: center; 
    padding: 14px 16px;
    text-decoration: none; 
    font-size: 18px; 
    position: relative; 
    overflow: hidden; 
    transition: color 0.3s; 
}

.nav a::before {
    content: ''; 
    position: absolute; 
    left: 50%; 
    bottom: 0; 
    width: 100%; 
    height: 2px; 
    text-decoration: none;
    background: rgba(0, 255, 255, 0.6); 
    transform: translateX(-50%); 
    transition: height 0.3s , background 0.3s;
    animation: neon 1.5s infinite alternate; 
}

.nav a:hover {
    color: #000; 
}

.nav a:hover::before {
    height: 4px; 
    text-decoration: none;
    background: rgba(0, 255, 255, 1);}
    


@keyframes neon {
    0% {
        box-shadow: 0 0 5px rgba(0, 255, 255, 0.8), 0 0 10px rgba(0, 255, 255, 0.6);
    }
    100% {
        box-shadow: 0 0 20px rgba(0, 255, 255, 1), 0 0 30px rgba(0, 255, 255, 0.8);
    }
}
</style>
