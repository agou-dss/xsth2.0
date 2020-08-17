import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = resolve => require(['../views/Home.vue'], resolve);
const Morethings = resolve => require(['../views/Morethings.vue'], resolve);
const Previousselection = resolve => require(['../views/Previousselection.vue'], resolve);
const Privileges = resolve => require(['../views/Privileges.vue'], resolve);
const Wangzhegoods = resolve => require(['../views/Wangzhegoods.vue'], resolve);
const Productdetail = resolve => require(['../views/Productdetail.vue'], resolve);
const Shopcar = resolve => require(['../views/Shopcar.vue'], resolve);

Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      redirect:'/home',
      component:Home
    },
  {
    path: '/home',
    name: 'Home',
    component:Home
  },
  {
    path: '/morethings',
    name: 'Morethings',
    component: Morethings
  },
  {
    path: '/previousselection',
    name: 'Previousselection',
    component: Previousselection
  },
  {
    path: '/privileges',
    name: 'Privileges',
    component: Privileges
  },
  {
    path: '/wangzhegoods',
    name: 'Wangzhegoods',
    component: Wangzhegoods
  },
  {
    path: '/productdetail/:id',
    name: 'Productdetail',
    component: Productdetail
  },
  {
    path: '/shopcar',
    name: 'Shopcar',
    component:Shopcar
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})




export default router
