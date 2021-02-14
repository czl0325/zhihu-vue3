import {createRouter, createWebHistory} from 'vue-router'
import Register from "@/pages/Register.vue";
import Login from "@/pages/Login.vue";
import Home from "@/pages/Home.vue";
import Detail from "@/pages/Detail.vue";
import {getUserById} from '@/web/WebManager'
import store from "@/store";

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

router.beforeEach((to, from, next) => {
    const { user } = store.state;
    const id = parseInt(localStorage.getItem('id') || '')
    if (id) {
        if (!user.userName) {
            getUserById(id).then(res=>{
                store.commit('updateUser', res)
                next()
            }).catch(()=>{
                next()
            })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router
