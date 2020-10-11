import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/index',
    children: [
      { path: 'index', name: 'index', component: () => import('../pages/index.vue') },
      { path: 'product/:id', name: 'product', component: () => import('../pages/product.vue') },
      { path: 'detail/:id', name: 'detail', component: () => import('../pages/detail.vue') }
    ]
  },
  {
    path: "/cart",
    name: 'cart',
    component: () => import('../pages/cart.vue')
  },
  {
    path: "/order",
    name: 'order',
    component: () => import('../pages/order.vue'),
    children: [
      { path: 'list', name: "orderList", component: () => import('../pages/orderList.vue') },
      { path: 'confirm', name: "orderCon", component: () => import('../pages/orderConfirm.vue') },
      { path: 'pay', name: "orderPay", component: () => import('../pages/orderPay.vue') }


    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
