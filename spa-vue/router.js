import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Contacto from './views/Contacto.vue'
import Ayuda from './views/Ayuda.vue'

Vue.use(Router)

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