import Vue from 'vue';
import Router from 'vue-router';
import {store} from './store';

// Components
import Home from '../pages/Home.vue';

Vue.use(Router);

const router =  new Router({
  mode: 'history',
  base: '/coolchristmas/',
  routes: [
    {
      path: '/',
      // Redirect to this route on load
      redirect: '/home/'
    },
    {
      path: '/home/',
      name: 'Home',
      pathToRegexpOptions: { strict: true },
      component: Home
    },
    {
      path: '/about/',
      name: 'About',
      pathToRegexpOptions: { strict: true },
      component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue')
    },
    {
      path: '/products/',
      name: 'Products',
      pathToRegexpOptions: { strict: true },
      component: () => import(/* webpackChunkName: "products" */ '../pages/Products.vue'),
      beforeEnter: (to, from, next) => {
        if(!store.getters.isAuthenticated) 
        {
          next("/login/")
        }
        else next()
      }
    },

    {
      path: '/register/',
      name: 'Register',
      pathToRegexpOptions: { strict: true },
      component: () => import(/* webpackChunkName: "register" */ '../pages/Register.vue')
    },
    {
      path: '/login/',
      name: 'Login',
      pathToRegexpOptions: { strict: true },
      component: () => import(/* webpackChunkName: "login" */ '../pages/Login.vue')
    },
    {
      path: '/company-checkout/employees/',
      name: 'Checkout',
      pathToRegexpOptions: { strict: true },
      component: () => import(/* webpackChunkName: "employees" */ '../pages/Checkout/Checkout-company.vue')
    },
    {
      path: '/company-checkout/delivery/',
      name: 'Delivery',
      pathToRegexpOptions: { strict: true },
      component: () => import(/* webpackChunkName: "delivery" */ '../pages/Checkout/Delivery.vue')
    },
    {
      path: '/company-checkout/payment/',
      name: 'Payment',
      pathToRegexpOptions: { strict: true },
      component: () => import(/* webpackChunkName: "payment" */ '../pages/Checkout/Payment.vue')
    },
    {
      path: '/company-checkout/success/',
      name: 'Success',
      pathToRegexpOptions: { strict: true },
      component: () => import(/* webpackChunkName: "success" */ '../pages/Checkout/Success.vue')
    },
    {
      path: '/products/:id/',
      name: 'Product',
      pathToRegexpOptions: { strict: true },
      component: () => import(/* webpackChunkName: "product" */ '../pages/Product.vue')
    },
    {
      path: '/products-employee/:id/',
      name: 'Product-employee',
      pathToRegexpOptions: { strict: true },
      component: () => import(/* webpackChunkName: "product-employee" */ '../pages/Product-employee.vue')
    },
    {
      path: '/products-employee/',
      name: 'Products',
      pathToRegexpOptions: { strict: true },
      component: () => import(/* webpackChunkName: "product" */ '../pages/Products-employee.vue')
    },
    {
      path: '/basket-company/',
      name: 'Basket-company',
      pathToRegexpOptions: { strict: true },
      component: () => import(/* webpackChunkName: "basket" */ '../pages/Basket.vue')
    },
    {
      path: '/employee-checkout/',
      name: 'Employee-chekout',
      pathToRegexpOptions: { strict: true },
      component: () => import(/* webpackChunkName: "basket" */ '../pages/Employee-checkout.vue')
    },

  ]
});

export default router;
