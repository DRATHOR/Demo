import { createWebHashHistory, createRouter } from "vue-router";
import Home from '../src/Pages/Home.vue'
//import HeaderBar from './components/HeaderBar.vue';
import OpenOrder from '../src/Pages/OpenOrder.vue'

const routes=[
    {
        name:'Home',
        path:'/',
        component:Home,
    },
     {
        name:'OpenOder',
        path:'/open-order',
        component:OpenOrder,
    },
];

const router=createRouter({
    history:createWebHashHistory(),
    routes,
});

export default router;