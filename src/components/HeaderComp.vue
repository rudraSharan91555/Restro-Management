<template>
<div class="nav">
    <div class="hamburger" @click="toggleMenu">
        &#9776;

    </div>
    <div :class="{'nav-links': true, 'active': menuActive}">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="AddComp" class="nav-link">Add Restaurant</router-link>
        <a v-on:click="logout" href="#" class="nav-link">Log Out</a>
    </div>
</div>
</template>

<script>
export default {
    name: 'HeaderComp',
    data() {
        return {
            menuActive: false
        };
    },
    methods: {
        toggleMenu() {
            this.menuActive = !this.menuActive;
        },
        logout() {
            localStorage.clear();
            this.$router.push({
                name: 'LoginComp'
            });
        }
    }
}
</script>

<style>
.nav {
    background-color: #51667b;
    border-bottom: 2px solid #ccc;
    padding: 10px 0;
    position: relative;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
}

.hamburger {
    display: none;
    font-size: 30px;
    cursor: pointer;
    flex-direction: column;
    color: #0ff;
    gap: 5px;
    /* margin-right: auto;  */
}

.nav-links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
}

.nav-link {
    flex: 1;
    text-align: center;
    padding: 14px 0;
    color: #0ff;
    text-decoration: none;
    transition: color 0.3s, transform 0.3s;
    position: relative;
}

.nav-link::after {
    content: '';
    display: block;
    height: 2px;
    width: 0;
    background: #0ff;
    transition: width 0.3s;
    position: absolute;
    left: 50%;
    bottom: -5px;
    transform: translateX(-50%);
}

.nav-link:hover {
    color: #ccc;
}

.nav-link:hover::after {
    width: 100%;
}

.nav-links.active {
    display: block;
}

@media (max-width: 768px) {
    .hamburger {
        display: block;
    }

    .nav-links {
        display: none;
        position: relative;
        flex-direction: column;
        width: 100%;
    }

    .nav-links.active {
        display: flex;
    }

    .nav-links .nav-link {
        
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin: 5px;
        padding: 0;
    }
}
</style>
