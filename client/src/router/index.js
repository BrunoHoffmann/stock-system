import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/usuario',
    name: 'usuario',
    component: () => import('../screens/User/User.vue'),
  },
  {
    path: '/usuario/adicionar',
    name: 'usuario.adicionar',
    component: () => import('../screens/User/UserAdd.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
