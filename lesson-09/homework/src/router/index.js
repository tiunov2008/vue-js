import Vue from 'vue'
import VueRouter from 'vue-router'

import FirstView from '@/views/FirstView.vue'
import SecondView from '@/views/SecondView.vue'
Vue.use(VueRouter)

const routes = [
    {path: '/', component: FirstView},
    {name: 'second', path: '/second', component: SecondView},
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router