import {createRouter, createWebHistory} from "vue-router";

import Dashboard from "../view/Dashboard.vue";
import Login from "../view/Login.vue";
import forgotPassword from "../view/Forgot-Password.vue";



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
    {
    	path:'/forgot-password',
    	name:'forgot-password',
    	component: forgotPassword
    },

];

const router = createRouter({

	history: createWebHistory(),
	routes
})

export default router;