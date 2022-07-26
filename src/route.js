import { createWebHashHistory,createRouter } from "vue-router";
import HeaderBar from './components/HeaderBar.vue';
// import CustomerSearch from './components/CustomerSearch.vue'

const routes=[
    {
        
        path:'/',
        component: HeaderBar,
    },
];

const router=createRouter({
    history:createWebHashHistory(),
    routes,
});

export default router;