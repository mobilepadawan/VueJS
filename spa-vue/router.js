import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Contacto from './views/Contacto.vue'
import Contacto from './views/Ayuda.vue'

Vue.use(VueRouter)

export default new router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: 'Home'
        },
        {
            path: '/',
            name: 'contacto',
            component: 'Contacto'
        },
        {
            path: '/',
            name: 'ayuda',
            component: 'Ayuda'
        },
    ]
})









