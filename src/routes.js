
import { createRouter,createWebHistory } from 'vue-router'
import SignUp from './components/SignUp.vue'
import HomeComp from './components/HomeComp.vue'
import LoginComp from './components/LoginComp.vue'

import AddComp from './components/AddComp.vue'
import UpdateComp from './components/UpdateComp.vue'

const routes = [
    {
        name:'HomeComp',
        component:HomeComp,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:'LoginComp',
        component:LoginComp,
        path:'/loginComp'
    },
    {
        name:'AddComp',
        component:AddComp,
        path:'/AddComp'
    },
    {
        name:'UpdateComp',
        component:UpdateComp,
        path:'/UpdateComp/:id'
    },
    
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router