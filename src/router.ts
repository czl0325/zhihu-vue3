import {createRouter, createWebHistory} from 'vue-router'
import Register from "@/pages/Register.vue";
import Login from "@/pages/Login.vue";
import Home from "@/pages/Home.vue";
import Detail from "@/pages/Detail.vue";

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: Detail
        }
    ]
})

export default router
