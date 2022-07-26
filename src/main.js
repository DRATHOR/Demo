import Vue from 'vue'
// import VueRouter from 'vue-router'
import App from './App.vue'
// import HeaderBar from './components/HeaderBar.vue'

// Vue.use(VueRouter);
// const routes=[
//   {
//     path:'/',
//     component:HeaderBar,
//   }
// ];

// const router=new VueRouter({
//   routes,
// })
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
