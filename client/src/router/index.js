import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/screens/Login/Login.vue'),
  },
  {
    path: '/dash',
    name: 'Dash',
    component: () => import('@/screens/Master/Dash.vue'),
    children: [
      {
        path: '',
        name: 'Dash.Home',
        component: () => import('@/screens/Home/Home.vue'),
      },
      {
        path: 'funcionarios',
        name: 'Dash.Employee',
        component: () => import('@/screens/Employee/Employee.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
