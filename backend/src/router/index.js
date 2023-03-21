import {createRouter, createWebHistory} from "vue-router";

import Dashboard from "../view/Dashboard.vue";
import Login from "../view/Login.vue";


const routes = [
    {
    	path:'/dashboard',
    	name:'dashboard',
    	component: Dashboard
    },
    {
    	path:'/login',
    	name:'login',
    	component: Login
    },

];

const router = createRouter({

	history: createWebHistory(),
	routes
})

export default router;