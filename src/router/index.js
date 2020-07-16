import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './paths';

Vue.use(VueRouter)

export const router = new VueRouter({
    routes,
    mode: 'history'
})